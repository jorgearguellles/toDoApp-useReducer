import { useReducer, useEffect} from 'react';
import { toDoReducer } from './components/toDoReducer';
import { useForm } from './Hooks/useForm';
import './ToDoApp.css';

const init = () => {
  return JSON.parse( localStorage.getItem('todos') ) || [];
}

function ToDoApp() {

  const [ todos, dispatch ] = useReducer( toDoReducer, [], init );
  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  });

  useEffect( ()=>{
    localStorage.setItem( 'todos', JSON.stringify( todos ) )
  },[todos])

  const handleSubmit = (e) => {
    e.preventDefault();

    if( description.trim().length <= 1 ) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    const action = {
      type: 'add',
      payload: newTodo,
    }

    dispatch(action)
    reset();
  }

  const handleDelete = ( todoId ) => {

    const action = {
      type: 'delete',
      payload: todoId,
    }

    dispatch(action);
  }

  return (
    <div className="App">
      <h1>ToDo App ( {todos.length} )</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ul className='list-group list-group-flush'>
              {
                todos.map((todo, i)=>(
                  <li 
                    key={ todo.id }
                    className="list-group-item"
                  > 
                    <p className='text-center'> {i + 1}. { todo.description }</p>
                    <button 
                      className='btn btn-danger'
                      onClick={ ()=> handleDelete(todo.id) }
                    >
                      Delete
                    </button>
                  </li>
                ))
              }
          </ul>
        </div>
        <div className='col-5'>
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
        </div>

      </div>
    </div>
  );
}

export {ToDoApp};
