import React, {Component} from 'react';
import BarChart from './BarChart'
import '../css/main.css';
import Legend from "./Legend";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {mode: 1}
    }

    changeVis(id) {
        this.setState({mode: id});
    }

    render() {
        return (
            <div className="App row">
                <div className="legend column left" id="legend">
                    <Legend/>
                    <button className="btn btn-info" onClick={() => this.changeVis(1)}> 1</button>
                    <button className="btn btn-info" onClick={() => this.changeVis(2)}> 2</button>
                    <button className="btn btn-info" onClick={() => this.changeVis(3)}> 3</button>
                    <button className="btn btn-info" onClick={() => this.changeVis(4)}> 4</button>
                    <button className="btn btn-info" onClick={() => this.changeVis(5)}> 5</button>
                    <button className="btn btn-info" onClick={() => this.changeVis(6)}> 6</button>
                </div>
                <div className="visualization column right">
                    <BarChart mode={this.state.mode}/>
                </div>
            </div>
        );
    }
}

export default App;
