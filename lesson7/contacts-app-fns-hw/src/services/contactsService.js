import api from "../api/api";

// const URL = "https://612687da3ab4100017a68fd8.mockapi.io/contacts/";
const CONTACTS_URI = "contacts";

export function getContactsList() {
  return api.get(CONTACTS_URI).then((resp) => resp.data);
}

export function createContact(contact) {
  return api.post(CONTACTS_URI, contact).then((resp) => resp.data);
}

export function updateContact(contact) {
  return api.put(CONTACTS_URI + "/" + contact.id).then((resp) => resp.data);
}

export function deleteContact(id) {
  return api.delete(CONTACTS_URI + "/" + id).then((resp) => resp.data);
}
