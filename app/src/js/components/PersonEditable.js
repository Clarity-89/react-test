'use strict';

import React from 'react';

class PersonEditable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.data.name,
            gender: props.data.gender,
            age: props.data.age,
            data: props.data
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.addPerson(this.state);
        this.setState({name: '', gender: '', age: ''});
    }

    render() {
        return (<tr>
                <td className="four wide field ui input">
                    <div className="ui input"><input type="text" name="name" placeholder="Name" value={this.state.name}
                                                     onChange={this.onNameChange.bind(this)}/></div>
                </td>
                <td className="two wide field">
                    <div className="ui input"><input type="number" name="age" min="13" max="100" placeholder="Age"
                                                     value={this.state.age}
                                                     onChange={this.onAgeChange.bind(this)}/></div>
                </td>
                <td className="three wide field">
                    <select className="ui compact selection dropdown" name="gender" value={this.state.gender} onChange={this.onGenderChange.bind(this)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select></td>
                <td className="one wide field"><i onClick={()=>this.props.savePerson(this.props.data)}
                                                  className="save icon"></i></td>
                <td className="one wide field"><i onClick={()=>this.props.confirmDelete(this.props.data.id)}
                                                  className="remove icon"></i>
                </td>
            </tr>

        )
    }
}


export default PersonEditable;