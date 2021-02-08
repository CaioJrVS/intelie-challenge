import React, { Component } from 'react';

import Header from '../../components/Header/Header'
import CodeMirror from '../../components/CodeMirror/CodeMirror'
import LineChart from '../../components/LineChart/LineChart'

//Component to splitt the chart and the input data
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css'

//Style 
import './style.css'
import classes from './ChartPlotter.module.css'

//Function to test
import {
    isJson,
    chartData
} from '../../data_handling_module/handleData'

/* 
    This is the main container, it holds the methods used to handle data,
    props and state
*/

class ChartPlotter extends Component {

    constructor(props){
        super(props)
        this.state={
            inputData:'',
            chartData: {}
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
        console.log("RODOU 1")
        if ( !isJson(this.state.inputData) ) {
            alert("ERROR Input is not in a JSON format")
        }else{
            console.log("RODOU")
            chartData(this.state.inputData)
        }
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
                    <LineChart />
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