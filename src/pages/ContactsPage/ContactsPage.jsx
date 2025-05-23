import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css"
export default function ContactsPage () {

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return(
    <div className={css.contactWrapper}>
    <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList /> 
    </div>
  )
}