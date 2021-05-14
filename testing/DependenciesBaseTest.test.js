/* eslint-disable no-undef */

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { getSaludo } from '../src/components/baseTest';

import { Dependencies} from '../src/views/dependencies';

describe('Pruebas en Dependencies', () => {


    
    test('debe encontrar que existe un aside vacio', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const wrapper = shallow( <Dependencies></Dependencies> );
        expect(wrapper).toMatchSnapshot();
        const text = "";

        const textWrapp = wrapper.find('aside').text();
        
        expect(textWrapp).toBe(text);
    });
    
});