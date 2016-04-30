'use strict';

import React from 'react';

const Modal = () => {
    return (<div className="ui basic modal">
        <i className="close icon"></i>
        <div className="header">
            Delete person?
        </div>
        <div className="image content">
            <div className="image">
                <i className="archive icon"></i>
            </div>
            <div className="description">
                <p>Are you sure you want to delete this person?</p>
            </div>
        </div>
        <div className="actions">
            <div className="two fluid ui inverted buttons cancel">
                <div className="ui red basic inverted button">
                    <i className="remove icon"></i>
                    Cancel
                </div>
                <div className="ui green basic inverted button ok">
                    <i className="checkmark icon"></i>
                    Delete
                </div>
            </div>
        </div>
    </div>)
};

export default Modal; 