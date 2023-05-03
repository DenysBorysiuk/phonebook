import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List, Notice } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <List>
      {contacts.length === 0 ? (
        <Notice>Contacts list is empty!</Notice>
      ) : (
        contacts.map(({ _id, name, number }) => (
          <ContactListItem key={_id} _id={_id} name={name} number={number} />
        ))
      )}
    </List>
  );
};
