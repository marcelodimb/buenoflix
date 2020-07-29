import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Template from '../../../components/Template';
import FormField from '../../../components/FormFields/index';


function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const [ categorias, setCategorias ] = useState([]);
    const [ values, setValues ] = useState(valoresIniciais);

    const setValue = (key, value) => setValues({ ...values, [key]: value });
    const handleChange = e => {
        setValue(e.target.getAttribute('name'), e.target.value);
    }

    return (
        <Template>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                setCategorias([...categorias, values]);
                setValues(valoresIniciais);
                }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />
                <FormField
                    label="Descrição da Categoria:"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                { categorias.map((categoria, index) => <li key={`${categoria.nome}${index}`}>{categoria.nome}</li>) }
            </ul>

            <Link to="/">
                Voltar para Home
            </Link>
        </Template>
    );
}

export default CadastroCategoria;
