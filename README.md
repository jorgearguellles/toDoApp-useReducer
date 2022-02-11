# ToDoApp - useReducer

This project is a Todo App by useReducer and you can do:

- Create a task-card
- Mark as done a task-card
- Delete a task-card
- See all task created every time we want

## Maker

- Developed by Jorge Arias Argüelles [GitHub](https://github.com/jorgearguellles) &
[LinkedIn](https://www.linkedin.com/in/jorgeariasarguelles/) 
- Based into React: De Cero a Experto course by Fernando Herrera [GitHub](https://github.com/Klerith) & [Udemy](https://www.udemy.com/course/react-cero-experto/)

## Development Technologies

Made with :green_heart: using:

- [Bootstrap](https://getbootstrap.com/)
- [React.js](https://es.reactjs.org)

## Demo

[Create your first To do list!](https://jorgearguellles.github.io/toDoApp-useReducer/)

## Screenshot App

![App Screenshot](https://github.com/jorgearguellles/toDoApp-useReducer/blob/main/src/screenshots/0.png)
![App Screenshot](https://github.com/jorgearguellles/toDoApp-useReducer/blob/main/src/screenshots/1.png)
![App Screenshot](https://github.com/jorgearguellles/toDoApp-useReducer/blob/main/src/screenshots/2.png)
![App Screenshot](https://github.com/jorgearguellles/toDoApp-useReducer/blob/main/src/screenshots/3.png)

## Feedback

Open to: [@JorgeAriasArgüelles](https://www.linkedin.com/in/jorgeariasarguelles/)

<hr />

# Some learning process notes

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
8. And ...so on so on...


### useState ≈ useReducer

- useState is good for Simples and small State
- useReducer is good for Complex and big State

