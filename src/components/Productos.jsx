import { useState } from 'react';

const Productos = ({ volver }) => {
  // Estado que simula nuestra DB de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Coca Cola 2L', precio: 12, categoria: 'Gaseosas' },
    { id: 2, nombre: 'Paceña Lata', precio: 10, categoria: 'Cervezas' }
  ]);

  const [nuevo, setNuevo] = useState({ nombre: '', precio: '', categoria: '' });

  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.precio) return;
    
    const productoConId = { ...nuevo, id: Date.now() }; // Genera un ID único
    setProductos([...productos, productoConId]);
    setNuevo({ nombre: '', precio: '', categoria: '' }); 
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📦 Gestión de Productos (RF-004)</h2>
        <button className="btn btn-secondary" onClick={volver}>Volver al Dashboard</button>
      </div>

      {/* Formulario para agregar */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <form className="row g-3" onSubmit={agregarProducto}>
            <div className="col-md-4">
              <input 
                type="text" className="form-control" placeholder="Nombre de la bebida" 
                value={nuevo.nombre} onChange={(e) => setNuevo({...nuevo, nombre: e.target.value})}
              />
            </div>
            <div className="col-md-3">
              <input 
                type="number" className="form-control" placeholder="Precio (Bs)" 
                value={nuevo.precio} onChange={(e) => setNuevo({...nuevo, precio: e.target.value})}
              />
            </div>
            <div className="col-md-3">
              <select className="form-select" value={nuevo.categoria} onChange={(e) => setNuevo({...nuevo, categoria: e.target.value})}>
                <option value="">Categoría...</option>
                <option value="Gaseosas">Gaseosas</option>
                <option value="Cervezas">Cervezas</option>
                <option value="Vinos">Vinos</option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success w-100" type="submit">Agregar</button>
            </div>
          </form>
        </div>
      </div>

      {/* Tabla de Productos */}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover bg-white">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.precio} Bs</td>
                <td><span className="badge bg-info text-dark">{p.categoria}</span></td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => eliminarProducto(p.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Productos;