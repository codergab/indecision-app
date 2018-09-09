const app = {
    title: 'Indecision App',
    subtitle: 'Your Life in Hands of a Geek',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAll = () => {
    app.options =[];
    renderApp();
};

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    alert(option);
};
const root = document.getElementById('app');
const renderApp = () => {
    const template = (<div>
        <h1>{app.title }</h1>
        <p>{app.subtitle}</p>
        <p>{app.options.length > 0 ? 'Here Are Your Options': 'No Options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should i do?</button>
        <ol>
        {
            app.options.map((option) => <li key={option}>{option}</li>)
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
            <button onClick={removeAll}>Remove All</button>
        </form>
    </div>);
    ReactDOM.render(template,root);
}

renderApp();
