/* eslint-disable no-undef */

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { getSaludo } from '../src/components/baseTest';
import { Home } from '../src/views/home';

describe('Pruebas en home', () => {

    test('getSaludo debe de retornar Hola Fernando!', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );
        //jest permite utilizar los metodos de la clase 

        expect( saludo ).toBe( 'Hola ' + nombre + '!');
        //toBe compara que el resultado de una variable sea el resultado que estamo esperando

    });
    
    // getSaludo debe de retorar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe de retorar Hola Carlos! si no hay argumento nombre', () => {
    
        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Carlos!' );

    });
    
    test(' se esta renderizando el componente home', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const wrapper = shallow( <Home></Home> );
        expect(wrapper).toMatchSnapshot();
    }); 
    

    
});