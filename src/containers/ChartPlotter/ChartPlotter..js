import React, { Component } from 'react';

import Header from '../../components/Header/Header'
import CodeMirror from '../../components/CodeMirror/CodeMirror'
import LineChart from '../../components/LineChart/LineChart'
import Button from '../../components/UI/Button/Button'
import FixedBottomDiv from '../../components/FixedBottomDiv/FixedBottomDiv'

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
    props, state and the components of the application
*/

class ChartPlotter extends Component {

    constructor(props){
        super(props)
        this.state={
            inputData:'',
            dataToBePlotted: []
        }
        this.setCodeData= this.setCodeData.bind(this)
        this.handleChartCreation = this.handleChartCreation.bind(this)
    }

    /* 
        Method to get the data from input to the state
    */

    setCodeData(data){
        let newState = this.state;
        newState.inputData = data;
        this.setState(newState);
    }

    /*
        Method to get the data from the input and structure it
        to the pattern required by the chart library

        And set it to the state
     */
    handleChartCreation() {
        //Check if the format of the input is a Json right format or if the input is not empty
        if ( !isJson(this.state.inputData) || this.state.inputData.length === 0) {
            alert("ERROR Input is not in a JSON format")
        }else{
            let newState = this.state;
            newState.dataToBePlotted = chartData(newState.inputData)
            this.setState(newState)
        }
    }

    /*
        Render method:
            -Header to show my Name,

            -SplitterLayout is the component to split the page
            into two halves, and is resizable with two children,
            one is the input and the other is the chart 

            -Codemirror is the input component 

            -LineChart is the chart to be plotted on the screen
    */

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
                    <LineChart 
                        chartData = {this.state.dataToBePlotted}
                    />
                </SplitterLayout>
                <FixedBottomDiv>
                    <Button 
                        onClickMethod={() => this.handleChartCreation()} 
                        class = {classes.ButtonGenerateChart}
                        buttonName = "GENERATE CHART"
                    />
                </FixedBottomDiv>
            </div>
        )
    }
}

export default ChartPlotter;