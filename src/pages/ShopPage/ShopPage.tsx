import PageTitle from "../../components/PageTitle/PageTitle";
import {
  SHOP_CHECKOUT_URL,
  SHOP_PRODUCTS,
  shopInterestMailto,
} from "../../data/shop";
import "./ShopPage.css";

export default function ShopPage() {
  const checkoutReady = Boolean(SHOP_CHECKOUT_URL);

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

      <section className="shop-action">
        <h2 className="shop-section-title">Pre-orders</h2>
        <p>
          {checkoutReady
            ? "Checkout is live. Reserve a print below and I'll confirm details by email."
            : "Checkout link coming soon. Email me to get on the waitlist and I'll notify you when pre-orders open."}
        </p>
        {checkoutReady ? (
          <a
            className="shop-button"
            href={SHOP_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open checkout
          </a>
        ) : (
          <a className="shop-button" href={shopInterestMailto()}>
            Join the waitlist
          </a>
        )}
      </section>

      <section className="shop-catalog" aria-label="Prints available for pre-order">
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
                  <a
                    className="shop-card-action"
                    href={SHOP_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pre-order
                  </a>
                ) : (
                  <a
                    className="shop-card-action"
                    href={shopInterestMailto(product.name)}
                  >
                    Request this print
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
