import { NextRequest, NextResponse } from 'next/server';

/**
 * Optional API route to proxy analytics requests to your 3rd party API
 * This is useful if you want to:
 * - Hide your analytics API endpoint from the client
 * - Add server-side validation or enrichment
 * - Handle authentication/API keys server-side
 */

/**
 * Gets the user's IP address from request headers
 * Handles various proxy and CDN scenarios
 */
function getClientIp(request: NextRequest): string | null {
  // Try various headers in order of reliability
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, get the first one (original client)
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  const trueClientIp = request.headers.get('true-client-ip'); // Akamai and Cloudflare
  if (trueClientIp) {
    return trueClientIp;
  }

  // Fallback - may not be available in all environments
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.eventName) {
      return NextResponse.json(
        { error: 'Event name is required' },
        { status: 400 }
      );
    }

    // Get your 3rd party analytics API URL from environment variables
    const analyticsApiUrl = process.env.ANALYTICS_API_URL;

    if (!analyticsApiUrl) {
      console.error('ANALYTICS_API_URL environment variable is not set');
      return NextResponse.json(
        { error: 'Analytics service not configured' },
        { status: 500 }
      );
    }

    // Get client IP address
    const ipAddress = getClientIp(request);

    // Get user agent
    const userAgent = request.headers.get('user-agent') || undefined;

    // Add server-side enrichment
    const enrichedPayload = {
      ...body,
      ipAddress,
      userAgent,
      serverTimestamp: new Date().toISOString(),
    };

    // Forward to your 3rd party analytics API
    const response = await fetch(analyticsApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any required API keys or authentication headers
        // 'Authorization': `Bearer ${process.env.ANALYTICS_API_KEY}`,
      },
      body: JSON.stringify(enrichedPayload),
    });

    if (!response.ok) {
      console.error('Analytics API error:', response.statusText);
      return NextResponse.json(
        { error: 'Failed to track event' },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests for health checks
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'analytics',
    timestamp: new Date().toISOString(),
  });
}
