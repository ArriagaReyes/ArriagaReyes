import React from 'react';

const Hello = () => {
    return (
        <div>Hello, world!</div>
    );
}

const command = {
    name: 'hello',
    description: 'Hello :3',
    execute: ({ addToOutput, key, params }) => {
        if(params[1]) throw 'This command doesn`t take any parameters';

        addToOutput(<Hello key={key}/>);
    }
}

export default command;