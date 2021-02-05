import React, { Component } from 'react';

import Header from '../../components/Header/Header'
import CodeMirror from '../../components/CodeMirror/CodeMirror'
import RenderLineChart from '../../components/RenderLineChart/RenderLineChart'

//Component to splitt the chart and the input data
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css'

//Style 
import './style.css'
import classes from './ChartPlotter.module.css'

/* 
    This is the main container, it holds the methods used to handle data,
    props and state
*/

class ChartPlotter extends Component {

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
                <SplitterLayout
                    primaryIndex={0}
                    vertical={true}
                    primaryMinSize={30}
                    secondaryMinSize={80}
                    customClassName="CustomSplitterLayoutStyle"
                >
                    <CodeMirror
                        code={this.state.codeData}
                        getcode={this.getCodeData}
                    />
                    <RenderLineChart />
                </SplitterLayout>
                <div className={classes.DivFixedBottom}>
                    <button className={classes.ButtonGenerateChart}>
                        GENERATE CHART
                    </button>
                </div>
            </div>
        )
    }
}

export default ChartPlotter;