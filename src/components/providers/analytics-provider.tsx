'use client';

import { usePathname } from 'next/navigation';
import { AnalyticsProvider as BaseAnalyticsProvider } from '@powerlimit/analytics/react';
import { analytics } from '@/utils/analytics-instance';

export function AnalyticsProvider() {
  const pathname = usePathname();

  return (
    <BaseAnalyticsProvider
      analytics={analytics}
      pathname={pathname}
      properties={{
        referrer: typeof document !== 'undefined' ? document.referrer : undefined,
      }}
    />
  );
}
