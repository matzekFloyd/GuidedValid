import React, {Component} from 'react';
import BarChart from './BarChart'
import '../css/main.css';
import Legend from "./Legend";
import {Steps} from 'intro.js-react';
import 'intro.js/introjs.css';
import {ABSTRACT, CONCRETE} from "./constants";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            view: ABSTRACT,
            tourFinished: false,
            stepsEnabled: true,
            initialStep: 0,
            steps: [
                {
                    element: '.btn1',
                    intro: 'Clicking this button changes the Visualization',
                },
                {
                    element: '.btn2',
                    intro: 'Clicking this button changes the Visualization',
                },
                {
                    element: '.btn3',
                    intro: 'Clicking this button changes the Visualization',
                },
                {
                    element: '.btn4',
                    intro: 'Clicking this button changes the Visualization',
                },
                {
                    element: '.btn5',
                    intro: 'Clicking this button changes the Visualization',
                },
            ],
            mode: 1
        };

    }

    onExit() {
        this.setState(() => ({stepsEnabled: false, tourFinished: true}));
    };

    onComplete() {
        this.setState(() => ({stepsEnabled: false, tourFinished: true}));
    }

    toggleSteps = () => {
        this.setState(prevState => ({stepsEnabled: !prevState.stepsEnabled}));
    };

    changeVis(id) {
        this.setState({mode: id});
    }

    setView(view) {
        this.setState({view: view});
    }

    initSteps() {
        const {stepsEnabled, steps, initialStep} = this.state;
        return <Steps
            enabled={stepsEnabled}
            steps={steps}
            initialStep={initialStep}
            ref={steps => (this.steps = steps)}
            onChange={stepIndex => this.changeVis(stepIndex + 1)}
            onComplete={() => this.onComplete()}
            onExit={() => this.onExit()}
            element={'.selector'}
            options={{
                keyboardNavigation: true,
                showBullets: false,
                overlayOpacity: 0,
                showProgress: true
            }}
        />
    }

    btnIsSelected(mode) {
        return (this.state.tourFinished && this.state.mode === mode)
    }

    render() {
        // noinspection ThisExpressionReferencesGlobalObjectJS
        return <div className="App row">

            {this.state.tourFinished ? <div style={{padding: 30 + "px"}}>
                <button style={{marginRight: 10 + "px"}}
                        className={this.state.view === ABSTRACT ? "btn btn-info active" : "btn"}
                        onClick={() => this.setView(ABSTRACT)}> Abstract
                </button>
                <button className={this.state.view === CONCRETE ? "btn btn-info active" : "btn"}
                        onClick={() => this.setView(CONCRETE)}> Concrete
                </button>
            </div> : <div/>}

            <div className="steps-form">
                <div className="steps-row setup-panel">
                    <div className="steps-step">
                        {this.state.mode === 1 || this.state.tourFinished ?
                            <button
                                className={this.btnIsSelected(1) ? "btn1 btn btn-success show" : "btn1 btn btn-info show"}
                                onClick={() => this.changeVis(1)}>1</button> :
                            <button className="btn1 btn hide"/>}
                    </div>

                    <div className="steps-step">
                        {this.state.mode === 2 || this.state.tourFinished ?
                            <button
                                className={this.btnIsSelected(2) ? "btn2 btn btn-success show" : "btn2 btn btn-info show"}
                                onClick={() => this.changeVis(2)}>2
                            </button> : <button className="btn2 btn hide"/>}
                    </div>
                    <div className="steps-step">
                        {this.state.mode === 3 || this.state.tourFinished ?
                            <button
                                className={this.btnIsSelected(3) ? "btn3 btn btn-success show" : "btn3 btn btn-info show"}
                                onClick={() => this.changeVis(3)}>3</button> :
                            <button className="btn3 btn hide"/>}
                    </div>
                    <div className="steps-step">
                        {this.state.mode === 4 || this.state.tourFinished ?
                            <button
                                className={this.btnIsSelected(4) ? "btn4 btn btn-success show" : "btn4 btn btn-info show"}
                                onClick={() => this.changeVis(4)}>4</button> :
                            <button className="btn4 btn hide"/>}
                    </div>
                    <div className="steps-step">
                        {this.state.mode === 5 || this.state.tourFinished ?
                            <button
                                className={this.btnIsSelected(5) ? "btn5 btn btn-success show" : "btn5 btn btn-info show"}
                                onClick={() => this.changeVis(5)}>5</button> :
                            <button className="btn5 btn hide"/>}
                    </div>
                </div>
            </div>

            {this.initSteps()}
            <div className="legend column left" id="legend">
                <Legend mode={this.state.mode} view={this.state.view}/>
            </div>
            <div className="visualization column right">
                <BarChart mode={this.state.mode} view={this.state.view}/>
            </div>
        </div>
    }
    ;

}

export default App;
