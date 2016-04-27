import React from 'react';
class PersonEditable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        return (<tr>
                <td className="four wide field">
                    <input type="text" name="name" placeholder="Name" value={props.data.name}/></td>
                <td className="two wide field">
                    <input type="number" name="age" min="13" max="100" placeholder="Age" value={props.data.age}/></td>
                <td className="three wide field">
                    <select name="gender" value={props.data.gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select></td>
                <td className="one wide field"><i className="save icon"></i></td>
                <td className="one wide field"><i onClick={()=>props.confirmDelete(props.data.id)}
                                                  className="remove icon"></i>
                </td>
            </tr>

        )
    }
}

export default PersonEditable;