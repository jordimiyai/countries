import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from '../../store/actions'
import Country from "../country/country";

export default function Countries(){
    let countries = useSelector((state) => state.countries)
    let dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchCountries())
    }, [])
    console.log(countries)

    return <div className='Countries'>
        
    {countries.map((country) => {
        return <Country key={country.id} nation={country}/>
    })}
     </div>
}