import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, description, status: 'Not Completed' });
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>

            <label >

                <input className='Todo-name' placeholder=' Todo Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label className='Todo-description'>



                <input
                    className='Todo-name'
                    placeholder='Todo Description'
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>

            <button className='btn-addtodo' type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
