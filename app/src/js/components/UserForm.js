'use strict';

import React from 'react';
import classnames from 'classnames';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            gender: '',
            age: props.age
        }
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    onAgeChange(e) {
        this.setState({
            age: e.target.value
        })
    }

    onGenderChange(e) {
        this.setState({
            gender: e.target.value
        })
    }

    componentDidMount() {
        $('#form').form({
            on: 'blur',
            fields: {
                name: {
                    identifier: 'name',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter name'
                        },
                        {
                            type: 'minLength[3]',
                            prompt: 'Name should be at least 3 characters long'
                        }
                    ]
                },
                gender: {
                    identifier: 'gender',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please select gender'
                        }
                    ]
                },
                age: {
                    identifier: 'age',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please provide age'
                        },
                        {
                            type: 'integer[1..100]',
                            prompt: 'Age must be between 1 and 100'
                        }
                    ]
                }
            },
            inline: true,
            onFailure: this.handleInvalidForm.bind(this),
            onSuccess: this.handleValidForm.bind(this)
        });
    }

    handleInvalidForm(e) {
        return false;
    }

    handleValidForm(e) {
        this.handleSubmit(e)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addPerson(this.state);
        this.setState({name: '', gender: '', age: ''});
    }

    render() {
        let value = this.state.gender;
        let classNames = classnames(
            'ui', 'fluid', 'search', 'dropdown',
            {
                'placeholder': !value
            });

        return (
            <form className="ui form" id="form">
                <h4 className="ui dividing header">New User</h4>
                <div className="fields">
                    <div className="seven wide field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name}
                               onChange={this.onNameChange.bind(this)}/>
                    </div>
                    <div className="three wide field">
                        <label>Gender</label>
                        <select className={classNames} name="gender" value={this.state.gender}
                                onChange={this.onGenderChange.bind(this)}>
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="three wide field">
                        <label>Age</label>
                        <input type="number" name="age" min="13" max="100" placeholder="Age" value={this.state.age}
                               onChange={this.onAgeChange.bind(this)}/>
                    </div>
                    <div className="three wide field">
                        <button className="ui vertical animated button" id="add-user">
                            <div className="hidden content">Add user</div>
                            <div className="visible content">
                                <i className="add user icon"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}


export default Form