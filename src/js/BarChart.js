import React, {Component} from 'react';
import VegaLite from 'react-vega-lite';
import equal from 'fast-deep-equal';
import {getModeData} from "./ModeDataProvider";

export default class BarChart extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = getModeData(0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.mode, prevProps.mode)) {
            this.setState(getModeData(this.props.mode));
        }
    }

    render() {
        return <VegaLite spec={this.state.spec} data={this.state.data}/>
    }
}