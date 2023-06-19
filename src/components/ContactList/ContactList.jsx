import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

export function ContactList() {
    const dispatch = useDispatch();
    const contactItems = useSelector(getContacts);
    const filterValue = useSelector(getFilter);

      const handleDeleteButton = (id) => {
        dispatch(removeContact(id))
    }

    const filteredContacts = contactItems.filter(({name}) => name.toLowerCase().includes(filterValue.toLowerCase()));

    return (
        <ul className={css.list}>
            {filteredContacts.map(({id, name, number}) => <li key={id} className={css.item}>{name}: {number}
            <button onClick={() => handleDeleteButton(id)} className={css.button}>Delete</button>
            </li>)}
        </ul>
    )
}
