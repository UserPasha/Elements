import React from 'react';
import style from "./ParallaxFromPicture.module.css"
import image from "../../assets/images/incubato.jpg"


const ParallaxFromPicture = () => {

    const backGroundImage = {
        backgroundImage: `url(${image})`
    }
    return (
       <div className={style.elementWrapper}>
           <section>
               <h2>
                   IT-INCUBATOR
               </h2>
           </section>
           <section>
            <div className={style.wrapper}>
                <div className={style.bar} style={backGroundImage}></div>
                <div className={style.bar} style={backGroundImage}></div>
                <div className={style.bar} style={backGroundImage}></div>
                <div className={style.bar} style={backGroundImage}></div>
                <div className={style.bar} style={backGroundImage}></div>
            </div>
           </section>
           <section>
               <h2>
                   IT-KAMASUTRA
               </h2>
           </section>
       </div>
    );
};

export default ParallaxFromPicture;