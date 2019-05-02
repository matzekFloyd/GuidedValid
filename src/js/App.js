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
                exitOnEsc: false,
                exitOnOverlayClick: false,
                overlayOpacity: 0.1
            }}
        />
    }

    render() {
        // noinspection ThisExpressionReferencesGlobalObjectJS
        return <div className="App row">
            {this.initSteps()}
            <div className="legend column left" id="legend">
                <Legend mode={this.state.mode}/>
                <div className="tourButtons">
                    {this.state.mode === 1 || this.state.tourFinished ?
                        <button className="btn1 btn btn-info show" onClick={() => this.changeVis(1)}> Button
                            #1</button> : <button className="btn1 btn hide"/>}
                    {this.state.mode === 2 || this.state.tourFinished ?
                        <button className="btn2 btn btn-info show" onClick={() => this.changeVis(2)}> Button
                            #2</button> : <button className="btn2 btn hide"/>}
                    {this.state.mode === 3 || this.state.tourFinished ?
                        <button className="btn3 btn btn-info show" onClick={() => this.changeVis(3)}> Button
                            #3</button> : <button className="btn3 btn hide"/>}
                    {this.state.mode === 4 || this.state.tourFinished ?
                        <button className="btn4 btn btn-info show" onClick={() => this.changeVis(4)}> Button
                            #4</button> : <button className="btn4 btn hide"/>}
                    {this.state.mode === 5 || this.state.tourFinished ?
                        <button className="btn5 btn btn-info show" onClick={() => this.changeVis(5)}> Button
                            #5</button> : <button className="btn5 btn hide"/>}
                </div>
            </div>
            <div className="visualization column right">
                <BarChart mode={this.state.mode}/>
            </div>
        </div>;
    }
}

export default App;
