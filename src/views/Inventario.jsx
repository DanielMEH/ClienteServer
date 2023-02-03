import React from 'react';

function Inventario() {

  const hundleClick = () => {
    localStorage.removeItem('secure_token');
    localStorage.removeItem('perfil_rol');
    localStorage.removeItem('auth_cuenta');
    localStorage.removeItem('response_auth');
    window.location.href = '/login';
  }
  return (
    <div>
     <h1 className='text-center items-center bg-slate-700
     text-white p-4 text-3xl'>Inventario</h1>
     <button onClick={hundleClick}
     className="bg-red-500 m-5 p-2 rounded text-xl text-white
     hover:bg-red-600">
      Cerrar sesión
     </button>

    </div>
  );
}

export default Inventario;
