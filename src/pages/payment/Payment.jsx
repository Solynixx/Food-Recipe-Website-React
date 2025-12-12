import React from "react";
import "./Payment.css";
import Modals from "../home/Modals";
import { acceptedPayments, morePayments, footerLinks, shippingFields, paymentFields, state } from "./PaymentData";

export default class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.acceptedPayments = acceptedPayments
    this.morePayments = morePayments;
    this.footerLinks = footerLinks;
    this.shippingFields = shippingFields;
    this.paymentFields = paymentFields;
    this.state = state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  money(n) {
    return `$${Number(n || 0).toFixed(2)}`;
  }

  total() {
    const { subtotal, shipping, tax } = this.state.summary;
    return Number(subtotal || 0) + Number(shipping || 0) + Number(tax || 0);
  }

  cartCount() {
    return this.state.cart.length;
  }

  canSubmit() {
    if (this.cartCount() === 0) return false;

    const required = [
      "firstName",
      "lastName",
      "email",
      "address",
      "city",
      "state",
      "zip",
      "country",
      "cardName",
      "cardNumber",
      "expiry",
      "cvv",
    ];

    return required.every((k) => String(this.state.form[k] || "").trim().length > 0);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prev) => ({
      form: { ...prev.form, [name]: value },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.canSubmit()) return;

    alert("Purchase completed (demo).");
  }

  renderLogos(list, includeMore = false) {
    return (
      <div className="payment-logos">
        {list.map((p) => (
          <div className="payment-logo" key={p.alt}>
            <img className="img-fluid" src={p.src} alt={p.alt} />
          </div>
        ))}
        {includeMore && (
          <div className="others-payment">
            <a href="#more-payments-modal">
              <img className="img-fluid" src="/assets/icons/More.png" alt="Payments" />
            </a>
          </div>
        )}
      </div>
    );
  }

  renderFormSection(section) {
    return (
      <section className="payment-section" key={section.sectionTitle}>
        <h2>{section.sectionTitle}</h2>

        {section.groups.map((group, idx) => {
          const gridClass =
            group.columns && group.columns > 1 ? "form-grid" : "";

          return (
            <div className={gridClass} key={`${section.sectionTitle}-g-${idx}`}>
              {group.fields.map((f) => (
                <div className="form-group" key={f.id}>
                  <label htmlFor={f.id}>{f.label}</label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={this.state.form[f.id]}
                    maxLength={f.maxLength}
                    required={!!f.required}
                    onChange={this.handleChange}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </section>
    );
  }

  renderOrderSummary() {
    const { subtotal, shipping, tax } = this.state.summary;
    const rows = [
      { label: "Subtotal", value: subtotal },
      { label: "Shipping", value: shipping },
      { label: "Tax", value: tax },
    ];

    return (
      <section className="order-summary">
        <h2>Order Summary</h2>
        <table className="summary-table">
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td>{r.label}</td>
                <td>{this.money(r.value)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{this.money(this.total())}</td>
            </tr>
          </tfoot>
        </table>
      </section>
    );
  }

  renderCart() {
    const count = this.cartCount();

    return (
      <section className="cart-section">
        <h2>
          Shopping Cart <span className="cart-count">({count} items)</span>
        </h2>

        {count === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <p className="empty-cart-message">You haven't added any items yet!</p>
            <p className="empty-cart-submessage">Explore our shop and find something you love.</p>
            <a href="#shopping-modal" className="shop-link">
              Start Shopping
            </a>
          </div>
        ) : (
          <div className="cart-items">
            {this.state.cart.map((item) => (
              <div className="cart-item" key={item.id}>
                {item.name}
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

  render() {
    return (
      <div className="payment-page">

        <main>
          <div className="payment-container">
            <div className="payment-box">
              <header className="payment-header">
                <a href="/" className="back-link">
                  ← Back to Home
                </a>
                <h1>CHECKOUT 💫</h1>
                <p className="subtitle">Complete your celestial shopping experience</p>
              </header>

              <form className="payment-form" onSubmit={this.handleSubmit}>
                {this.renderCart()}
                {this.renderOrderSummary()}

                {this.shippingFields.map((s) => this.renderFormSection(s))}
                {this.paymentFields.map((s) => this.renderFormSection(s))}

                <section className="payment-section">
                  <h2>Payment Methods</h2>
                  <div className="payment-methods">
                    <p>We accept:</p>
                    {this.renderLogos(this.acceptedPayments, true)}
                  </div>
                </section>

                <div className="form-actions">
                  <a href="/" className="btn-secondary">
                    Cancel
                  </a>
                  <button type="submit" className="btn-primary" disabled={!this.canSubmit()}>
                    Complete Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <footer className="payment-footer">
          <ul className="footer-policy-links list-unstyled">
            {this.footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <p>© 2024 Celestial. All rights reserved.</p>
        </footer>

        <div id="more-payments-modal" className="modal">
          <div className="modal-content">
            <a href="#!" className="close">
              ×
            </a>
            <h2>More Payment Options</h2>
            <p>In addition to the main payment methods displayed, we also accept:</p>
            {this.renderLogos(this.morePayments)}
          </div>
        </div>

        <div id="security-modal" className="modal">
          <div className="modal-content">
            <a href="#!" className="close">
              ×
            </a>
            <h2>Security</h2>

            {[
              "We take the security of your information seriously. This site uses HTTPS to protect data in transit and follows common industry practices to help keep your information safe.",
              "Payments are processed by trusted, PCI-compliant third-party providers. We do not store full card numbers on our servers — only tokenized references where required by the payment provider.",
              "We retain personal data only as needed to provide services. Sensitive data (like passwords) should be stored hashed on production systems, and access is limited to authorized personnel only.",
            ].map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <h3>How You Can Help</h3>
            <ul>
              {[
                "Use a strong, unique password. Consider a password manager.",
                "Enable two-factor authentication where available.",
                "Don't share your credentials and log out from shared devices.",
                "Beware of phishing — we will never ask for your password or full card details by email.",
              ].map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>

            <p>
              <strong>Report issues:</strong>{" "}
              <a href="mailto:celesti4lrecip3s@gmail.com">celesti4lrecip3s@gmail.com</a>
            </p>
          </div>
        </div>

        <div id="shopping-modal" className="modal">
          <div className="modal-content">
            <a href="#!" className="close">
              ×
            </a>
            <h2>Choose a Shop:</h2>
            {[
              { href: "/shop/ingredients_shop.html", img: "/assets/shop/Ingredients/ingredients_pfp.jpg", label: "Cooking Ingredients", alt: "Ingredients" },
              { href: "/shop/kitchen_tools.html", img: "/assets/shop/Kitchen Tools/kitchen_tools_pfp.jpg", label: "Kitchen Tools", alt: "Kitchen Tools" },
              { href: "/shop/recipe_themed_merch.html", img: "/assets/shop/Recipe Themed/recipe_themed_merch_pfp.png", label: "Recipe Themed Merch", alt: "Recipe Themed Merch" },
              { href: "/shop/digital_products.html", img: "/assets/shop/Digital Products/digital_products_pfp.png", label: "Digital Products", alt: "Digital Products" },
            ].map((s) => (
              <a className="shop-contents shop-item" href={s.href} key={s.href}>
                <div className="shop-modal-pfps">
                  <img src={s.img} alt={s.alt} />
                </div>
                <p>{s.label}</p>
              </a>
            ))}
          </div>
        </div>

        <Modals />
      </div>
    );
  }
}