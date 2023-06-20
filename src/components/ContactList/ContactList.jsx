import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectError, selectFilteredContacts, selectIsLoading,  } from 'redux/selectors';

export function ContactList() {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const handleDeleteButton = (id) => {
        dispatch(deleteContact(id))
    }

    return (
    <>
        {isLoading  && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {filteredContacts &&
            <ul className={css.list}>
            {filteredContacts.map(({id, name, phone}) => <li key={id} className={css.item}>{name}: {phone}
            <button onClick={() => handleDeleteButton(id)} className={css.button}>Delete</button>
            </li>)}
        </ul>
        }  
    </> 
    )}
