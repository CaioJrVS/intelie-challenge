import React from 'react';

import classes from './Header.module.css'

const header = ()=>{
    return(
        <div className={classes.HeaderContainer}>
        <h2 className={classes.Header}>Caio's Challenge</h2>
        </div>
    )
}

export default header;