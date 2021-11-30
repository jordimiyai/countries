import { Link } from 'react-router-dom';

export default function Landing(){
    return <div>Soy Landing
        <Link to={'/home'}><h1>entra a la app</h1></Link>
    </div>
}