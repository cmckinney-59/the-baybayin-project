import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  SHOP_PRODUCTS,
  shopHasLiveCheckout,
  shopInterestMailto,
  startCheckout,
} from "../../data/shop";
import "./ShopPage.css";

export default function ShopPage() {
  const checkoutReady = shopHasLiveCheckout();
  const [searchParams] = useSearchParams();
  const checkoutStatus = searchParams.get("checkout");
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handlePreorder(productId: string) {
    setError(null);
    setLoadingId(productId);
    try {
      const url = await startCheckout(productId);
      window.location.assign(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed.");
      setLoadingId(null);
    }
  }

  return (
    <article className="shop-page">
      <PageTitle title="Shop" />

      <section className="shop-intro">
        <p>
          Proclamation prints from ScriptWorks are open for pre-order.
          Production starts after the pre-order window, and you&apos;ll get a
          ship estimate before anything goes to print.
        </p>
      </section>

      {checkoutStatus === "success" && (
        <p className="shop-status" role="status">
          Thanks — your pre-order checkout completed. You&apos;ll get a
          confirmation email from Stripe shortly.
        </p>
      )}
      {checkoutStatus === "cancel" && (
        <p className="shop-status" role="status">
          Checkout was cancelled. You can try again whenever you&apos;re ready.
        </p>
      )}
      {error && (
        <p className="shop-status" role="alert">
          {error}
        </p>
      )}

      <section
        className="shop-catalog"
        aria-label="Prints available for pre-order"
      >
        <h2 className="shop-section-title">Prints</h2>
        <ul className="shop-grid">
          {SHOP_PRODUCTS.map((product) => (
            <li key={product.id} className="shop-card">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="shop-card-image"
                loading="lazy"
              />
              <div className="shop-card-body">
                <p className="shop-card-status">Pre-order</p>
                <h3 className="shop-card-title">{product.name}</h3>
                <p className="shop-card-script">{product.script}</p>
                <p className="shop-card-description">{product.description}</p>
                {checkoutReady ? (
                  <button
                    type="button"
                    className="shop-card-action"
                    disabled={loadingId === product.id}
                    onClick={() => handlePreorder(product.id)}
                  >
                    {loadingId === product.id ? "Redirecting…" : "Pre-order"}
                  </button>
                ) : (
                  <a
                    className="shop-card-action"
                    href={shopInterestMailto(product.name)}
                  >
                    Pre-order
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
