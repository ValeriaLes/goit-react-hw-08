import { Formik, Form, Field } from 'formik';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';

const LoginForm = () => {

  const dispatch = useDispatch();
  const initialValues = {
  
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
   
    dispatch(loginUser(values))
    resetForm();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Login</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
        

          <div className={styles.fieldGroup}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className={styles.input} />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className={styles.input} />
          </div>
          <Link to='/register'>You are new here? Register </Link>

          <button type="submit" className={styles.button}>Login</button>
          <Link to='/'>Back to Home</Link>
        </Form>

       
      </Formik>
     
    </div>
  );
};

export default LoginForm;