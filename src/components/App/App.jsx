import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../../pages/HomePage/HomePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import AppBar from "../AppBar/AppBar";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import PrivateRoute from "../PrivateRoute";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute";


export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

 
  return isRefreshing ? null :(
    <div>
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
         
          <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
       
        <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
        <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} redirectTo='/contacts' />} />
      </Routes>

      
    </div>
  );
}
