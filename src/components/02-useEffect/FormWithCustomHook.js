import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

/**
 * useEffect: Nos va permitir a nosotros
 * ejecutar algun efecto secundario 
 * cuando algo suceda en nuestros componentes
 */
export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Email cambió')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    value={password}
                    onChange={handleInputChange} />
            </div>


            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}
