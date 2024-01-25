import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
          aria-label="Name"
        />
      </label>
      <br />
      <label htmlFor="phone">
        <input
          type="tel"
          name="phone"
          value={phone}
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Contact Phone (###-###-####)"
          aria-label="Contact Phone"
        />
      </label>
      <br />
      <label htmlFor="email">
        <input type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Contact Email" aria-label="Contact Email"/>
      </label>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact" />
    </form>
  );
};
