import css from './ContactList.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContact } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <li className={css.contact} key={contact.id}>
          {contact.name}: {contact.number}&nbsp;
          <button
            className={css.button}
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
