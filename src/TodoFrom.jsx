import React, { useState } from 'react';

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '');


const handleChange = e => {
    setInput(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 100),
        text: input,
        status: false
    });
    setInput('');
};

return (
    <form onSubmit={handleSubmit} className='todo-form'>
    {props.edit ? (
        <>
        <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            
            className='todo-input edit'/>
        <button onClick={handleSubmit} className='todo-button-edit'>
            Edite
        </button>
        </>
    ) : (
        <>
        <input
            placeholder='Enter What To Do.......'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            
        />
        <button onClick={handleSubmit} className='todo-btn'>
            Add 
        </button>
        </>
    )}
    </form>
);
}

export default TodoForm;