import "./countries.css";
import Country from "../country/country";

export default function Countries(props) {
  const { countries } = props;
  return (
    <div className="Countries">
      {countries.length ? (
        countries.map((country) => {
          return <Country key={country.id} country={country} />;
        })
      ) : (
        <div class="spinner">
          <div class="cube1"></div>
          <div class="cube2"></div>
        </div>
      )}
    </div>
  );
}

// pagina grande tendria que traerse los paises, hacer los filtros
