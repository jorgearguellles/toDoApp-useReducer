# useReducer

## Topics

1. useReducer
2. Reducers
3. Reducer theory
4. TODOs App
5. CRUD local

This is a section dedicated to understanding the concept of a Reducer, which is extremely important in order to get into Redux or use the contextAPI easily.

### ¿What is a Reducer?

1. A reducer is a sync function, should to be a pure function.
It means that should be able to resolve everything that is requested internally, without calling other functions
    - Shouldn't have side effects
    - Shouldn't have async tasks  
    - Always should return a new State
    - Shouldn't call _localStorage_ or _sessionStorage_ (Because it mean async functions).
    - To modified the State the Reducer just need a action ( Maybe have one arg ) 
2. Usually receive two args:
    - Initial State
    - Action to do 

```js
const initialState = [{
  id: 1,
  todo: 'Buy bread',
  done: false,
}];

const todoReducer = ( state = initialState, action ) => {
  // ....
  return state;
};

let toDos = todoReducer();
consol.log(toDos); // { id: 1,  todo: 'Buy bread', done: false, } ; length: 1
```

> Tip: The main idea of working with Reducer is to have all actions that change the State of my App in the same place. 

### Lifecycle Reducer

1. initialState
2. Then show component
3. User interact -> click
4. The UI Crate the Action
5. The Action will send to Reducer
6. Reducer applied the Action and setState
7. Then show component Update
8. And so on so on...


### useState ≈ useReducer

- useState is good for Simples and small State
- useReducer is good for Complex and big State

