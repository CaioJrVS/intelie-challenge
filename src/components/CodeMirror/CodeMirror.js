import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import './style.css'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/monokai.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

/*
    This Component is the library used to 
    get the imput from the user 
*/

const codeMirrorResizable = (props) => {

    /*
        Here is the protection of my application ( If 
        I understood what the challenge required)

        If the amount of data pasted on the input area,
        by the user, surpass 20000 caracters, an alert
        will raise 
    */
    const showAlert = ()=>{
        alert(
            "It's too much data to be processed only with a front-end"
        );

    }

    return (
        <CodeMirror
            value={props.code}
            options={{
                mode: 'javascript',
                theme: 'monokai',
                lineNumbers: true
            }}
            onBeforeChange={(editor, data, value) => {
                if(value.length > 20000){
                    showAlert()
                } else {
                    props.setcode(value)
                }
            }}
        />
    )
}

export default (codeMirrorResizable);