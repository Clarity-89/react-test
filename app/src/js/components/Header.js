'use strict';

import React from 'react';

const Header = (props) => {
    return (<th><a onClick={(e)=>props.setSort(props.field.toLowerCase())}>{props.field} <Arrow
        reversed={props.reversed} {...props} /></a>
    </th>)
};

export default Header;