import React from "react";
import ContactsListItem from "../contactsListItem/ContactsListItem";
import "./ContactsList.css";

function ContactsList({ contacts, onSelect, onDelete }) {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          onSelect={onSelect}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ContactsList;
