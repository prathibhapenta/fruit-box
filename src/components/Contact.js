import React, { useState } from "react";
import { GiFruitTree } from "react-icons/gi";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    mobile: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);

    setSubmitted(true);
    setFormData({ fullName: "", address: "", mobile: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-container">
      <h1>
        <GiFruitTree className="fruit-icon" /> Contact Us
      </h1>
      <p>
        Have questions about our fresh fruits or delivery? Fill the form below,
        and we’ll reach out to you as soon as possible.
      </p>

      {submitted && (
        <p className="success-message">
          Your message has been sent successfully!
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Your Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Your Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}" 
            title="Enter a valid 10-digit mobile number"
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Send Message 
        </button>
      </form>
    </div>
  );
};

export default Contact;
