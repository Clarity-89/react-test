import React from 'react';
import users from './../data-generator'
import Form from './UserForm'
require('../../scss/style.scss');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.updatePage = this.updatePage.bind(this);
        this.addPerson = this.addPerson.bind(this);
        this.setSort = this.setSort.bind(this);
        this.getData = this.getData.bind(this);
        this.isActive = this.isActive.bind(this);
        this.state = {
            currentPage: 0,
            data: users,
            pageSize: 20,
            sortBy: '',
            reversed: false
        };
    }

    updatePage(num) {
        this.setState({
            currentPage: num
        })
    }

    addPerson(person) {
        this.state.data.push(person);
        this.setState({data: this.state.data});
    }

    isActive(value) {
        return 'item ' + (value === this.state.currentPage ? 'active' : '');
    }

    getData() {
        let compare = (a, b) => {
            if (a[this.state.sortBy] < b[this.state.sortBy]) {
                return -1;
            } else if (a[this.state.sortBy] > b[this.state.sortBy]) {
                return 1;
            } else {
                return 0;
            }
        };

        let data = this.state.data.sort(compare);
        data = this.state.reversed ? data.reverse() : data;

        return data.slice(this.state.currentPage * this.state.pageSize, (this.state.currentPage + 1) * this.state.pageSize);

    }

    pageBack() {
        if (this.state.currentPage - 1 >= 0) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }

    pageForward() {
        if (this.state.currentPage + 1 < this.state.data.length / this.state.pageSize) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    }

    setSort(prop) {
        this.setState({sortBy: prop, reversed: !this.state.reversed})
    }

    render() {
        let fields = ['Name', 'Age', 'Gender'];
        let headers = fields.map((field, i)=> {
            return <Header field={field} setSort={this.setSort} reversed={this.state.reversed}
                           sortBy={this.state.sortBy} key={i}/>
        });
        let rows = this.getData().map(person => {
            return <PersonRow key={person.id} data={person}/>
        });
        let indents = [];
        for (let i = 0; i < Math.ceil(this.state.data.length / this.state.pageSize); i++) {
            indents.push(<a className={this.isActive(i)} onClick={() => this.updatePage(i)} key={i}>{i + 1}</a>);
        }
        return (<div>
            <Form addPerson={this.addPerson}/>
            <table className="ui celled table">
                <thead>
                <tr className="seven wide field">{headers}</tr>
                </thead>
                <tbody>{rows}</tbody>
                <tfoot>
                <tr>
                    <th colSpan="3">
                        <div className="ui right floated pagination menu">
                            <a className="icon item" onClick={this.pageBack.bind(this)}>
                                <i className="left chevron icon"></i>
                            </a>
                            {indents}
                            <a className="icon item" onClick={this.pageForward.bind(this)}>
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
const Header = (props) => {
    return (<th><a onClick={(e)=>props.setSort(props.field.toLowerCase())}>{props.field} <Arrow
        reversed={props.reversed} {...props} /></a>
    </th>)
};

const Arrow = (props) => {
    var el = <span></span>; // initialize el to a node, so there is no error when sortBy is not set
    if (props.sortBy === props.field.toLowerCase()) {
        if (props.reversed) {
            el = <i className="angle double down icon"></i>
        } else {
            el = <i className="angle double up icon"></i>
        }
    }
    return el;
};

const PersonRow = (props) => {
    return (<tr>
        <td className="six wide field">{props.data.name}</td>
        <td className="two wide field">{props.data.age}</td>
        <td className="three wide field">{props.data.gender}</td>
    </tr>)
};

export default App