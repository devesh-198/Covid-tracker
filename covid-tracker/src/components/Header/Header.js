import React from "react";

import covidImage from '../../assets/covidImage.png'
import classes from './Header.module.css';

const header = (
    <>
        <div className={classes.header}>
            <h1>Covid-19 Tracker</h1>
        </div>
        <div>
            <img
                src={covidImage} 
                alt='covid-19 virus' 
                title='covid-19 virus'
				className={classes.covidImg}
            ></img>
        </div>
    </>
)

export default header;