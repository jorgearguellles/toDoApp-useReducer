import { useReducer, useEffect} from 'react';
import { TodoList } from './components/TodoList';
import { toDoReducer } from './helpers/toDoReducer';
import { TodoAdd } from './helpers/TodoAdd';
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
      type: 'add',
      payload: newTodo,
    });
  };

  const handleDelete = ( todoId ) => {
    const action = {
      type: 'delete',
      payload: todoId,
    }

    dispatch(action);
  }

  const handleToggle = ( todoId ) => {
    dispatch({
      type: 'pendingToggle',
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

export {ToDoApp};
