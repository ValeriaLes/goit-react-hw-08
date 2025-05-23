import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchWrapper}>
      <label htmlFor="filter" className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
}
