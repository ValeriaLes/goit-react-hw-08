import { selectUser } from "../../redux/auth/selectors"
import { useDispatch, useSelector } from "react-redux"
import css from "./UserMenu.module.css"
import { logoutUser } from "../../redux/auth/operations";
const UserMenu = () => {

    const dispatch = useDispatch();

  const user = useSelector(selectUser)
  return (
    <div className={css.navWrapperLogout}>
        <p className={css.userName}>{user.name}</p>
        <button onClick={()=> dispatch(logoutUser())} className={css.buttonLogout}>Logout</button>
    </div>
  )
}

export default UserMenu