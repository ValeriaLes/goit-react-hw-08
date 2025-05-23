import { NavLink } from "react-router-dom"
import clsx from "clsx"
import css from "./AuthNav.module.css"

const activeClass = ({isActive}) => {
  return clsx(css.authNavLink, isActive && css.active)
}


export default function AuthNav () {
  return(
    <div className={css.authNavWrapper}>
     <NavLink className={activeClass} to='/login'>Login</NavLink>
     <NavLink className={activeClass} to='/register'>Register</NavLink>
    </div>
  )
}