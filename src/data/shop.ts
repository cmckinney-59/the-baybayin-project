import proclamationsDeseret from "../assets/images/shop/proclamations-deseret.jpg";
import proclamationsAurebeshCanon from "../assets/images/shop/proclamations-aurebesh-canon.jpg";
import proclamationsAurebeshLegends from "../assets/images/shop/proclamations-aurebesh-legends.jpg";
import proclamationsBaybayin from "../assets/images/shop/proclamations-baybayin.jpg";

export const SHOP_INTEREST_EMAIL = "the.baybayin.project@gmail.com";

/** Server endpoint that creates a Stripe Checkout Session. Set in `.env` as VITE_CHECKOUT_API_URL. */
export const CHECKOUT_API_URL = import.meta.env.VITE_CHECKOUT_API_URL ?? "";

export type ShopProduct = {
  id: string;
  name: string;
  script: string;
  description: string;
  image: string;
  imageAlt: string;
  status: "preorder";
};

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "proclamations-deseret",
    name: "The LDS Proclamations: Deseret",
    script: "Deseret Alphabet",
    description:
      "The LDS Proclamations print set in the Deseret Alphabet — Living Christ, The Family, The Restoration, and The Articles of Faith.",
    image: proclamationsDeseret,
    imageAlt: "Deseret Alphabet proclamation print preview",
    status: "preorder",
  },
  {
    id: "proclamations-aurebesh-canon",
    name: "The LDS Proclamations: Aurebesh Canon",
    script: "Aurebesh (Canon)",
    description:
      "The LDS Proclamations print set in Canon Aurebesh — Living Christ, The Family, The Restoration, and The Articles of Faith.",
    image: proclamationsAurebeshCanon,
    imageAlt: "Canon Aurebesh proclamation print preview",
    status: "preorder",
  },
  {
    id: "proclamations-aurebesh-legends",
    name: "The LDS Proclamations: Aurebesh Legends",
    script: "Aurebesh (Legends)",
    description:
      "The LDS Proclamations print set in Legends Aurebesh — Living Christ, The Family, The Restoration, and The Articles of Faith.",
    image: proclamationsAurebeshLegends,
    imageAlt: "Legends Aurebesh proclamation print preview",
    status: "preorder",
  },
  {
    id: "proclamations-baybayin",
    name: "The LDS Proclamations: Tagalog Baybayin",
    script: "Tagalog Baybayin",
    description:
      "The LDS Proclamations print set in Tagalog Baybayin — Living Christ, The Family, The Restoration, and The Articles of Faith.",
    image: proclamationsBaybayin,
    imageAlt: "Tagalog Baybayin proclamation print preview",
    status: "preorder",
  },
];

export function shopHasLiveCheckout(): boolean {
  return Boolean(CHECKOUT_API_URL);
}

export async function startCheckout(productId: string): Promise<string> {
  if (!CHECKOUT_API_URL) {
    throw new Error("Checkout API URL is not configured.");
  }

  const response = await fetch(CHECKOUT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  });

  const data = (await response.json()) as { url?: string; error?: string };

  if (!response.ok || !data.url) {
    throw new Error(data.error || "Unable to start checkout.");
  }

  return data.url;
}

export function shopInterestMailto(productName?: string): string {
  const subject = productName
    ? `Pre-order interest: ${productName}`
    : "Proclamation print pre-order interest";
  const body =
    "Hi Chaz,%0A%0AI'm interested in pre-ordering a proclamation print.%0A%0APrint(s):%0AQuantity:%0AShipping city/country:%0A%0AThanks!";
  return `mailto:${SHOP_INTEREST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
}
