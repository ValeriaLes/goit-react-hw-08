import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import clsx from "clsx"

const activeClass = ({isActive}) => {
  return clsx(css.navLink, isActive && css.active)
}

export default function Navigation() {
  return(
    <div className={css.mainNav}>
          <NavLink to="/" className={activeClass}>Home</NavLink>
          <NavLink to="/contacts" className={activeClass}>Contacts</NavLink>
    </div>
  )
}

