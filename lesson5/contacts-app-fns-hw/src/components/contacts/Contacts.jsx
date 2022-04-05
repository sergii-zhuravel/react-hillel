import React, { useEffect, useState } from "react";
import * as contactsService from "../../services/contactsService";
import ContactForm from "../contactForm/ContactForm";
import ContactsList from "../contactsList/ContactsList";
import "./Contacts.css";

function getEmptyContact() {
  return {
    name: "",
    surname: "",
    phone: "",
  };
}

function Contacts() {
  const [selectedContact, setSelectedContact] = useState(getEmptyContact());
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState("list");

  useEffect(() => {
    contactsService.getContactsList().then((data) => {
      setContacts(data);
    });
  }, []);

  const onAddNewBtnClick = () => {
    setSelectedContact(getEmptyContact());
    setPage("form");
  };

  const onCancel = () => {
    setPage("list");
  };

  const onContactSelect = (contact) => {
    setSelectedContact(contact);
    setPage("form");
  };

  const onContactDelete = (contact) => {
    const newContacts = contacts.filter((el) => el !== contact);
    contactsService.deleteContact(contact.id);

    setContacts(newContacts);
    setSelectedContact(getEmptyContact());
  };
  const onSave = (contact) => {
    if (contact.id) {
      updateContact(contact);
    } else {
      createContact(contact);
    }
    setPage("list");
  };
  const createContact = (contact) => {
    contactsService.createContact(contact).then((data) => {
      const newContacts = [...contacts, data];
      setContacts(newContacts);
      setSelectedContact(data);
    });
  };
  const updateContact = (contact) => {
    contactsService.updateContact(contact).then((data) => {
      const newContacts = contacts.map((el) =>
        el.id === contact.id ? contact : el
      );
      setContacts(newContacts);
      setSelectedContact(contact);
    });
  };
  return (
    <div className="container">
      {page === "list" ? (
        <>
          <ContactsList
            contacts={contacts}
            onSelect={onContactSelect}
            onDelete={onContactDelete}
          />
          <button onClick={onAddNewBtnClick} className={"add-new-contact-btn"}>
            Add new
          </button>
        </>
      ) : (
        <ContactForm
          contact={selectedContact}
          onCancel={onCancel}
          onSave={onSave}
        />
      )}
    </div>
  );
}

export default Contacts;
