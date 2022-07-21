import React from 'react';
import './App.css';
import {ThreeDMenu} from "./Elements/ThreeDMenu/ThreeDMenu";
import EarthAndMoonWithoutImg from "./Elements/EarthAndMoonWithoutImg/EarthAndMoonWithoutImg";
import Loader from "./Elements/Loader/Loader";
import TextWithStripe from "./Elements/TextWithStripe/TextWithStripe";
import ChangingCircles from "./Elements/ChangingCircles/ChangingCircles";
import FormWithBottomString from "./Elements/FormWithBottomString/FormWithBottomString";


function App() {
//   NEED FIX ThreeDMenu
//   NEED FIX ThreeDMenu(scaling)

    return (<>

        {/*<ThreeDMenu/>*/}
        {/*<EarthAndMoonWithoutImg/>*/}
        <Loader/>
        <TextWithStripe/>
        <ChangingCircles/>
        <FormWithBottomString/>
    </>)
}

export default App;


