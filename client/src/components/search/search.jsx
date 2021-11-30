/*
import { useState } from 'react';
import { findCountries } from '../../store/actions';
import { useDispatch } from 'react-redux'

export default function SearchBar(){
    const [search, setSearch] = useState('')
    let dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault();
        dispatch(findCountries(search));
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value)
    }


    return <div>
        <form onSubmit= {onSubmit}>
            <input type= 'text' onChange={onInputChange} value={search} />
            <input type='submit' value='Search'/>
        </form>
    </div>
}
*/