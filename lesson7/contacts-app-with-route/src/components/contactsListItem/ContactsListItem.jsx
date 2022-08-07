import { Link } from "react-router-dom";
import "./styles.css";

function ContactsListItem({ contact, onDelete, onSelect }) {
  const onDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(contact);
  };
  return (
    <li className="contact-list-item">
      <Link to={`/contacts/${contact.id}`}>
        {contact.name} {contact.surname} - {contact.phone}
      </Link>
      &nbsp;
      <a href="#" onClick={onDeleteClick}>
        Delete
      </a>
    </li>
  );
}

export default ContactsListItem;
