import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <div>
        <p>
          <IoPersonSharp size={20} className={css.icon} />

          {contact.name}
        </p>

        <p>
          <FaPhoneAlt className={css.icon} />

          {contact.number}
        </p>
      </div>

      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
