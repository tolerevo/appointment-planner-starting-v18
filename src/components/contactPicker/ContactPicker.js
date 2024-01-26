import React from "react";

export const ContactPicker = ({ contacts, value, name, onChange }) => {
  return (
    <select
      aria-label="Contact Picker"
      onChange={onChange}
      value={value}
      name={name}
    >
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option key={contact} value={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
