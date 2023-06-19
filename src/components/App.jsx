import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "redux/operations";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import css from './App.module.css'



export function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.main_title}>Phonebook</h1>
      <ContactForm/>

      <h2 className={css.title}>Contacts</h2>
      <Filter/>
      <ContactList />
    </div>
    )
}