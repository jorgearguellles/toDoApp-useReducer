
const toDoReducer = ( state = [], action ) => {

  switch( action.type ){
    case actionTypes.ADD:
      return [...state, action.payload]

    case actionTypes.DELETE:
      return state.filter( todo => todo.id !== action.payload );

    case actionTypes.TOGGLE:
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

const actionTypes = {
  ADD: 'add',
  DELETE: 'delete',
  TOGGLE: 'pendingToggle'
}

export { toDoReducer }