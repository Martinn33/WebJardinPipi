//PNG MOUSTRITOS GALERY
import M1Galery from "./moustrosGalery/M1Galery.png"
import M2Galery from "./moustrosGalery/M2Galery.png"
import M3Galery from "./moustrosGalery/M3Galery.png"
import M4Galery from "./moustrosGalery/M4Galery.png"

import s from "./MGalery.module.css"


function MGalery(){
    return(
        <div>
            <img className={s.M1Galery} src={M1Galery}></img>
            <img className={s.M4Galery} src={M4Galery}></img>
            <img className={s.M3Galery} src={M3Galery}></img>


        </div>
    )
}

export default MGalery;