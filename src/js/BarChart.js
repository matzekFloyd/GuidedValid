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

    getValues(identifier) {
        switch (identifier) {
            case 1:
                return defaultValues;
            case 2:
                return changedValues;
            default:
                return defaultValues;
        }
    }


    constructor(props, context) {
        super(props, context);
        this.state = {
            mark: "bar",
            encoding: {x: {field: "a", type: "ordinal"}, y: {field: "b", type: "quantitative"}},
            data: {values: defaultValues},
            changeVis: props.changeVis
        };

        this.spec = {
            mark: this.state.mark,
            encoding: {
                x: this.state.encoding.x,
                y: this.state.encoding.y
            }
        };

    }

    componentWillMount() {
        this.setState({mark: "bar"}, () => {
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.mode, prevProps.mode)) {
            this.setState({data: {values: this.getValues(this.props.mode)}});
        }
    }

    render() {
        return <VegaLite spec={this.spec} data={this.state.data}/>
    }
}