
import { Link } from 'react-router-dom';

export default function Country(nation){
    let country = nation.nation
    console.log(nation)
    return <div className='externalCard'>
            <Link to={`/${country.id}`}>
            <img src={country.flag} alt="imagen" className='imagen' />
            <h3>{country.name}</h3>

            </Link>
            <a href="#">continente{country.continent}</a>
        </div>
}