import React, { useState } from 'react';
import commands from '../commands/index';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const addToOutput = (data) => {
        setOutput(prev => prev.concat(data));
    }

    const clearOutput = () => {
        setOutput([]);
    }

    const onSubmit = e => {
        e.preventDefault();

        try {
            const params = input.split(' ');
            const command = commands.find(({ name }) => params[0] === name );            

            if(!command) throw `${params[0]} command not found`;

            addToOutput(<div key={output.length + 1}>{input}</div>);
            command.execute({ addToOutput, clearOutput, params, key: output.length + 2 });
        } catch (error) {
            addToOutput(<div key={output.length + 2}>{error}</div>)
        }

        setInput('');
    }

    return (
        <div className='mx-6 mt-8 p-4 font-mono'>
            {output}
            <form onSubmit={onSubmit}>
                <input value={input} onChange={e => setInput(e.target.value)}/>
            </form>
        </div>
    );
}

export default Terminal;