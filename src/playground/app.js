class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
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
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const options = JSON.stringify(this.state.options);
            localStorage.setItem('options',options);
        }

    }
    componentWillUnmount() {

    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }
    handleRemoveOption(optionToRemove) {
        this.setState((prev) => ({options: prev.options.filter((option) => optionToRemove !== option)}));
    }
    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }
    handleAddOption(option) {
        if(!option) {
            return 'Please Enter A Valid Value to Add.';
        }else if(this.state.options.indexOf(option) > -1) {
            return 'Option Already Exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a Computer';
        // const options = ['One','Two','Three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <ActionButton 
                    handlePick={this.handlePick}
                    containsData={this.state.options.length} 
                />
                <Options 
                    handleRemoveAll={this.handleRemoveAll}
                    options={this.state.options}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleOp={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title }</h1>
            <h2>{props.subtitle }</h2>
        </div>
    );
};
const ActionButton = (props) => {
    return (
        <div>
            <button 
                disabled={!props.containsData}
                onClick={props.handlePick}
            >
                What should i do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove all Options</button>
            {props.options.length === 0 && <p>Pease add options to get started</p>}
            {
                props.options.map((option) => (
                        <Option 
                            key={option} 
                            optionText={option} 
                            handleRemoveOption={props.handleRemoveOption}
                        />
                    )
                )
            }
        </div>
    );
};
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                    props.handleRemoveOption(props.optionText)
                }}
            >
            remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };

    }
    handleAddOption(e) {
        e.preventDefault();
        const targetEl = e.target.elements.option.value.trim();
        const returnItem = this.props.handleOp(targetEl);

        this.setState(() => ({ error: returnItem }));

        if(!returnItem) {
            e.target.elements.option.value = '';
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));