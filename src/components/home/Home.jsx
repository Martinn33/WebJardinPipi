import s from "./home.module.css"
import m1 from "./moustros/m1.png"
import m2 from "./moustros/m2.png"
import monster from "./moustros/monster.png"
import {  Link } from "react-router-dom";

function Home(){

    return(

        <div className={s.contain}>
            <div className={s.Home} ></div>
            <img src={m1} className={s.m1} alt="m1"></img>
            <img src={monster} className={s.monster} alt="monster"></img>
            <Link to="/galeria"> <button className={s.button}>  ALBUN</button> </Link>
            <div className={s.p}>
                <span className={s.span}>Nuestros recuerdos son lo que somos, son lo que nos hace tomar las decisiones que tomamos, a actuar como actuamos y a amar como amamos. No seríamos nada sin nuestros recuerdos pero ¿es posible recordar todo?
                La respuesta es no, pero podemos tomar medidas para que cuando llegue el momento de mirar atrás tengamos tantos recuerdos como podamos. </span>
            </div>
        
        </div>
    )
}

export default Home;