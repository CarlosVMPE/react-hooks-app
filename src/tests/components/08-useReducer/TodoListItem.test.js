const { shallow } = require("enzyme");
const { TodoListItem } = require("../../../components/08-useReducer/TodoListItem");
const { demoTodos } = require("../../fixtures/demoTodos");

describe('Pruebas en TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test('Debe de mostrarse correctamente', () => {
        //snapshot
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar la función handleDelete', () => {
        // jest.fn()
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(1);
    });

    test('Debe de llamar la función handleToggle', () => {
        // jest.fn()
        const p = wrapper.find('p');
        p.simulate('click');
        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenCalledWith(1);
        
    });

    test('Debe de mostrar el texto correctamente', () => {
        // contenido del parrafo
        const p = wrapper.find('p');
        expect(p.text()).toBe(`1. ${demoTodos[0].desc}`);
    });
    
    test('Debe de tener la clase complete si el todo.done = true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });

});
