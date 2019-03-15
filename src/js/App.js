import React, {Component} from 'react';
import BarChart from './BarChart'
import '../css/main.css';
import Legend from "./Legend";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {changeVis: false}
    }

    changeVis(){
        this.setState({changeVis: !this.state.changeVis});
    }

    render() {
        return (
            <div className="App row">
                <div className="legend column left" id="legend">
                    <Legend/>
                    <button className="btn btn-info" onClick={() => this.changeVis()}> Change Vis</button>
                </div>
                <div className="visualization column right">
                    <BarChart changeVis={this.state.changeVis}/>
                </div>
            </div>
        );
    }
}

export default App;
