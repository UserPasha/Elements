import React from 'react';
import style from './TextWithStripe.module.css'

const TextWithStripe = () => {
    return (
        <div>
            <p className={style.text} data-text={'Hello It-Incubator!'}>
    Hello It-Incubator!
            </p>
        </div>
    );
};

export default TextWithStripe;