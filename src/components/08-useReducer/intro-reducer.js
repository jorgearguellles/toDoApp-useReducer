const initialState = [
  {
    id: 1,
    todo: 'Buy bread',
    done: false,
  },
];

const todoReducer = ( state = initialState, action )=>{
  if( action?.type === 'add'){
    return [...state, action.payload ];
  }

  return state
};

let toDos = todoReducer();

const newToDo = {
  id: 2,
  todo: 'Sell wood',
  done: false,
};

const action = {
  type: "add",
  payload: newToDo
}

toDos = todoReducer( toDos, action )

console.log(toDos)