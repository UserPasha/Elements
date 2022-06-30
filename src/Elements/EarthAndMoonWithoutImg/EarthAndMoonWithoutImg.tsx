import React from 'react';
import style from './EarthAndMoonWithoutImg.module.css'

const EarthAndMoonWithoutImg = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.earthContainer}>
                <div className={style.earth}></div>
            </div>
            <div className={style.moonWrapper}>
                <div className={style.moonContainer}>
                    <div className={style.moon}></div>
                </div>
            </div>
        </div>
    );
};

export default EarthAndMoonWithoutImg;