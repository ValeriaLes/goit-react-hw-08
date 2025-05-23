import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectError, selectFilteredContacts } from "../../redux/contacts/selectors";



export default function ContactList() {
 

  const error = useSelector(selectError)

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.listItem}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
      {error && <p>Contacts couldn't be loaded</p>}
    </>
  );
}
