import { PhoneContacts } from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ id, contacts, onDeleteHandler }) => {
  return (
    <PhoneContacts>
      {contacts.map(contact => (
        <li id={id}>
          {contact.name}: {contact.number}
          <button
            onClick={() => {
              onDeleteHandler(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </PhoneContacts>
  );
};

ContactsList.propTypes = {
  id: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
};
