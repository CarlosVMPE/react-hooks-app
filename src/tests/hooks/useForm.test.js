const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Carlos',
        email: 'carlos@gmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange,  ] = result.current;
        const newName = {
            target: {
                name: 'name',
                value: 'Diana'
            }
        };
        
        act( () => {
            handleInputChange(newName);
        });
        
        const [ values ] = result.current;
        expect(values).toEqual({
            ...initialForm,
            name: 'Diana'
        });
    });


    test('Debe de restablecer el fomulario con RESET', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange,  reset] = result.current;
        const newName = {
            target: {
                name: 'name',
                value: 'Diana'
            }
        };
        
        act( () => {
            handleInputChange(newName);
            reset();
        });

        const [ values ] = result.current;
        expect(values).toEqual(initialForm);

    });



});
