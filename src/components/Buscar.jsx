import React, { useState } from 'react';

const Buscar = () => {
    const [cep, setCep] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCep = () => {
        setLoading(true);
fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
        if (!response.ok) {
            throw new Error('');
        }
        return response.json();
    })
    .then(data => {
        setCep(data);
        setLoading(false);
        setError(null);
    })
    .catch(error => {
        setError('CEP não encontrado!');
        setLoading(false);
    });
};

    const handleChange = (event) => {
        setCep(event.target.value);
    };

    return (
        <div id="buscar">
            <h1>Buscar Endereço</h1>
            <label htmlFor="cep">Incira o CEP:</label>
            <input className='pesquisa'
                type="text"
                id="cep"
                value={JSON.stringify.cep}
                onChange={handleChange}
                placeholder='Digite o CEP'
            />
            <button className="button" onClick={fetchCep}>Buscar</button>

            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}

            {cep && (
                <div className='cep'>
                    <p>CEP: {cep.cep}</p>
                    <p>Logradouro: {cep.logradouro}</p>
                    <p>Bairro: {cep.bairro}</p>
                    <p>Cidade: {cep.localidade}</p>
                    <p>Estado: {cep.uf}</p>
                </div>
            )}
      </div>  
    );
};

export default Buscar;
