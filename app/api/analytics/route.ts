import { createAnalyticsHandler } from '@powerlimit/analytics/server';

export const POST = createAnalyticsHandler({
  apiUrl: process.env.ANALYTICS_API_URL!,
  anonymizeIp: false,
  includeUserAgent: true,
  onError: (error) => {
    console.error('Analytics API error:', error);
  },
});
