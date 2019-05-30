import React, {Component} from 'react';
import BarChart from './BarChart'
import '../css/main.css';
import Legend from "./Legend";
import 'intro.js/introjs.css';
import {ABSTRACT, CONCRETE} from "./constants";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            init: true,
            view: ABSTRACT,
            mode: 6
        };
    }

    start() {
        this.setState({mode: 1, init: false});
    }

    changeVis(id) {
        let mode = id;
        if (id > 5) mode = 5;
        if (id === 0) mode = 1;
        if (id < 0) mode = 6;
        this.setState({mode: mode});
    }

    setView(view) {
        this.setState({view: view});
    }

    btnIsSelected(mode) {
        return (this.state.mode === mode)
    }

    render() {
        // noinspection ThisExpressionReferencesGlobalObjectJS
        return <div>
            {this.state.init ?
                <div className="App centered">
                    <h4 style={{margin: 25 + "px"}}>Understanding Barcharts</h4>
                    <BarChart mode={this.state.mode} view={ABSTRACT}/>
                    <button className={"btn btn-info"} style={{marginLeft: 300 + "px", marginTop: 20 + "px"}} onClick={() => this.start()}> Continue</button>
                </div> :
                <div className="App row">
                    <div style={{padding: 30 + "px"}}>
                        <button style={{marginRight: 10 + "px"}}
                                className={this.state.view === ABSTRACT ? "btn btn-info active" : "btn"}
                                onClick={() => this.setView(ABSTRACT)}> Abstract
                        </button>
                        <button className={this.state.view === CONCRETE ? "btn btn-info active" : "btn"}
                                onClick={() => this.setView(CONCRETE)}> Concrete
                        </button>
                    </div>

                    <div className="steps-form">
                        <div className="steps-row setup-panel">
                            <div className="steps-step">
                                <button
                                    className={this.btnIsSelected(1) ? "btn btn-success" : "btn btn-secondary"}
                                    onClick={() => this.changeVis(1)}>1
                                </button>
                            </div>
                            <div className="steps-step">
                                <button
                                    className={this.btnIsSelected(2) ? "btn btn-success" : "btn btn-secondary"}
                                    onClick={() => this.changeVis(2)}>2
                                </button>
                            </div>
                            <div className="steps-step">
                                <button
                                    className={this.btnIsSelected(3) ? "btn btn-success" : "btn btn-secondary"}
                                    onClick={() => this.changeVis(3)}>3
                                </button>
                            </div>
                            <div className="steps-step">
                                <button
                                    className={this.btnIsSelected(4) ? "btn btn-success" : "btn btn-secondary"}
                                    onClick={() => this.changeVis(4)}>4
                                </button>
                            </div>
                            <div className="steps-step">
                                <button
                                    className={this.btnIsSelected(5) ? "btn btn-success" : "btn btn-secondary"}
                                    onClick={() => this.changeVis(5)}>5
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="legend column left" id="legend">
                        <Legend mode={this.state.mode} view={this.state.view}/>
                    </div>
                    <div className="visualization column right">
                        <BarChart mode={this.state.mode} view={this.state.view}/>
                    </div>
                    <div id={"controlPanel"}>
                        <button className={"btn btn-secondary"} onClick={() => this.changeVis(-1)}> Skip</button>
                        <button className={"btn btn-info"} onClick={() => this.changeVis(this.state.mode - 1)}
                                disabled={this.state.mode === 1}> Previous
                        </button>
                        <button className={"btn btn-info"} onClick={() => this.changeVis(this.state.mode + 1)}
                                disabled={this.state.mode >= 5}> Next
                        </button>
                    </div>
                </div>}
        </div>
    };
}

export default App;
