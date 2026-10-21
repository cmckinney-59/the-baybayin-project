import { FaPaypal } from "react-icons/fa";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./DonatePage.css";

const PAYPAL_URL = "https://www.paypal.me/ChazMcKinney59";

export default function DonatePage() {
  return (
    <article className="donate-page">
      <PageTitle title="Donate" />

      <section className="donate-intro">
        <p>
          The Baybayin Project is free to use. Donations help keep the
          transliterator alive and give more time to transcriptions, fonts,
          and new alphabets.
        </p>
      </section>

      <section className="donate-uses">
        <h2 className="donate-section-title">What donations support</h2>
        <ul>
          <li>Creation and maintenance of the transliterator</li>
          <li>Time to transcribe and review projects</li>
          <li>Fonts, research, and new writing systems</li>
        </ul>
      </section>

      <section className="donate-action">
        <h2 className="donate-section-title">How to give</h2>
        <p>Send a gift through PayPal. Any amount is appreciated.</p>
        <a
          className="donate-button"
          href={PAYPAL_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPaypal aria-hidden="true" />
          Donate with PayPal
        </a>
      </section>
    </article>
  );
}
