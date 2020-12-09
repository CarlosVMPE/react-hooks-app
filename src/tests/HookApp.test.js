import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });

});
