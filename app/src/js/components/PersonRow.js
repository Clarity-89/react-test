'use strict';

import React from 'react';

const PersonRow = (props) => {
    return (<tr>
        <td className="four wide field">{props.data.name}</td>
        <td className="two wide field">{props.data.age}</td>
        <td className="three wide field">{props.data.gender}</td>
        <td className="one wide field"><i onClick={()=>props.edit(props.data)} className="write icon"></i></td>
        <td className="one wide field"><i onClick={()=>props.confirmDelete(props.data.id)} className="trash outline icon"></i>
        </td>
    </tr>)
};

export default PersonRow;