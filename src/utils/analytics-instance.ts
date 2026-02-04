'use client';

import { Analytics } from './analytics';

// Create singleton instance
let analyticsInstance: Analytics | null = null;

/**
 * Gets or creates the analytics instance
 * This ensures only one instance exists throughout the app
 */
export function getAnalytics(): Analytics {
  if (typeof window === 'undefined') {
    // Return a mock instance for SSR
    return {
      track: async () => {},
      trackPageView: async () => {},
      trackClick: async () => {},
      trackAction: async () => {},
      getAnonymousId: () => '',
      resetAnonymousId: () => {},
    } as unknown as Analytics;
  }

  if (!analyticsInstance) {
    analyticsInstance = new Analytics({
      apiUrl: process.env.NEXT_PUBLIC_ANALYTICS_API_URL || '/api/analytics',
      cookieName: 'anonymous_user_id',
      cookieExpireDays: 365,
    });
  }

  return analyticsInstance;
}

// Export a default instance
export const analytics = getAnalytics();
