import "dotenv/config";
import express from "express";
import cors from "cors";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

/** Map shop product ids → Stripe Price IDs (replace placeholders in .env). */
const PRICE_BY_PRODUCT = {
  "proclamations-deseret": process.env.STRIPE_PRICE_PROCLAMATIONS_DESERET,
  "proclamations-aurebesh-canon":
    process.env.STRIPE_PRICE_PROCLAMATIONS_AUREBESH_CANON,
  "proclamations-aurebesh-legends":
    process.env.STRIPE_PRICE_PROCLAMATIONS_AUREBESH_LEGENDS,
  "proclamations-baybayin": process.env.STRIPE_PRICE_PROCLAMATIONS_BAYBAYIN,
};

const PORT = process.env.PORT || 4243;
const DOMAIN =
  process.env.DOMAIN || "http://localhost:5173/the-baybayin-project";

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const productId = req.body?.productId;
    const priceId = PRICE_BY_PRODUCT[productId];

    if (!priceId || priceId.startsWith("price_...")) {
      return res.status(400).json({
        error:
          "Unknown product or missing Stripe Price ID. Set STRIPE_PRICE_* in .env.",
      });
    }

    // One-time print pre-orders (not subscriptions).
    const mode = "payment";

    const sessionParams = {
      ui_mode: "hosted_page",
      mode,
      billing_address_collection: "auto",
      phone_number_collection: { enabled: false },
      automatic_tax: { enabled: false },
      allow_promotion_codes: false,
      submit_type: "auto",
      integration_identifier: "hosted_web_0002",
      origin_context: "web",
      success_url: `${DOMAIN}/#/shop?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}/#/shop?checkout=cancel`,
      line_items: [{ price: priceId, quantity: 1 }],
    };

    // payment_method_collection only applies to subscription mode.

    const session = await stripe.checkout.sessions.create(sessionParams);

    if (!session.url) {
      return res.status(500).json({ error: "Checkout Session missing URL." });
    }

    return res.json({ url: session.url });
  } catch (err) {
    console.error("create-checkout-session failed:", err.message);
    return res.status(500).json({ error: err.message || "Checkout failed." });
  }
});

app.listen(PORT, () => {
  console.log(`Stripe checkout server on http://localhost:${PORT}`);
});
