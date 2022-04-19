import "./styles.css";

function ContactsListItem({ contact, onDelete, onSelect }) {
  const onDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(contact);
  };

  return (
    <li className="contact-list-item" onClick={onSelect.bind(null, contact)}>
      {contact.name} {contact.surname} - {contact.phone}
      &nbsp;
      <a href="#" onClick={onDeleteClick}>
        Delete
      </a>
    </li>
  );
}

export default ContactsListItem;
