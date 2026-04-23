import { useState } from 'react';

const Trabajadores = ({ trabajadores, setTrabajadores, volver }) => {
  const [nuevo, setNuevo] = useState({ nombre: '', cargo: '' });

  const agregar = (e) => {
    e.preventDefault();
    setTrabajadores([...trabajadores, { ...nuevo, id: Date.now() }]);
    setNuevo({ nombre: '', cargo: '' });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <h2>👤 Gestión de Trabajadores</h2>
        <button className="btn btn-secondary" onClick={volver}>Volver</button>
      </div>
      <form className="row g-3 mb-4 card p-3 shadow-sm flex-row" onSubmit={agregar}>
        <div className="col-md-5"><input className="form-control" placeholder="Nombre completo" value={nuevo.nombre} onChange={e => setNuevo({...nuevo, nombre: e.target.value})} /></div>
        <div className="col-md-5"><input className="form-control" placeholder="Cargo" value={nuevo.cargo} onChange={e => setNuevo({...nuevo, cargo: e.target.value})} /></div>
        <div className="col-md-2"><button className="btn btn-primary w-100">Registrar</button></div>
      </form>
      <table className="table bg-white shadow-sm rounded">
        <thead className="table-dark"><tr><th>ID</th><th>Nombre</th><th>Cargo</th><th>Acción</th></tr></thead>
        <tbody>
          {trabajadores.map(t => (
            <tr key={t.id}><td>{t.id}</td><td>{t.nombre}</td><td>{t.cargo}</td>
            <td><button className="btn btn-danger btn-sm" onClick={() => setTrabajadores(trabajadores.filter(x => x.id !== t.id))}>Eliminar</button></td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Trabajadores;