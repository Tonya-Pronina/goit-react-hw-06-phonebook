import React from 'react';
import css from 'components/ContactList/ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/ContactSlice';

export default function ContactList() {
  const getContacts = state => state.contacts.contacts;
  const getFilter = state => state.filter;
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const searchContact = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <ul className={css.list}>
      {searchContact.map(({ name, number, id }) => {
        return (
          <li className={css.item} key={id}>
            <ContactListItem name={name} number={number} />

            <button
              className={css.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}
