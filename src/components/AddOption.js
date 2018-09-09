import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const targetEl = e.target.elements.option.value.trim();
        const returnItem = this.props.handleOp(targetEl);

        this.setState(() => ({ error: returnItem }));

        if(!returnItem) {
            e.target.elements.option.value = '';
        }

    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text" />
                    <button className="small-button">Add Option</button>
                </form>
            </div>
        )
    }
}