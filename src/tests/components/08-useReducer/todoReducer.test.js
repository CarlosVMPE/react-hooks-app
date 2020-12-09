const { todoReducer } = require("../../../components/08-useReducer/todoReducer");
const { demoTodos } = require("../../fixtures/demoTodos");


describe('Pruebas en todoReducer', () => {
    test('Debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Node',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        expect(state.includes(newTodo)).toBe(true);
    });

    test('Debe de borrar un TODO', () => {
        const id = 2;
        const action = {
            type: 'delete',
            payload: id
        };

        const state = todoReducer(demoTodos, action);
        const valExpect = state.filter(todo => todo.id === id);
        expect(valExpect).toEqual([]);

    });

    test('Debe de hacer el TOGGLE del TODO', () => {
        const id = 1;
        const action = {
            type: 'toggle',
            payload: id
        };

        const firstState = todoReducer(demoTodos, {});
        const { done } = firstState.find(todo => todo.id === id);
        
        const toggleState = todoReducer(demoTodos, action);
        const { done: doneToggle } = toggleState.find(todo => todo.id === id);

        expect(doneToggle).toEqual(!done);
    });

});
