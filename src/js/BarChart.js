import React, {Component} from 'react';
import VegaLite from 'react-vega-lite';
import equal from 'fast-deep-equal';

const defaultValues = [
    {a: "A", b: 20}, {a: "B", b: 34}, {a: "C", b: 55},
    {a: "D", b: 19}, {a: "E", b: 40}, {a: "F", b: 34},
    {a: "G", b: 91}, {a: "H", b: 78}, {a: "I", b: 25}
];

const changedValues = [
    {a: "A", b: 13}, {a: "B", b: 16}, {a: "C", b: 37},
    {a: "D", b: 22}, {a: "E", b: 41}, {a: "F", b: 70},
    {a: "G", b: 71}, {a: "H", b: 39}, {a: "I", b: 12}
];

export default class BarChart extends Component {

    constructor(props, context) {
        super(props, context);
        this.spec = {
            description: "A simple bar chart with embedded data.",
            mark: "bar",
            encoding: {
                x: {field: "a", type: "ordinal"},
                y: {field: "b", type: "quantitative"}
            }
        };
        this.state = {data: {values: defaultValues}, changeVis: props.changeVis}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.changeVis, prevProps.changeVis)) {
            if(equal(this.state.data.values, defaultValues)){
                this.setState({data: {values: changedValues}});
            } else {
                this.setState({data: {values: defaultValues}});
            }
        }
    }

    render() {
        return <VegaLite spec={this.spec} data={this.state.data}/>
    }
}