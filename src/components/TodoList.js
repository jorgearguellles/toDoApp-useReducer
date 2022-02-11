import { TodoListItem } from "./TodoListItem"

const TodoList = ( { todos, handleDelete, handleToggle } ) => {
  console.log(todos)
  return(
    <ul className='list-group list-group-flush'>
      {
        todos.map( (todo, i)=>(
          <TodoListItem 
            key={todo.id}
            todo={todo}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))
      }
    </ul>
  )
};

export { TodoList }