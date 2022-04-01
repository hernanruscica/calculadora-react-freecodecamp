import React from 'react';
import '../hojas-de-estilo/Testimonios.css'; 
function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className = 'imagen-testimonio' 
        src ={require('../imagenes/testimonio-emma.png')}
        alt = 'Foto de Emma'
      />
      <div className = 'contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera en software en spotify</p>
        <p className='texto-testimonio'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio hic, necessitatibus dignissimos tempore, eaque modi quasi, quae qui delectus harum itaque beatae praesentium quaerat blanditiis culpa explicabo velit ducimus.
        </p>
      </div>
    </div>
  );
}

export default Testimonio;