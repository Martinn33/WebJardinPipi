import "./cardS.css"

function Card({price,model,description,id,path}) {
   
    return(
        
        <div className={"Cardd"}>
             <h1 className={"name"}>{"model: "+model+"N° "+id}</h1>
            <h2 className={"descr"}>{description}</h2>
            <h3 className={"price"}>{"$"+price}</h3> 
            <img src={"http://localhost:3001/"+path}></img>
            
        </div>
    )
};
//<img src="./src/public/uploads/1c4e2688-7c8b-4638-8a91-da0d72c9b8f2.png"></img>
// imag ejemplo= http://localhost:3001/images/uploads/5c6de7cc-7a0c-43ec-90c5-6b0739b6e709.png
export default Card;