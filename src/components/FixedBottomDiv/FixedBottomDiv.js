import React from 'react';

import classes from './FixedBottomDiv.module.css'

const fixedBottomDiv = (props)=>{
    return(
        <div className={classes.DivFixedBottom}>
            {props.children}
        </div>
    )
} 

export default fixedBottomDiv;