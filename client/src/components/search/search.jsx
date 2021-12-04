import './search.css';
import { useState } from 'react';
import { searchCountry } from '../../store/actions/index';
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

export default function Search(){
    const [name, setName] = useState('')
    let dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault();
        dispatch(searchCountry(name));
    }

    function onInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    //HACER QUE SE PUEDA BUSCAR DESDE CUALQUIER PARTE DE LA PAGINA
    return <div>
        <form onSubmit= {onSubmit} >
            <input type= 'text' onChange={onInputChange} value={name} />
            <input type='submit' value='Search'/>
        </form>
    </div>
}
