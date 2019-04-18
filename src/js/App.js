import React, {Component} from 'react';
import BarChart from './BarChart'
import '../css/main.css';
import Legend from "./Legend";
import {Steps} from 'intro.js-react';
import 'intro.js/introjs.css';

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
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
                {
                    element: '.btn6',
                    intro: 'Clicking this button changes the Visualization',
                },
            ],
            mode: 1
        };

    }

    onExit = () => {
        this.setState(() => ({stepsEnabled: false}));
    };

    toggleSteps = () => {
        this.setState(prevState => ({stepsEnabled: !prevState.stepsEnabled}));
    };

    changeVis(id) {
        this.setState({mode: id});
    }

    render() {
        const {stepsEnabled, steps, initialStep} = this.state;

        return (
            <div className="App row">
                <Steps
                    enabled={stepsEnabled}
                    steps={steps}
                    initialStep={initialStep}
                    ref={steps => (this.steps = steps)}
                    onChange={stepIndex => this.changeVis(stepIndex)}
                    onExit={this.onExit}
                    element={'.selector'}
                    options={{
                        keyboardNavigation: false,
                        showBullets: false,
                        exitOnEsc: false,
                        exitOnOverlayClick: false,
                        overlayOpacity: 0.1
                    }}
                />

                <div className="legend column left" id="legend">
                    <Legend/>
                    <button className="btn1 btn btn-info" onClick={() => this.changeVis(1)}> 1</button>
                    <button className="btn2 btn btn-info" onClick={() => this.changeVis(2)}> 2</button>
                    <button className="btn3 btn btn-info" onClick={() => this.changeVis(3)}> 3</button>
                    <button className="btn4 btn btn-info" onClick={() => this.changeVis(4)}> 4</button>
                    <button className="btn5 btn btn-info" onClick={() => this.changeVis(5)}> 5</button>
                    <button className="btn6 btn btn-info" onClick={() => this.changeVis(6)}> 6</button>
                </div>
                <div className="visualization column right">
                    <BarChart mode={this.state.mode}/>
                </div>
            </div>
        );
    }
}

export default App;
