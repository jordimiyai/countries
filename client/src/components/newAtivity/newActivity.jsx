/*
import axios from "axios"
import { useState } from "react"
import { useHistory } from 'react-router'
import { ACTIVITY_URL } from "../../store/constants"



export default function CreateRecipe(){
    const [activity, setActivity] = useState
    let history = useHistory()

    function onInputChange(e) {
        e.preventDefault()
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })


    }

    function onSubmit(e){
        axios.post(ACTIVITY_URL, activity)
        .then(() => {

        })

    }

    return <div className='createRecipe'>
            <form>
                <label htmlFor="">Name: </label>
                <input name="title" type="text" />                
                <label htmlFor="">Summary: </label>
                <input name="summary" type="text" />
                <label htmlFor="">Rating: </label>
                <input name="rating" type="text" />
                <label htmlFor="">Health Score: </label>
                <input name="healthScore" type="text" />
                <label htmlFor="">Step By Step: </label>
                <input name="stepByStep" type="text" />
                <label htmlFor="">Image: </label>
                <input name="image" type="text" value={recipe}/>
                <input type="submit" />
            </form>
        </div>
}
*/
export default function NewActivity(){
    return <div>Soy NewActivity</div>
}