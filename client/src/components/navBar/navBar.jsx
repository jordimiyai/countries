import "./navBar.css";
import Search from "../search/search";
import { Link } from "react-router-dom";




export default function NavBar() {

  return (
    <div className="NavBar">
      <Link to="/home">
        <h3>Countries App</h3>
      </Link>

      <Link to="/add">
        <button> New Activity</button>
      </Link>
      <Search />
    </div>
  );
}
