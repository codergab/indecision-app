class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details':'Show Details'}</button>
                <p>
                    {this.state.visibility && (
                        <div>
                            <p>Here Are Your Details</p>
                        </div>
                    )}
                </p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// let detailsShown = false;
// const toggleVisibility = () => {
//     detailsShown = !detailsShown;
//     // console.log(buttonClicked);
//     renderApp();
// };
// const root = document.getElementById('app');
// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{ detailsShown ? 'Hide Details' : 'Show Details' }</button>
//             <p>
//             {detailsShown && (
//                 <div>
//                     <p>Hey, There are the etails</p>
//                 </div>
//             )}</p>
//         </div>
//     );
//     ReactDOM.render(template, root);
// };

// renderApp();