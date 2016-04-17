import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form className="ui form" id="form">
                <h4 className="ui dividing header">New User</h4>
                <div className="fields">
                    <div className="seven wide field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="three wide field">
                        <label>Gender</label>
                        <select className="ui fluid search dropdown" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                    </div>
                    <div className="six wide field">
                        <label>Age</label>
                        <input type="number" name="age" placeholder="Age"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form