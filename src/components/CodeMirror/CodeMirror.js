import React, { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import { Resizable } from 're-resizable'
import './style.css'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/monokai.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');


const codeMirrorResizable = (props) => {

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