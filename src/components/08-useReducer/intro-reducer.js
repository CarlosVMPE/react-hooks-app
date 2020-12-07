
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

/**
 * 
 * Esta función solo resuelve el state y siempre retorna un estado
 * No permite realizar peticiones asincronas
 * No permite realizar efectos secundarios
 * Siempre retorna un estado
 */
const todoReducer = (state = initialState, action) => {

    if( action?.type === 'agregar'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

// agregar un nuevo state
const newTodo = {
    id: 2,
    todo: 'Comprar chocolate',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction);

console.log(todos);