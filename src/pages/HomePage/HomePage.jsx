import css from "./HomePage.module.css"

export default function HomePage () {
  return(
    <div className={css.homePageWrapper}>
    <h2 className={css.homePageTitle}>Phonebook</h2>
    <p className={css.homePageDescr}>Here you can create your own phonebook</p>
    </div>
  )
}