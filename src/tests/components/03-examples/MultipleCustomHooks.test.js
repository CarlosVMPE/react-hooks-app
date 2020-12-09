
import React from 'react';
import { shallow } from 'enzyme';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
const { MultipleCustomHooks } = require("../../../components/03-examples/MultipleCustomHooks");
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        });
    });

    test('Debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Carlos',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Carlos');
        console.log(wrapper.html())
    });

});
