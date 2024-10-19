import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (username, password) => {
        // Implementa la lógica de registro aquí
        // Ejemplo simple: guarda en localStorage
        localStorage.setItem('user', JSON.stringify({ username }));
        setUser({ username });
    };

    const login = async (username, password) => {
        // Implementa la lógica de inicio de sesión aquí
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username) {
            setUser(storedUser);
        } else {
            throw new Error('Credenciales incorrectas');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
