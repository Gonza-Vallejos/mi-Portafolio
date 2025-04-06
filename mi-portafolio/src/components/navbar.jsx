import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`header ${visible ? "visible" : "hidden"}`}>
      <a href="#" className="logo">Gonzalo.</a>
      <nav className="navbar">
        <Link to="/" className="active">Inicio</Link>
        <Link to="/sobremi">Sobre mí</Link>
        <Link to="#">Servicios</Link>
        <Link to="#">Portfolio</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Navbar;

