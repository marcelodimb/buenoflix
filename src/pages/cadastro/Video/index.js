import React from 'react';
import { Link } from 'react-router-dom';

import Template from '../../../components/Template';

const CadastroVideo = () => (
    <Template>
        <h1>Cadastro de Vídeo</h1>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
    </Template>
);

export default CadastroVideo;
