import React, {Component} from 'react';
import equal from 'fast-deep-equal';
import {getModeData} from "./ModeDataProvider";

export default class Legend extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {text: getModeData(props.mode).text};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.mode, prevProps.mode)) {
            this.setState({text: getModeData(this.props.mode).text});
        }
    }

    render() {
        return <div><h2>Guided Valid</h2>
            <p style={{minHeight: 300 + "px"}}>{this.state.text}</p>
        </div>
    }
}