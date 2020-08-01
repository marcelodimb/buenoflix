import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="BuenoFlix logo" />
    </Link>
    <Button as={Link} to="/cadastro/video" className="ButtonLink">Novo vídeo</Button>
  </nav>
);

export default Menu;
