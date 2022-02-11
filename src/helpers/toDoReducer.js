
const toDoReducer = ( state = [], action ) => {

  switch( action.type ){
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter( todo => todo.id !== action.payload );

    case 'pendingToggle':
      return state.map( todo => 
        ( todo.id === action.payload)
          ? { ...todo, done: !todo.done } 
          : todo
      )

    case 'pendingToggle-longWay':
      return state.map( todo => {
        if( todo.id === action.payload){
          return{
            ...todo,
            done: !todo.done
          }
        } else {
          return todo;
        }
      });
      
    default:
      return state;
  }

};

export { toDoReducer }