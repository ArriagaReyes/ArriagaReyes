import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

const commands = Object();
commands[/hello/] = (params, key) => { return <div key={key}>Hello!</div> };

const checkCommand = (input, key) => {
    let command;
    try {
        command = new RegExp(input);
    } catch (error) {
        return <div key={key} className='error'>Invalid command</div>
    }

    try {
        if(!commands[command])
            throw 'Command not found';

        return commands[command](undefined, key);
    } catch (error) {
        return <div key={key} className='error'>{error}</div>
    }
}

const App = () => {
    const [input, changeInput] = useState('');
    const [list, setList] = useState([]);

    const onEnter = e => {
        e.preventDefault();
        setList(list.concat(checkCommand(input, list.length + 1)));
    }

    return (
        <>
        <input value={input} onChange={(e) => { changeInput(e.target.value) }}></input>
        <button onClick={onEnter} type='submit'>Enter</button>
        {list}
        </>
    );
}

ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);