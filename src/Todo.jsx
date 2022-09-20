import React, { useState } from 'react';
import TodoForm from './TodoFrom';
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdEditOff } from 'react-icons/md';

const Todo = ({ todos, markedDone, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div className='text' key={todo.id} onClick={() => markedDone(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <AiTwotoneDelete
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <MdEditOff
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        
      </div>
    </div>
  ));
};

export default Todo;