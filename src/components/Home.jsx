import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/ditto');

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos: {error.message}</p>;

    const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
    const cries = data.cries.latest;

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Página Principal: Ditto</h1>
            <h2>Detalles de Ditto:</h2>
            <ul>
                <li><strong>Nombre:</strong> {data.forms[0].name}</li>
                <li><strong>Experiencia Base:</strong> {data.base_experience}</li>
                <li><strong>Habilidades:</strong> {abilities}</li>
                <li><strong>Gritos:</strong>
                    <audio controls>
                        <source src={cries} type="audio/ogg" />
                        Tu navegador no soporta audio.
                    </audio>
                </li>
            </ul>
        </div>
    );
};

export default Home;
