import s from "./galeria.module.css"
import Card from "./fotosCard/cards.jsx"
import axios from 'axios'
import { useState, useEffect} from 'react'

function Galeria(){
    const [characteres, setCharacters] = useState([]);

    const apiGet = () =>{
        axios(`http://localhost:3001/productos`)
        .then((res)=>{
            if(res.data){
              setCharacters(res.data)
            }
            else {
               return console.error("Erorr del servidor")
            }
        })
    };
    useEffect(() =>{ apiGet(); 
    },[])

    return(
        <div className={s.container}>

        {
            characteres.map(({id,model,path}) => {
               return <Card
                  key={id}
                  id={id}
                  model = {model}
                  path ={path}
                    
              // onClose ={()=> onClose(id)}
             />
           })
        }
        </div>   
    )
}

export default Galeria;