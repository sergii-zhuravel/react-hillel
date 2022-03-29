import React, { Component } from "react";
import * as contactsService from "../../services/contactsService";
import ContactForm from "../contactForm/ContactForm";
import ContactsList from "../contactsList/ContactsList";

class Contacts extends Component {
  state = {
    selectedContact: this.getEmptyContact(),
    contacts: [],
    page: "list",
  };
  componentDidMount() {
    contactsService.getContactsList().then((data) => {
      this.setState({ contacts: data });
    });
  }
  getEmptyContact() {
    return {
      name: "",
      surname: "",
      phone: "",
    };
  }
  onAddNewBtnClick = () => {
    this.setState({
      selectedContact: this.getEmptyContact(),
      page: "form",
    });
  };
  onCancel = () => {
    this.setState({
      page: "list",
    });
  };
  onContactSelect(contact) {
    this.setState({
      selectedContact: contact,
    });
  }
  onContactDelete(contact) {
    const contacts = this.state.contacts.filter((el) => el !== contact);
    contactsService.deleteContact(contact.id);

    this.setState({
      contacts,
      selectedContact: this.getEmptyContact(),
    });
  }
  onSave(contact) {
    if (contact.id) {
      this.updateContact(contact);
    } else {
      this.createContact(contact);
    }
  }
  createContact(contact) {
    contactsService.createContact(contact).then((data) => {
      const contacts = [...this.state.contacts, data];
      this.setState({
        contacts,
        selectedContact: data,
      });
    });
  }
  createContact(contact) {
    contactsService.updateContact(contact).then((data) => {
      const contacts = this.state.contacts.map((el) =>
        el.id === contact.id ? contact : el
      );
      this.setState({
        contacts,
        selectedContact: contact,
      });
    });
  }
  render() {
    return (
      <>
        {this.state.page === "list" ? (
          <>
            <ContactsList
              contacts={this.state.contacts}
              onSelect={this.onContactSelect}
              onDelete={this.onContactDelete}
            />
            <button
              onClick={this.onAddNewBtnClick}
              className={"add-new-contact-btn"}
            >
              Add new
            </button>
          </>
        ) : (
          <ContactForm
            contact={this.selectedContact}
            onCancel={this.onCancel}
            onSave={this.onSave}
          />
        )}
      </>
    );
  }
}

export default Contacts;
