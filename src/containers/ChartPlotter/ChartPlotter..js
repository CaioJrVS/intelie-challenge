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

//Function to test
import { test } from '../../data_handling_module/handleData'

/* 
    This is the main container, it holds the methods used to handle data,
    props and state
*/

class ChartPlotter extends Component {

    constructor(props){
        super(props)
        this.state={
            inputData:''
        }
        this.setCodeData= this.setCodeData.bind(this)
        this.handleChartCreation = this.handleChartCreation.bind(this)
    }

    /* Function to get the data from input to the state*/
    setCodeData(data){
        let newState = this.state;
        newState.inputData = data;
        this.setState(newState);
    }

    handleChartCreation() {
        let jsonInput= eval("[" +this.state.inputData.split("\n") + "]")
        console.log(jsonInput)
        test(jsonInput);
    }

    render() {
        return (
            <div>
                <Header />
                <SplitterLayout
                    primaryIndex={0}
                    vertical={true}
                    primaryMinSize={30}
                    secondaryMinSize={180}
                    customClassName="CustomSplitterLayoutStyle"
                >
                    <CodeMirror
                        code={this.state.inputData}
                        setcode={this.setCodeData}
                    />
                    <RenderLineChart />
                </SplitterLayout>
                <div className={classes.DivFixedBottom}>
                    <button className={classes.ButtonGenerateChart} onClick={()=>this.handleChartCreation()}>
                        GENERATE CHART
                    </button>
                </div>
            </div>
        )
    }
}

export default ChartPlotter;