import React from 'react';
import style from './ThreeDMenu.module.css'

export const ThreeDMenu = () => {
    return (
        <div className={style.container}>
            <button className={style.threeDButton}>Hover On Me</button>
        </div>
    );
};

