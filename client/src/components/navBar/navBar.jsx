import "./navBar.css";
import Search from "../search/search";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../../store/actions";


export default function NavBar() {
  let dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchCountries())
  }
  
  return (
    <div className="NavBar">
      <Link to="/home" onClick={handleClick}>
        <h3>Countries App</h3>
      </Link>

      <Link to="/add">
        <button> New Activity</button>
      </Link>
      <Search />
    </div>
  );
}
