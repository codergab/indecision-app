import React from 'react';

const ActionButton = (props) => (
    <div>
        <button
            className="big-button" 
            disabled={!props.containsData}
            onClick={props.handlePick}
        >
            What should i do?
        </button>
    </div>
);

export default ActionButton;