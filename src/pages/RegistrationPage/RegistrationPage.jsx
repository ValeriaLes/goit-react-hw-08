import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



export default function RegistrationPage () {
  
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
 
  return(
    <div>
    <RegistrationForm/>
    </div>
  )
}