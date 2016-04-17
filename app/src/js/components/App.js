import React from 'react';
import users from './../data-generator'
import Form from './UserForm'
require('../../scss/style.scss');

class App extends React.Component {
    constructor() {
        super();
        //this.updatePage = this.updatePage.bind(this);
        this.state = {
            currentPage: 0,
            data: users
        };
        /*this.props = {
            users: users,
            pageSize: 20
        }*/
    }

    /* componentWillMount() {
     this.setState({
     data: users.slice(this.state.currentPage * this.props.pageSize, (this.state.currentPage + 1) * this.props.pageSize)
     })
     }*/

    /* updatePage(num) {
     this.setState({
     data: users.slice(num * this.props.pageSize, (num + 1) * this.props.pageSize)
     })
     }*/

    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person}/>
        }).slice(0, 20);
        let indents = [];
        for (var i = 0; i < Math.ceil(100 / 20); i++) {
            indents.push(<a className="item" key={i}>{i + 1}</a>);
        }
        return (<div>
            <Form />
            <table className="ui celled table">
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
            </table>
        </div>);
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