import React from 'react';

// Componente de proyecto individual
function Proyecto({ titulo, descripcion, enlace }) {
  return (
    <div className="proyecto">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {enlace && (
        <a href={enlace} target="_blank" rel="noopener noreferrer">
          Ver Proyecto en Github
        </a>
      )}
    </div>
  );
}

// Componente principal de proyectos
function Proyectos() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-container">
        <Proyecto
          titulo="Proyecto 1"
          descripcion="Página con login que permite cambiar contraseña:"
          enlace="https://github.com/cristhian-restrepo/proyecto2.git"
        />
        <Proyecto
          titulo="Proyecto 2"
          descripcion="primer versión del portafolio en html y css"
          enlace="https://github.com/cristhian-restrepo/sem5_portafolio.git"
        />
        <Proyecto
          titulo="Proyecto 3"
          descripcion="Primera versión del proyecto final"
          enlace="https://github.com/cristhian-restrepo/proyectofinal.git"
        />
        <Proyecto
          titulo="Proyecto 4"
          descripcion="segunda versión del portafolio usando react y vercel"
          enlace="https://github.com/cristhian-restrepo/sem11-portafolio2.git"
        />
        
      </div>
    </section>
  );
}

export default Proyectos;
