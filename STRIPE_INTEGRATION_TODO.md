# Stripe Integration TODO

Hosted Stripe Checkout is wired for the Shop (same setup as chaz-mckinney). Use this file for remaining setup on this site.

## Values to Replace

**Files containing placeholders:**
- [server/checkout.js](server/checkout.js)
- [.env.example](.env.example)

| Field | Current Value | What to Set |
|-------|--------------|-------------|
| mode | payment | Keep `"payment"` for one-time print pre-orders. |
| success_url | `${DOMAIN}/#/shop?checkout=success&session_id={CHECKOUT_SESSION_ID}` | Update `DOMAIN` for production (`https://cmckinney-59.github.io/the-baybayin-project`). |
| cancel_url | `${DOMAIN}/#/shop?checkout=cancel` | Same `DOMAIN` note. |
| line_items[].price (all four products) | `STRIPE_PRICE_*=price_...` | Real Stripe Price IDs from the Dashboard. |
| STRIPE_SECRET_KEY | `sk_test_...` | Secret key from API keys. Never commit. |
| VITE_CHECKOUT_API_URL | `http://localhost:4243/api/create-checkout-session` | Local API URL; production URL of your hosted checkout server. |

## Configured Parameters

**Files:** [server/checkout.js](server/checkout.js)

| Parameter | Value |
|-----------|-------|
| ui_mode | hosted_page |
| billing_address_collection | auto |
| phone_number_collection | `{ enabled: false }` |
| automatic_tax | `{ enabled: false }` |
| allow_promotion_codes | false |
| submit_type | auto |
| integration_identifier | hosted_web_0002 |
| origin_context | web |

## Setup

```bash
cp .env.example .env
npm run dev:all
```

Open `http://localhost:5173/the-baybayin-project/#/shop`.

Default API port is **4243** so it can run alongside chaz-mckinney’s server on 4242. You can point both sites at one shared checkout host in production.

GitHub Pages is static — host `server/checkout.js` elsewhere and set production `VITE_CHECKOUT_API_URL` at build time.

### Resources

- https://docs.stripe.com/checkout/quickstart
- https://docs.stripe.com/testing
- https://support.stripe.com
