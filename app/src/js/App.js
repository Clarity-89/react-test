import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import users from './data-generator'
require('../scss/style.scss');

class App extends React.Component {
    constructor() {
        super();
        //this.update = this.update.bind(this);
        //this.handlePageClick = this.handlePageClick.bind(this);
        this.state = {data: users, offset: 0};
    }

    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person}/>
        });
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
                        <a className="item">1</a>
                        <a className="item">2</a>
                        <a className="item">3</a>
                        <a className="item">4</a>
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