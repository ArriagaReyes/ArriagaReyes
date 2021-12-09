import React from 'react';

const Add = ({ num1, num2 }) => {
    return (
        <div>{num1 + num2}</div>
    );
}

const command = {
    name: 'add',
    description: 'add two numbers together',
    execute: ({ params, addToOutput, key }) => {
        if(!params[1] || !parseInt(params[1])) throw 'Missing first number';
        if(!params[2] || !parseInt(params[2])) throw 'Missing second number';
        if(params[3]) throw 'I can`t add three numbers togther :/';

        addToOutput(<Add key={key} num1={parseInt(params[1])} num2={parseInt(params[2])} />);
    }
}

export default command;