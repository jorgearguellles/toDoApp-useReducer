import { useReducer, useEffect} from 'react';
import { toDoReducer } from './helpers/toDoReducer';

import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd.js';
import './ToDoApp.css';

const init = () => {
  return JSON.parse( localStorage.getItem('todos') ) || [];
}

function ToDoApp() {
  const [ todos, dispatch ] = useReducer( toDoReducer, [], init );
  
  useEffect( ()=>{
    localStorage.setItem( 'todos', JSON.stringify( todos ) )
  },[todos])

  const handleAddTodo = ( newTodo ) => {
    dispatch({
      type: actionTypes.ADD,
      payload: newTodo,
    });
  };

  const handleDelete = ( todoId ) => {
    const action = {
      type: actionTypes.DELETE,
      payload: todoId,
    }
    dispatch(action);
  }

  const handleToggle = ( todoId ) => {
    dispatch({
      type: actionTypes.TOGGLE,
      payload: todoId,
    });
  }

  return (
    <div className="App">
      <h1>ToDo App ( {todos.length} )</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList 
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className='col-5'>
          <TodoAdd 
            handleAddTodo={handleAddTodo}
          />
        </div>

      </div>
    </div>
  );
}

const actionTypes = {
  ADD: 'add',
  DELETE: 'delete',
  TOGGLE: 'pendingToggle'
}

export {ToDoApp};
