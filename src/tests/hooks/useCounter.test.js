const { renderHook, act } = require("@testing-library/react-hooks");
const { useCounter } = require("../../hooks/useCounter");

describe('Pruebas en useCounter', () => {
    test('Debe de retornar valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });
    
    test('Debe de tener el counter en 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        expect(result.current.counter).toBe(100);
    });

    test('Debe de incrementar el counter en 1', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;
        
        act( () => {
            increment();
        });
        
        const { counter } = result.current;
        expect(counter).toBe(101);
    });
    
    test('Debe de reducir el counter en 1', () => {
        const { result } = renderHook( () => useCounter(50) );
        const { decrement } = result.current;
        
        act( () => {
            decrement();
        });
        
        const { counter } = result.current;
        expect(counter).toBe(49);
    });
    
    test('Debe de cambiar el counter en su valor inicial', () => {
        const { result } = renderHook( () => useCounter(30) );
        const { decrement, reset } = result.current;
        
        act( () => {
            decrement();
            reset();
        });
        
        const { counter } = result.current;
        expect(counter).toBe(30);
    });
    
})
