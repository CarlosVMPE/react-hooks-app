import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1 obtener la referencia al userContext
    // extraer el setUser
    const { setUser } = useContext(UserContext);

    /**
     * {
     *  id: 123,
     *  name: 'Carlos'
     * }
     */
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => setUser({
                    id: 123,
                    name: 'Carlos'
                })}>
                Login
                </button>
        </div>
    )
}
