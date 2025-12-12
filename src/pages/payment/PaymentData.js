const acceptedPayments = [
      { src: "/assets/logo/VISA.png", alt: "Visa" },
      { src: "/assets/logo/Mastercard.png", alt: "Mastercard" },
      { src: "/assets/logo/Amex.png", alt: "Amex" },
      { src: "/assets/logo/PayPal.png", alt: "PayPal" },
      { src: "/assets/logo/G Pay.png", alt: "Google Pay" },
      { src: "/assets/logo/AliPay.png", alt: "AliPay" },
      { src: "/assets/logo/AmazonPay.png", alt: "Amazon Pay" },
      { src: "/assets/logo/Stripe.png", alt: "Stripe" },
    ];

const morePayments = [
      { src: "/assets/logo/QRIS.png", alt: "QRIS" },
      { src: "/assets/logo/OVO.png", alt: "OVO" },
      { src: "/assets/logo/MANDIRI.png", alt: "Mandiri" },
      { src: "/assets/logo/BCA.png", alt: "BCA" },
      { src: "/assets/logo/ShopeePay.png", alt: "ShopeePay" },
      { src: "/assets/logo/BNI.png", alt: "BNI" },
      { src: "/assets/logo/UOB.png", alt: "UOB" },
      { src: "/assets/logo/CIMBNIAGA.png", alt: "CIMBNIAGA" },
      { src: "/assets/logo/OCBC.png", alt: "OCBC" },
      { src: "/assets/logo/GoPay.png", alt: "GoPay" },
      { src: "/assets/logo/DANA.png", alt: "DANA" },
      { src: "/assets/logo/KREDIVO.png", alt: "KREDIVO" },
    ];

const footerLinks = [
      { href: "#terms-modal", label: "Terms of Use" },
      { href: "#privacy-modal", label: "Privacy Policy" },
      { href: "#security-modal", label: "Security" },
    ];

const shippingFields = [
      {
        sectionTitle: "Shipping Information",
        groups: [
          {
            columns: 2,
            fields: [
              { id: "firstName", label: "First Name", type: "text", placeholder: "John", required: true },
              { id: "lastName", label: "Last Name", type: "text", placeholder: "Doe", required: true },
            ],
          },
          {
            columns: 1,
            fields: [
              { id: "email", label: "Email", type: "email", placeholder: "john.doe@example.com", required: true },
            ],
          },
          {
            columns: 1,
            fields: [
              { id: "address", label: "Street Address", type: "text", placeholder: "123 Celestial Street", required: true },
            ],
          },
          {
            columns: 3,
            fields: [
              { id: "city", label: "City", type: "text", placeholder: "Star City", required: true },
              { id: "state", label: "State/Province", type: "text", placeholder: "CA", required: true },
              { id: "zip", label: "ZIP Code", type: "text", placeholder: "12345", required: true },
            ],
          },
          {
            columns: 1,
            fields: [
              { id: "country", label: "Country", type: "text", placeholder: "United States", required: true },
            ],
          },
        ],
      },
    ];

const paymentFields = [
      {
        sectionTitle: "Payment Information",
        groups: [
          {
            columns: 1,
            fields: [
              { id: "cardName", label: "Cardholder Name", type: "text", placeholder: "John Doe", required: true },
            ],
          },
          {
            columns: 1,
            fields: [
              { id: "cardNumber", label: "Card Number", type: "text", placeholder: "1234 5678 9012 3456", maxLength: 19, required: true },
            ],
          },
          {
            columns: 2,
            fields: [
              { id: "expiry", label: "Expiry Date", type: "text", placeholder: "MM/YY", maxLength: 5, required: true },
              { id: "cvv", label: "CVV", type: "text", placeholder: "123", maxLength: 3, required: true },
            ],
          },
        ],
      },
    ];

const state = {
      cart: [], 
      summary: { subtotal: 0, shipping: 0, tax: 0 },
      form: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
      },
    };

export { acceptedPayments, morePayments, footerLinks, shippingFields, paymentFields, state };