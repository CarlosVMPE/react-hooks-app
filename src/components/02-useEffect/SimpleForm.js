import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

/**
 * useEffect: Nos va permitir a nosotros
 * ejecutar algun efecto secundario 
 * cuando algo suceda en nuestros componentes
 */
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey!')
    }, []);
    
    // Pendiente en caso cambie el formulario
    useEffect(() => {
        // console.log('FormState cambió!')
    }, [formState]);
    
    // Pendiente en caso cambie el email
    useEffect(() => {
        // console.log('email cambió!')
    }, [email]);
    
    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input 
                type="text" 
                name="name"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}/>
            </div>
            
            <div className="form-group">
                <input 
                type="text" 
                name="email"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}/>
            </div>

            { (name === '123') && <Message /> }
        </>
    )
}
