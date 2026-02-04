import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

interface AnalyticsConfig {
  apiUrl: string;
  cookieName?: string;
  cookieExpireDays?: number;
}

interface TrackEventPayload {
  host: string;
  eventName: string;
  url: string;
  properties?: string;
  userUuid: string
}

export class Analytics {
  private apiUrl: string;
  private cookieName: string;
  private cookieExpireDays: number;
  private anonymousId: string;

  constructor(config: AnalyticsConfig) {
    this.apiUrl = config.apiUrl;
    this.cookieName = config.cookieName || 'anonymous_user_id';
    this.cookieExpireDays = config.cookieExpireDays || 365;

    // Initialize anonymous ID
    this.anonymousId = this.getOrCreateAnonymousId();
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
   * Tracks a user event
   */
  public async track(
    event: string,
    properties?: Record<string, any>
  ): Promise<void> {
    try {
      const payload: TrackEventPayload = {
        eventName: event,
        userUuid: this.anonymousId,
        properties: JSON.stringify(properties) || '{}',
        host: window.location.host,
        url: window.location.pathname,
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
   * Resets the anonymous ID (e.g., for logout or privacy purposes)
   */
  public resetAnonymousId(): void {
    Cookies.remove(this.cookieName);
    this.anonymousId = this.getOrCreateAnonymousId();
  }
}
