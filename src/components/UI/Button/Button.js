import React from 'react';

const button = (props)=>{

    return(
        <button onClick={props.onClickMethod} className={props.class}>{props.buttonName}</button>
    )
}

export default button;