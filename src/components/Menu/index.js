import React from  'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

const Menu = () => (
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="AluraFlix logo" />
        </a>
        <Button as="a" href="/" className="ButtonLink">Novo vídeo</Button>
    </nav>
);

export default Menu;