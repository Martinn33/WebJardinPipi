import s from "./cards.module.css"

function Card({model,id,path}) {
   
    return(
        <div className={s.contenedor}>
            <img className={s.img} src={"http://localhost:3001/"+path} key={id}></img>
        </div>
    )
};
//NOMBRE DE LA IMAGEN "MODELO"<h1 className={s.h1}>{"model: "+model+"N° "+id}</h1>
//<img src="./src/public/uploads/1c4e2688-7c8b-4638-8a91-da0d72c9b8f2.png"></img>
// imag ejemplo= http://localhost:3001/images/uploads/5c6de7cc-7a0c-43ec-90c5-6b0739b6e709.png
export default Card;