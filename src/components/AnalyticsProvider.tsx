'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/utils/analytics-instance';

export function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view on route change
    if (pathname) {
      analytics.trackPageView(pathname, {
        referrer: document.referrer,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }
  }, [pathname]);

  // This component doesn't render anything
  return null;
}

/**
 * Hook for tracking page views manually
 * 
 * Usage:
 * 
 * function MyComponent() {
 *   usePageTracking();
 *   return <div>...</div>;
 * }
 */
export function usePageTracking() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      analytics.trackPageView(pathname);
    }
  }, [pathname]);
}
