import React, { Component } from 'react';

import Header from '../../components/Header/Header'

class GraphPlotter extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>Code Input Area</div>
                <div>Graph Plot Area</div>
                <div>Generate Chart fixed at the bottom</div>
            </div>
        )
    }
}

export default GraphPlotter;