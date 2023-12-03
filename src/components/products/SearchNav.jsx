import "./SearchNav.css"
// import { useState } from "react";
import axios from "axios"
import { useState } from "react";


function SearchNav(){
   async function cardId({id}){ //falta ruta id
        const {data} = await axios.get(`http://localhost:3001/products${id}`)
        console.log(data)
        }

    const [character,setcharacter]= useState("")

    const handleChange = (event) => {
        setcharacter(event.target.value)
     }

    // const [character,setcharacter]= useState("")
    // const handleChange = (event) => {
    //    setcharacter(event.target.value)
    // }
    return(
            <div className="container">
            <input required="" type="" value={character} name="text" className="input" onChange={handleChange}></input>
            <label className="label">Username</label>
            {/* <button onClick={({id}) => cardId(id)}>buscar</button>  */}
            </div>
    )

}

export default SearchNav;