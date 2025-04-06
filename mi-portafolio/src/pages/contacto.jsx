import React from 'react';
import '../styles/contacto.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <>

      <section className="contacto">
        <div className="contacto-content">
          <h1>Contacto</h1>
          <p>Podés escribirme completando el formulario o contactarme por WhatsApp directamente.</p>

          <form action="mailto:gonza18av@gmail.com" method="post" encType="text/plain">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

            <button type="submit">Enviar Correo</button>
          </form>

          <div className="info-contacto">
            <p><i className='bx bxs-phone'></i> Teléfono: +54 3777238159</p>
            <a href="https://wa.me/3777238159" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <i className='bx bxl-whatsapp'></i> Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{
        __html: `
        const toggle = document.getElementById('menu-toggle');
        const navbar = document.getElementById('navbar');
        if (toggle && navbar) {
          toggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
          });
        }`
      }} />
    </>
  );
};

export default Contacto;

