import React from 'react';
import ReactDOM from 'react-dom';
import users from './data-generator'
require('../scss/style.scss');

class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {data: users};
    }

    update() {
        ReactDOM.render(
            <App val={this.props.val+2}/>,
            document.getElementById('app')
        )
    }

    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person}/>
        });
        return (<table className="ui celled table">
            <tbody>{rows}</tbody>
        </table>);
    }
}

const PersonRow = (props) => {
    return (<tr>
        <td>{props.data.name}</td>
        <td>{props.data.age}</td>
        <td>{props.data.gender}</td>
    </tr>)
};

export default App