//Check if the data passed by is in the right JSON format
const isJson= (input)=>{
    try {
        let json = eval("[" + input.split("\n") + "]")
        return true
    } catch (error) {
        return false 
    }
}

/* Data should be returned in the following structure:

    {
        os + browser + min_response_time:0.1 
    }

*/


//Function to create the structure above
const chartData= (input)=>{
    let json = eval("[" + input.split("\n") + "]");
    const [start, stop] = dataInterval(json);
    const span = intervalTimeSpan(json, start, stop);
    const dataEvents = getDataEvents(json,start,stop,span);
    const sortedDataEvents =  sortEvents(dataEvents);
    const graphData = setGraphData(sortedDataEvents)
    return graphData
}

//Function to find the interval between types Start and Stop
const dataInterval = (input)=>{
    let startIndex = getStartIndex(input) ;
    let stopIndex = getStopIndex(input, startIndex);
    return [startIndex, stopIndex];
}

//Function to get the index of the first START
const getStartIndex = (input)=>{
    let startIndex = null;
    let n = 0;
    while(n < input.length && startIndex === null){
        if(input[n].type === "start") startIndex = n;
        n++;
    }
    return startIndex;
}

//Function to get the index of the first STOP after the Start
const getStopIndex = (input, startIndex)=>{
    let stopIndex = null;
    let n = startIndex + 1;
    while(n<=input.length && stopIndex === null){
        if (input[n].type === "stop") stopIndex = n;
        n++;
    }
    return stopIndex;
}

//Function to get the latest SPAN type
const intervalTimeSpan = (input, startIndex, stopIndex)=>{
    let spanIndex = null;
    let n = startIndex;
    while( n < stopIndex ){
        if ( input[n].type === "span") spanIndex = n;
        n++;
    }
    return spanIndex;
}

//Function to get the DATA events inside the timestamp and between the start and stop intervals
const getDataEvents = (json, startIndex, stopIndex, span)=>{
    let dataEventsArray = [];
    const endTime = json[span].end;
    const beginTime = json[span].begin;
    let n = startIndex +1;
    while( n < json.length && n < stopIndex){
        if(json[n].type === "data" && isInsideInterval(json[n], beginTime, endTime)){
            dataEventsArray.push(json[n])
        }
        n++;
    }
    console.log(dataEventsArray)
    return dataEventsArray;
}

//Check if the DATA event is inside SPAN interval
const isInsideInterval = (obj, minTime, maxTime)=>{
    if (obj.timestamp <= maxTime && obj.timestamp >= minTime){
        return true;
    }
    return false;
}

// Sort the DATA events
const sortEvents = (events)=>{
    let dataEvents = Object.assign({},events)

    //Quicksort algorithm to sort the data by timestamp
    function quicksort(json, low, high){
        if(low<high){
            let pi = partition (json,low,high)
            quicksort(json,low, pi-1)
            quicksort(json,pi+1, high)
        }
    }

    function partition(json,low,high){
        let pivot = json[high]
        let i = (low-1)
        let [a,b,c,d] = [{},{},{},{}]
        for ( let j = low; j <= high-1; j++){
            if(json[j].timestamp < pivot.timestamp){
                i++;
                a = json[i];
                c = json[j]
                json[i] = c
                json[j] = a
            }
        }
        b = json[i+1]
        d = json[high]
        json[i+1] = d
        json[high] = b
        return(i+1)
    }
    quicksort(dataEvents,0, events.length-1)
    let arraySortedEvents = Object.keys(dataEvents).map(key =>{return dataEvents[key]})
    return arraySortedEvents;
}

/*
    Function to set the data structure required by the 
    Recharts library to plot the line graph data
    
    Ex:
        [
            {
                "time": 0,
                "linux chrome min response time"
            }
        ]
*/
const setGraphData = (events)=>{
    let time = new Date(events[0].timestamp).getMinutes();
    let graphData = [];
    let dataSetPerTimestamp= {};
    dataSetPerTimestamp["time"] = time ;
    let [key1, key2] = ["",""];

    function insertDataSet(event){
        key1 = event.os + " " + event.browser + " min response time"
        key2 = event.os + " " + event.browser + " max response time"
        dataSetPerTimestamp[key1] = event.min_response_time
        dataSetPerTimestamp[key2] = event.max_response_time
    }

    function pushToGraphData(){
        graphData.push(dataSetPerTimestamp)
        dataSetPerTimestamp={}
    }

    function setNewTimeStamp(event){
        time = new Date(event.timestamp).getMinutes()
        dataSetPerTimestamp["time"] = time
    }

    function isSameTimestamp(event){
        if( new Date(event.timestamp).getMinutes() === time )return true
        return false
    }

    for(let n =0; n < events.length; n++){
        if(n === events.length -1){
            insertDataSet(events[n])
            pushToGraphData()
        }
        else if( isSameTimestamp(events[n]) ){
            insertDataSet(events[n])
        }else{
            pushToGraphData()
            setNewTimeStamp(events[n])
            insertDataSet(events[n])
        }
    }
    return graphData;
}

export { isJson, chartData };