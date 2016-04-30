'use strict';

// React core 
import React from 'react';

// Components 
import Form from './UserForm';
import Header from './Header';
import Modal from './Modal';
import PersonEditable from './PersonEditable';
import PersonRow from './PersonRow';

// Utilities and helpers
import users from './../data-generator';
import utils from './../utils';

// Styles
require('../../scss/style.scss');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.updatePage = this.updatePage.bind(this);
        this.addPerson = this.addPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
        this.editPerson = this.editPerson.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.setSort = this.setSort.bind(this);
        this.getData = this.getData.bind(this);
        this.isActive = this.isActive.bind(this);
        this.state = {
            currentPage: 0,
            data: users,
            pageSize: 20,
            sortBy: 'name',
            reversed: false,
            editing: {} // store user for editing
        };
    }

    updatePage(num) {
        this.setState({
            currentPage: num
        })
    }

    addPerson(person) {
        let lastId = this.state.data[this.state.data.length - 1].id;
        let arr = this.state.data.slice();
        // Make sure the name is properly capitalized before saving
        person.name = utils.formatName(person.name);
        // Assign the id of +1 of the id of the last user
        person.id = lastId + 1;
        arr.push(person);
        this.setState({data: arr});
        localStorage.setItem('users', JSON.stringify(this.state.data));
    }

    deletePerson(id) {
        // Loop over users array to find the one to delete
        for (let i = 0; i < this.state.data.length; i++) {
            // If found remove user from array and update the data accordingly
            if (this.state.data[i].id === id) {
                this.state.data.splice(i, 1);
                this.setState({data: this.state.data});
                localStorage.setItem('users', JSON.stringify(this.state.data));
                return;
            }
        }
    }

    confirmDelete(id) {
        $('.ui.basic.modal')
            .modal("setting", {
                onApprove: () => {
                    this.deletePerson(id);
                }
            })
            .modal('show');
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

    editPerson(user) {
        this.setState({editing: user})
    }

    render() {
        let fields = ['Name', 'Age', 'Gender'];
        let headers = fields.map((field, i)=> {
            return <Header field={field} setSort={this.setSort} reversed={this.state.reversed}
                           sortBy={this.state.sortBy} key={i}/>
        });
        let rows = this.getData().map(person => {
            if (person.id === this.state.editing.id) {
                return <PersonEditable key={person.id} data={person} confirmDelete={this.confirmDelete}
                />
            } else {
                return <PersonRow key={person.id} data={person} confirmDelete={this.confirmDelete}
                                  edit={this.editPerson}/>
            }
        });
        let indents = [];
        for (let i = 0; i < Math.ceil(this.state.data.length / this.state.pageSize); i++) {
            indents.push(<a className={this.isActive(i)} onClick={() => this.updatePage(i)} key={i}>{i + 1}</a>);
        }
        return (<div>
            <Modal />
            <Form addPerson={this.addPerson}/>
            <h4 className="ui dividing header">Users</h4>
            <table className="ui celled table">
                <thead>
                <tr className="seven wide field">
                    {headers}
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
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

export default App;