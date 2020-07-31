import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Template from '../../../components/Template';
import FormField from '../../../components/FormField/index';
import Button from '../../../components/Button/index';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (key, value) => setValues({ ...values, [key]: value });
  const handleChange = (e) => {
    setValue(e.target.getAttribute('name'), e.target.value);
  };

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP)
      .then(async (responseServer) => {
        const response = await responseServer.json();
        setCategorias([
          ...response,
        ]);
      });
  }, []);

  return (
    <Template>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([...categorias, values]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição da Categoria"
          type="textarea"
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

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        { categorias.map((categoria) => <li key={`${categoria.nome}`}>{categoria.nome}</li>) }
      </ul>

      <Link to="/">
        Voltar para Home
      </Link>
    </Template>
  );
}

export default CadastroCategoria;
