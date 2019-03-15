import React, {Component} from 'react';
import '../css/main.css';

class App extends Component {

    render() {
        return (
            <div className="App row">
                <div className="legend column left" id="legend">
                    <h2>Guided Valid</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                        rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no
                        sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <button className="btn btn-info"> Vis 1</button>
                    <button className="btn btn-secondary"> Vis 2</button>
                    <button className="btn btn-secondary"> Vis 3</button>
                </div>

                <div className="visualization column right">
                    <p> Placeholder for vega visualization </p>
                </div>
            </div>
        );
    }
}

export default App;
