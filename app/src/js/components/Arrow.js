'use strict';

import React from 'react';

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

export default Arrow;