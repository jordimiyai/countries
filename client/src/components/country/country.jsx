import { Link } from "react-router-dom";
import './country.css';

export default function Country(props) {
  let { country } = props;
  return (
    <div className="externalCard">
      <Link to={`/${country.id}`}>
        <img
          src={country.flag}
          alt="imagen"
          className="imagen"
          height={120}
          width={180}
        />
        <h3>{country.name}</h3>
      </Link>
      <a href="#">continente{country.continent}</a>
    </div>
  );
}
