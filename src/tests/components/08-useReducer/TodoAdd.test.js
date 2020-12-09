import { shallow } from 'enzyme';
import React from 'react'
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en TodoApp', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar addTODO', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la función handleAddTodo', () => {
        // con un argumento 
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() {} });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith( {
            id: expect.any(Number), // decirle que no me importa con tal sea un número
            desc: value,
            done: false
        } );

        expect(wrapper.find('input').prop('value')).toBe(''); // simulando el reset
    });


});
