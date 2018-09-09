import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
            className="button--link"
            onClick={props.handleRemoveAll} disabled={props.options.length == 0}>Remove all Options</button>
        </div>
        
        {props.options.length === 0 && <p className="widget__message">Pease add options to get started</p>}
        {
            props.options.map((option, index) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        count={index + 1}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                )
            )
        }
    </div>
);


export default Options;