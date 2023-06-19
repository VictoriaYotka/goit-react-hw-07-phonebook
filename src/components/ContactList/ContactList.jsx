import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectfilteredContacts } from 'redux/selectors';

export function ContactList() {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectfilteredContacts);

      const handleDeleteButton = (id) => {
        console.log(id)
        dispatch(deleteContact(id))
    }

    return (
        <ul className={css.list}>
            {filteredContacts.map(({id, name, phone}) => <li key={id} className={css.item}>{name}: {phone}
            <button onClick={() => handleDeleteButton(id)} className={css.button}>Delete</button>
            </li>)}
        </ul>
    )
}
