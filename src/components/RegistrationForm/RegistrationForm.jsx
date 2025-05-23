import { Formik, Form, Field } from 'formik';
import styles from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';

const RegistrationForm = () => {

  const dispatch = useDispatch();


  const initialValues = {
    name: '',
    email: '',
    password: '',
  };


  const handleSubmit = (values, { resetForm }) => {
    
    dispatch(registerUser(values))

    resetForm();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Register</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className={styles.input} />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className={styles.input} />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className={styles.input} />
          </div>
          <Link to='/login'>Do you already have an account? LOGIN </Link>

          <button type="submit" className={styles.button}>Register</button>
          <Link to='/'>Back to Home</Link>
        </Form>

       
      </Formik>
     
    </div>
  );
};

export default RegistrationForm;