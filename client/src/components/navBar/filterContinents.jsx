import { filterByContinent } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function Continent(){
    let dispatch = useDispatch();

    function handleContinentFilter(e){
        dispatch(filterByContinent(e.target.value))
      }

return  <div>
<select onChange={handleContinentFilter}>
<option value="all">All Continents</option>
<option value="Africa">Africa</option>
<option value="Americas">Americas</option>
<option value="Asia">Asia</option>
<option value="Europe">Europe</option>
<option value="Oceania">Oceania </option>
<option value="Antarctic">Antarctic </option>


</select>
</div>
}