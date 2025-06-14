# blog-proxy

This simple proxy fetches content from your WordPress blog and serves
it under the `/api/blog/*` endpoint, enabling clean integration with
Cloudflare Worker routes.

## Setup

1. Deploy this repo to Vercel.
2. Navigate to `https://<your-vercel-app>/api/blog/` to test.
3. Plug your Vercel URL into the Cloudflare Worker to route requests.
