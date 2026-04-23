import { useState } from 'react';

const Trabajadores = ({ trabajadores, setTrabajadores, volver }) => {
  const [nuevo, setNuevo] = useState({ nombre: '', cargo: '' });

  const agregar = (e) => {
    e.preventDefault();
    setTrabajadores([...trabajadores, { ...nuevo, id: Date.now() }]);
    setNuevo({ nombre: '', cargo: '' });
  };

  return (
    <div className="container-fluid px-4 py-4">
      <h3>Trabajadores</h3>

      <form className="row g-3 mb-3" onSubmit={agregar}>
        <div className="col-md-5">
          <input className="form-control" placeholder="Nombre"
            value={nuevo.nombre}
            onChange={e => setNuevo({...nuevo, nombre:e.target.value})}/>
        </div>
        <div className="col-md-5">
          <input className="form-control" placeholder="Cargo"
            value={nuevo.cargo}
            onChange={e => setNuevo({...nuevo, cargo:e.target.value})}/>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100">Agregar</button>
        </div>
      </form>

      <table className="table table-bordered table-hover">
        <thead className="table-dark text-center">
          <tr><th>ID</th><th>Nombre</th><th>Cargo</th><th></th></tr>
        </thead>
        <tbody>
          {trabajadores.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.nombre}</td>
              <td>{t.cargo}</td>
              <td>
                <button className="btn btn-danger btn-sm"
                  onClick={() => setTrabajadores(trabajadores.filter(x => x.id !== t.id))}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-secondary" onClick={volver}>Volver</button>
    </div>
  );
};

export default Trabajadores;