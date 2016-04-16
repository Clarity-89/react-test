import React from 'react';
import users from './data-generator'
require('../scss/style.scss');

class App extends React.Component {
    constructor() {
        super();
        this.updatePage = this.updatePage.bind(this);
        this.state = {
            users: users,
            currentPage: 0,
            pageSize: 20
        };
        this.state.data = users.slice(this.state.currentPage * this.state.pageSize, (this.state.currentPage + 1) * this.state.pageSize);
    }

    updatePage(num) {
        this.setState({
            data: users.slice(num * this.state.pageSize, (num + 1) * this.state.pageSize)
        })
    }

    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person}/>
        });
        let indents = [];
        for (var i = 0; i < Math.ceil(this.state.users.length / this.state.pageSize); i++) {
            indents.push(<a className="item" key={i} onClick={this.updatePage(i)}>{i + 1}</a>);
        }
        return (<table className="ui celled table">
            <Header/>
            <tbody>{rows}</tbody>
            <tfoot>
            <tr>
                <th colSpan="3">
                    <div className="ui right floated pagination menu">
                        <a className="icon item">
                            <i className="left chevron icon"></i>
                        </a>
                        {indents}
                        <a className="icon item">
                            <i className="right chevron icon"></i>
                        </a>
                    </div>
                </th>
            </tr>
            </tfoot>
        </table>);
    }
}
const Header = () => {
    return (<thead>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
    </tr>
    </thead>)
};

const PersonRow = (props) => {
    return (<tr>
        <td>{props.data.name}</td>
        <td>{props.data.age}</td>
        <td>{props.data.gender}</td>
    </tr>)
};

export default App