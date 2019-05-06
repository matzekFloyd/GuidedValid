import React, {Component} from 'react';
import equal from 'fast-deep-equal';
import {getModeData} from "./ModeDataProvider";

export default class Legend extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {text: getModeData(props.mode, props.view).text};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.mode, prevProps.mode || !equal(this.props.view, prevProps.view))) {
            this.setState({text: getModeData(this.props.mode, this.props.view).text});
        }
    }

    render() {
        // noinspection ThisExpressionReferencesGlobalObjectJS
        return <div><h2>Guided Valid</h2>
            <br/>
            <h4>Description</h4>
            <p style={{minHeight: 300 + "px"}}>{this.state.text}</p>
        </div>
    }
}