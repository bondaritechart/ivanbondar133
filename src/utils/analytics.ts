import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

interface AnalyticsConfig {
  apiUrl: string;
  cookieName?: string;
  cookieExpireDays?: number;
  enableGeolocation?: boolean;
}

interface LocationData {
  latitude?: number;
  longitude?: number;
  accuracy?: number;
  timezone: string;
  language: string;
  country?: string;
}

interface TrackEventPayload {
  host: string;
  eventName: string;
  url: string;
  properties?: string;
  userUuid: string;
  location?: string;
}

export class Analytics {
  private apiUrl: string;
  private cookieName: string;
  private cookieExpireDays: number;
  private anonymousId: string;
  private enableGeolocation: boolean;
  private locationData: LocationData | null = null;
  private locationPromise: Promise<LocationData | null> | null = null;

  constructor(config: AnalyticsConfig) {
    this.apiUrl = config.apiUrl;
    this.cookieName = config.cookieName || 'anonymous_user_id';
    this.cookieExpireDays = config.cookieExpireDays || 365;
    this.enableGeolocation = config.enableGeolocation !== false; // Default to true

    // Initialize anonymous ID
    this.anonymousId = this.getOrCreateAnonymousId();

    // Initialize location data collection
    if (this.enableGeolocation && typeof window !== 'undefined') {
      this.collectLocationData();
    }
  }

  /**
   * Gets existing anonymous ID from cookie or creates a new one
   */
  private getOrCreateAnonymousId(): string {
    // Check if anonymous ID exists in cookies
    const existingId = Cookies.get(this.cookieName);

    if (existingId) {
      return existingId;
    }

    // Create new anonymous ID
    const newId = uuidv4();

    // Store in cookie
    Cookies.set(this.cookieName, newId, {
      expires: this.cookieExpireDays,
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return newId;
  }

  /**
   * Gets the current anonymous ID
   */
  public getAnonymousId(): string {
    return this.anonymousId;
  }

  /**
   * Collects location data including geolocation, timezone, and language
   */
  private async collectLocationData(): Promise<LocationData | null> {
    // Return cached data if already collected
    if (this.locationData) {
      return this.locationData;
    }

    // Return existing promise if already in progress
    if (this.locationPromise) {
      return this.locationPromise;
    }

    // Start new collection
    this.locationPromise = (async () => {
      const locationData: LocationData = {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
      };

      // Try to get geolocation if enabled
      if (this.enableGeolocation && 'geolocation' in navigator) {
        try {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              timeout: 10000,
              maximumAge: 300000, // Cache for 5 minutes
              enableHighAccuracy: false,
            });
          });

          locationData.latitude = position.coords.latitude;
          locationData.longitude = position.coords.longitude;
          locationData.accuracy = position.coords.accuracy;
        } catch (error) {
          // Silently fail if user denies permission or geolocation fails
          console.debug('Geolocation not available:', error);
        }
      }

      // Cache the location data
      this.locationData = locationData;
      return locationData;
    })();

    return this.locationPromise;
  }

  /**
   * Gets current location data (waits for collection if still in progress)
   */
  private async getLocationData(): Promise<LocationData | null> {
    if (this.locationData) {
      return this.locationData;
    }

    if (this.locationPromise) {
      return this.locationPromise;
    }

    return this.collectLocationData();
  }

  /**
   * Tracks a user event
   */
  public async track(
    event: string,
    properties?: Record<string, any>
  ): Promise<void> {
    try {
      // Get location data (will use cached if available)
      const location = await this.getLocationData();

      const payload: TrackEventPayload = {
        eventName: event,
        userUuid: this.anonymousId,
        properties: JSON.stringify(properties) || '{}',
        host: window.location.host,
        url: window.location.pathname,
        location: location ? JSON.stringify(location) : undefined,
      };

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error('Analytics tracking failed:', response.statusText);
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  /**
   * Tracks a page view
   */
  public async trackPageView(page: string, properties?: Record<string, any>): Promise<void> {
    return this.track('page_view', {
      page,
      ...properties,
    });
  }

  /**
   * Tracks a click event
   */
  public async trackClick(element: string, properties?: Record<string, any>): Promise<void> {
    return this.track('click', {
      element,
      ...properties,
    });
  }

  /**
   * Tracks a custom event with specific action type
   */
  public async trackAction(
    action: string,
    category?: string,
    properties?: Record<string, any>
  ): Promise<void> {
    return this.track('user_action', {
      action,
      category,
      ...properties,
    });
  }

  /**
   * Manually requests location permission and updates location data
   * Useful for requesting permission at a specific point in user flow
   */
  public async requestLocationPermission(): Promise<LocationData | null> {
    // Clear cached data to force new request
    this.locationData = null;
    this.locationPromise = null;
    return this.collectLocationData();
  }

  /**
   * Gets the current location data (without requesting if not already available)
   */
  public getCurrentLocationData(): LocationData | null {
    return this.locationData;
  }

  /**
   * Resets the anonymous ID (e.g., for logout or privacy purposes)
   */
  public resetAnonymousId(): void {
    Cookies.remove(this.cookieName);
    this.anonymousId = this.getOrCreateAnonymousId();
  }
}
