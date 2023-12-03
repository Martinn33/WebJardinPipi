import "./SCards.css"
import Card from "../card/Card"
import axios from 'axios'
import { useState, useEffect} from 'react'

function ProductsCards(){
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
        <div className="CardsContainer">
        {
            characteres.map(({id,model,description,price,path,imageBuffer}) => {
               return <Card
                  key={id}
                  id={id}
                  model = {model}
                  description = {description}
                  price = {price}
                  path ={path}
                  imageBuffer={imageBuffer}        
              // onClose ={()=> onClose(id)}
             />
           })
        }
        </div>   
    )
}

export default ProductsCards;