import { useState } from 'react';

const Productos = ({ volver }) => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Coca Cola 2L', precio: 12, categoria: 'Gaseosas' },
    { id: 2, nombre: 'Paceña Lata', precio: 10, categoria: 'Cervezas' }
  ]);

  const [nuevo, setNuevo] = useState({ nombre: '', precio: '', categoria: '' });

  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.precio) return;

    setProductos([...productos, { ...nuevo, id: Date.now() }]);
    setNuevo({ nombre: '', precio: '', categoria: '' });
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  return (
    <div className="container-fluid px-4 py-4">
      <div className="d-flex justify-content-between mb-3">
        <h3>Productos</h3>
        <button className="btn btn-secondary" onClick={volver}>Volver</button>
      </div>

      <div className="card shadow border-0 mb-4">
        <div className="card-header bg-dark text-white">Nuevo Producto</div>
        <div className="card-body">
          <form className="row g-3" onSubmit={agregarProducto}>
            <div className="col-md-4">
              <input className="form-control" placeholder="Nombre"
                value={nuevo.nombre}
                onChange={e => setNuevo({...nuevo, nombre: e.target.value})}/>
            </div>
            <div className="col-md-3">
              <input type="number" className="form-control" placeholder="Precio"
                value={nuevo.precio}
                onChange={e => setNuevo({...nuevo, precio: e.target.value})}/>
            </div>
            <div className="col-md-3">
              <select className="form-select"
                value={nuevo.categoria}
                onChange={e => setNuevo({...nuevo, categoria: e.target.value})}>
                <option value="">Categoría</option>
                <option>Gaseosas</option>
                <option>Cervezas</option>
                <option>Vinos</option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success w-100">Agregar</button>
            </div>
          </form>
        </div>
      </div>

      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th>ID</th><th>Nombre</th><th>Precio</th><th>Categoría</th><th></th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.precio} Bs</td>
              <td><span className="badge bg-info">{p.categoria}</span></td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => eliminarProducto(p.id)}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;