import React from 'react'
import { useForm } from '../Hooks/useForm';

const TodoAdd = ( { handleAddTodo } ) => {

  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if( description.trim().length <= 1 ) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    handleAddTodo(newTodo);
    reset();
  }

  return (
    <>
      <h4>Add To Do</h4>
      <hr />
      <form onSubmit={ handleSubmit }>
        <input 
          type='text'
          className='form-control'
          name='description'
          placeholder='Description ...'
          autoComplete='off'
          onChange={handleInputChange}
          value={description}
        />
        <button type='submit' className='btn btn-outline-primary mt-1 btn-block'>Add</button>
      </form>
    </>

  )
};

export { TodoAdd }
