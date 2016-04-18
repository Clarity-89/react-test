import React from 'react';
import users from './../data-generator'
import Form from './UserForm'
require('../../scss/style.scss');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.updatePage = this.updatePage.bind(this);
        this.getData = this.getData.bind(this);
        this.state = {
            currentPage: 0,
            data: users,
            pageSize: 20
        };
    }
    updatePage(num) {
        this.setState({
            currentPage: num
        })
    }

    getData() {
        return this.state.data.slice(this.state.currentPage * this.state.pageSize, (this.state.currentPage + 1) * this.state.pageSize)
    }

    render() {
        let rows = this.getData().map(person => {
            return <PersonRow key={person.id} data={person}/>
        });
        let indents = [];
        for (let i = 0; i < Math.ceil(this.state.data.length / this.state.pageSize); i++) {
            indents.push(<a className="item" onClick={() => this.updatePage(i)} key={i}>{i + 1}</a>);
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