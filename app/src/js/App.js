import React from 'react';
import ReactDOM from 'react-dom';
require('../scss/style.scss');

class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
    }

    update() {
        ReactDOM.render(
            <App val={this.props.val+2}/>,
            document.getElementById('app')
        )
    }

    render() {
        return (<button onClick={this.update}>{this.props.val}</button>);
    }
}

App.defaultProps = {val: 0};

export default App