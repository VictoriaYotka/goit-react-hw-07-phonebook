import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectfilteredContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

export function ContactList() {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectfilteredContacts);

      const handleDeleteButton = (id) => {
        dispatch(removeContact(id))
    }

    return (
        <ul className={css.list}>
            {filteredContacts.map(({id, name, number}) => <li key={id} className={css.item}>{name}: {number}
            <button onClick={() => handleDeleteButton(id)} className={css.button}>Delete</button>
            </li>)}
        </ul>
    )
}
