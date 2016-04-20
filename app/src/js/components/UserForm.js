import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            gender: 'Male',
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.addPerson(this.state);
        this.setState({name: '', gender: '', age: ''});
    }

    render() {
        return (
            <form className="ui form" id="form" onSubmit={this.handleSubmit.bind(this)}>
                <h4 className="ui dividing header">New User</h4>
                <div className="fields">
                    <div className="seven wide field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                    </div>
                    <div className="three wide field">
                        <label>Gender</label>
                        <select className="ui fluid search dropdown" name="gender" value={this.state.gender}
                                onChange={this.onGenderChange.bind(this)}>
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