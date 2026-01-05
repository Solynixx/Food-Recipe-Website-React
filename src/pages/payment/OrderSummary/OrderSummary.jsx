import React from "react";
import "./OrderSummary.css";

/**
 * OrderSummary component displays a breakdown of order costs and total.
 *
 * Props:
 * - summary: { subtotal?: number, shipping?: number, tax?: number }
 * - money: function (optional) - formatter function for currency values
 *
 * @extends React.Component
 */
export default class OrderSummary extends React.Component {
  /**
   * Render the order summary table.
   * @returns {JSX.Element} Order summary section.
   */
  render() {
    const { summary = {}, money } = this.props;
    const rows = [
      { label: "Subtotal", value: summary.subtotal },
      { label: "Shipping", value: summary.shipping },
      { label: "Tax", value: summary.tax },
    ];
    const format = money || ((n) => `$${Number(n || 0).toFixed(2)}`);
    const total = (summary.subtotal || 0) + (summary.shipping || 0) + (summary.tax || 0);

    return (
      <section className="order-summary">
        <h2>Order Summary</h2>
        <table className="summary-table">
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td>{r.label}</td>
                <td>{format(r.value)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{format(total)}</td>
            </tr>
          </tfoot>
        </table>
      </section>
    );
  }
}