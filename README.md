# useReducer

## Topics

1. useReducer
2. Reducers
3. Reducer theory
4. TODOs App
5. CRUD local

This is a section dedicated to understanding the concept of a Reducer, which is extremely important in order to get into Redux or use the contextAPI easily.

### ¿What is a Reducer?
1. A reducer is a function sync
2. Should to be a pure function 
  - Shouldn't have side effects: It means that should be able to resolve everything that is requested internally, without calling other functions
  - Shouldn't do async functions: 
  - Always should return a new State
  - Reducer shouldn't call localStorage or sessionStorage (Because it mean async functions).
  - Just need a action ( Maybe have one arg )to modified the State, 
3. Usually receive two args:
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



