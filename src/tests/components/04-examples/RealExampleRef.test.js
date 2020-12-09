import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en RealExample', () => {

    let wrapper = shallow(<RealExampleRef />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
    test('Debe mostrarse el componente <MultipleCustomHooks />', () => {
        const button = wrapper.find('button');
        button.simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
    
});
