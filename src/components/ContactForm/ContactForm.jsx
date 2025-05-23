import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  const ContactForm = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
    
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactForm}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label htmlFor={nameFieldId} className={css.label}>
              Name
            </label>
            <Field
              name="name"
              type="text"
              id={nameFieldId}
              className={css.field}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.fieldWrapper}>
            <label htmlFor={numberFieldId} className={css.label}>
              Number
            </label>
            <Field
              name="number"
              type="number"
              id={numberFieldId}
              className={css.field}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
