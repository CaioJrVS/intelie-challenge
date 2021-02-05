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
    return (
        <Resizable
            style={{ borderBottom: "4px solid lightgreen", minWidth: "100%" }}
            bounds={'window'}
            enable={{ top: false, right: false, bottom: true, left: false, topRight: false, topLeft: false, bottomLeft: false, bottomRight: false }}
            defaultSize={{ width: "100%", height: "300px" }}
            minHeight={30}
            maxHeight={'60vh'}
        >
            <CodeMirror
                value={props.code}
                options={{
                    mode: 'javascript',
                    theme: 'monokai',
                    lineNumbers: true
                }}
                onBeforeChange={(editor, data, value) => {
                    console.log(value.length)
                    props.getcode(value)
                }}
            />
        </Resizable>
    )
}

export default (codeMirrorResizable);