import React, {Component} from 'react';
import equal from 'fast-deep-equal';
import {getModeData} from "./ModeDataProvider";

export default class Legend extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {text: getModeData(props.mode, props.view).text};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(this.props.mode, prevProps.mode) || !equal(this.props.view, prevProps.view)) {
            this.setState({text: getModeData(this.props.mode, this.props.view).text});
        }
    }

    getBtnClass(mode) {
        return this.props.mode === mode ? 'txtModeBtn btn btn-success' : 'txtModeBtn btn btn-secondary'
    }

    render() {
        // noinspection ThisExpressionReferencesGlobalObjectJS
        return <div><h2>Understanding Barcharts</h2>
            <br/>
            {this.props.mode >= 1 ? <p>
                <button className={this.getBtnClass(1)} onClick={() => this.props.cb(1)}>1</button>
                <span className={"txtMode"} dangerouslySetInnerHTML={{__html: this.state.text.one}}/>
            </p> : <div/>}
            {this.props.mode >= 2 ? <p>
                <button className={this.getBtnClass(2)} onClick={() => this.props.cb(2)}>2</button>
                <span className={"txtMode"} dangerouslySetInnerHTML={{__html: this.state.text.two}}/>
            </p> : <div/>}
            {this.props.mode >= 3 ? <p>
                <button className={this.getBtnClass(3)} onClick={() => this.props.cb(3)}>3</button>
                <span className={"txtMode"} dangerouslySetInnerHTML={{__html: this.state.text.three}}/>
            </p> : <div/>}
            {this.props.mode >= 4 ? <p>
                <button className={this.getBtnClass(4)} onClick={() => this.props.cb(4)}>4</button>
                <span className={"txtMode"} dangerouslySetInnerHTML={{__html: this.state.text.four}}/>
            </p> : <div/>}
            {this.props.mode >= 5 ? <p>
                <button className={this.getBtnClass(5)} onClick={() => this.props.cb(5)}>5</button>
                <span className={"txtMode"} dangerouslySetInnerHTML={{__html: this.state.text.five}}/>
            </p> : <div/>}
        </div>
    }
}