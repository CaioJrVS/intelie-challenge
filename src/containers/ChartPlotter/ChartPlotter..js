import React, { Component } from 'react';

import Header from '../../components/Header/Header'
import CodeMirror from '../../components/CodeMirror/CodeMirror'

class ChartPlotter extends Component {

    /* 
        On this component Im using the package Codemirror so I can 
        display a web code edditor, it's very unopinated so almost
        all configurations is delegated to the developer
    */

    constructor(props){
        super(props)
        this.state={
            codeData:''
        }
        this.getCodeData= this.getCodeData.bind(this)
    }

    getCodeData(data){
        let newState = this.state;
        console.log(this.state)
        newState.codeData = data;
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <Header />
                <CodeMirror 
                    code={this.state.codeData}
                    getcode = {this.getCodeData}
                />
                <div>Graph Plot Area</div>
                <div>Generate Chart fixed at the bottom</div>
            </div>
        )
    }
}

export default ChartPlotter;