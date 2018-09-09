import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import ActionButton from './ActionButton';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    };
    handleRemoveOption = (optionToRemove) => {
        this.setState((prev) => ({options: prev.options.filter((option) => optionToRemove !== option)}));
    };
    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState(() => ({ 
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if(!option) {
            return 'Please Enter A Valid Value to Add.';
        }else if(this.state.options.indexOf(option) > -1) {
            return 'Option Already Exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };
    clearOptions = () => {
        this.setState((prevState) => ({ selectedOption: undefined }));
    };
    componentDidMount = () => {
        try {
            // Fetch from the localstorage
            const optionItems = localStorage.getItem('options');
            console.log(optionItems);
            // Parse it to a json 
            const options = JSON.parse(optionItems);
            if(options){
                this.setState(() => ({options}))
            }
        } catch (error) {
            
        }
    };
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            const options = JSON.stringify(this.state.options);
            localStorage.setItem('options',options);
        }

    };
    componentWillUnmount() {

    };
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a Computer';
        // const options = ['One','Two','Three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                    <div className="container">
                        <ActionButton 
                            handlePick={this.handlePick}
                            containsData={this.state.options.length} 
                        />
                        <div className="widget">
                            <Options 
                                handleRemoveAll={this.handleRemoveAll}
                                options={this.state.options}
                                handleRemoveOption={this.handleRemoveOption}
                            />
                            <AddOption handleOp={this.handleAddOption}/>
                        </div>
                    </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearOption={this.clearOptions}
                />
            </div>
        );
    };
}