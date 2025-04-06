import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/inicio.css';

const Inicio = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Hola, soy Gonzalo Vallejos</h1>
          <h3>Licenciado en Sistemas</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <div className="btn-box">
            <a href="#">hire me</a>
            <a href="#">let's talk</a>
          </div>
        </div>

        <div className="home-sci">
          <a href="https://www.facebook.com/gonzalo.vallejo.547/"><i className='bx bxl-facebook'></i></a>
          <a href="https://www.instagram.com/gonzavallejos18"><i className='bx bxl-instagram'></i></a>
          <a href="https://www.linkedin.com/in/gonzalo-vallejos-90b173217/"><i className='bx bxl-linkedin'></i></a>
        </div>

        <span className="home-imgHover"></span>
      </section>
    </div>
  );
};

export default Inicio;
