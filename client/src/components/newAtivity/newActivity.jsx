import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity } from "../../store/actions";

export default function NewActivity() {
  const dispatch = useDispatch();
  const [ activity, setActivity ] = useState({name: "",
  duration: 0,
  difficulty: 0,
  countries: [],
  season: ""})
  let countriesByName = useSelector((state)=> state.countriesNames).sort((a,b)=> a.name < b.name ? -1 : 1)

  function handleChange(e){
    e.preventDefault();
    setActivity({...activity, [e.target.name] : e.target.value})
  }
  function handleCountriesChange(e){
    setActivity({...activity, countries: Array.from(e.target.selectedOptions).map(option=>option.value)})
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log(activity)
    dispatch(addActivity(activity));
    setActivity({name: "",
    duration: 0,
    difficulty: 0,
    countries: [],
    season: ""})
  }

  return <div>
    <h1>New activity</h1>
    <h2>Help us adding your traveling expertise</h2>
    <form onSubmit={handleSubmit}>      
      <label>Title:</label>
      <input type="text" name="name" value={activity.name} required={true} onChange={handleChange}/>    
      <label>Difficulty:</label>
      <select type="text" name="difficulty" value={activity.difficulty} required={true} onChange={handleChange}>
      <option selected value=''>Choose one</option>
        <option value='1'>1- Easier Than Easy</option>
        <option value='2'>2- Beginner </option>
        <option value='3'>3- Normal </option>
        <option value='4'>4- Difficult</option>
        <option value='5'>5- Expert</option>
      </select>   
      <label>Duration (Hours):</label>
      <input type="number" name="duration" value={activity.duration} min={0} required={true} onChange={handleChange}/>      
      <label>Season:</label>
      <select type="text" name="season" value={activity.season} required={true} onChange={handleChange}>
        <option selected value=''>Choose one</option>
        <option value='Autumn'>Autumn</option>
        <option value='Spring'>Spring</option>
        <option value='Summer'>Summer </option>
        <option value='Winter'>Winter</option>
      </select>
      <label>Countries:</label>
        <select multiple={true} name='countries' size='5' value={activity.countries} onChange={handleCountriesChange}>
              {countriesByName.map((country ) => (<option key={country.id}  selected value={country.id}>{country.name}</option>))}
            </select>

        <input type="submit" />        
    </form>
  </div>;
}
