import React, {Component} from 'react';
import VegaLite from 'react-vega-lite';
import equal from 'fast-deep-equal';
import {getModeData} from "./ModeDataProvider";

export default class BarChart extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = getModeData(props.mode, props.view);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.mode, prevProps.mode) || !equal(this.props.view, prevProps.view)) {
            this.setState(getModeData(this.props.mode, this.props.view));
        }
    }

    render() {
        return <VegaLite height={500} width={500} spec={this.state.spec} data={this.state.data}/>
    }
}