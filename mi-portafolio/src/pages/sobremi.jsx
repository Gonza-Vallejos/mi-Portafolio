import React from "react";
import '../styles/sobremi.css';


const SobreMi = () => {
  return (
    <>
      <section className="sobre-mi">
        <div className="contenido-sobre-mi">
          <h1>Sobre mí</h1>
          <p>
            Hola, soy Gonzalo Vallejos. Soy Licenciado en Sistemas y apasionado por el desarrollo de software. Me encanta crear soluciones tecnológicas que mejoren la vida de las personas. Trabajo con tecnologías como JavaScript, Node.js, React, y bases de datos como MySQL y MongoDB. Siempre estoy aprendiendo algo nuevo y buscando desafíos que me hagan crecer como profesional.
          </p>
        </div>
      </section>

      <section className="proyectos" id="proyectos">
        <h2>Mis Proyectos</h2>
        <div className="proyectos-container">
          <div
            className="proyecto-card"
            onClick={() => window.location.href = "proyecto1.html"}
          >
            <img src="img/proyecto1.jpg" alt="App Minibuses" />
            <div className="contenido">
              <h3>App de Minibuses</h3>
              <p>App para reservar viajes y gestionar empresas.</p>
            </div>
          </div>

          <div className="proyecto-card">
            <img src="img/proyecto2.png" alt="Proyecto 2" />
            <div className="contenido">
              <h3>Proyecto 2</h3>
              <p>Sitio web de noticias con panel administrador hecho en React y Node.js.</p>
            </div>
          </div>

          <div className="proyecto-card">
            <img src="img/proyecto3.png" alt="Proyecto 3" />
            <div className="contenido">
              <h3>Proyecto 3</h3>
              <p>E-commerce básico con carrito, filtros y validación de formularios.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreMi;
