import { ASC, DESC, H_POPULATION, L_POPULATION } from "../../store/constants";
import { orderBy } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function OrderBy(){
    let dispatch = useDispatch();

    function handleOrderBy(e){
        dispatch(orderBy(e.target.value))
      }

return  <div>
    <select onChange={handleOrderBy}>
    <option value="">Order By...</option>
    <option value={ASC}>Ascendent</option>
    <option value={DESC}>Descendent</option>
    <option value={L_POPULATION}>Lowest Population</option>
    <option value={H_POPULATION}>Highest Population</option>
    </select>
  </div>
}