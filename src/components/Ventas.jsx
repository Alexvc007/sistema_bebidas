import { useState } from 'react';

const Ventas = ({ productos, setProductos, volver }) => {
  const [carrito, setCarrito] = useState([]);

  const agregar = (p) => {
    if (p.stock <= 0) return;
    setCarrito([...carrito, p]);
  };

  const finalizar = () => {
    const nuevos = productos.map(p => {
      const cant = carrito.filter(i => i.id === p.id).length;
      return { ...p, stock: p.stock - cant };
    });

    setProductos(nuevos);
    setCarrito([]);
    alert("Venta realizada");
  };

  const total = carrito.reduce((acc, i) => acc + i.precio, 0);

  return (
    <div className="container-fluid px-4 py-4">
      <div className="row">
        <div className="col-md-8">
          <h4>Productos</h4>
          <div className="row g-3">
            {productos.map(p => (
              <div className="col-md-4" key={p.id}>
                <div className="card shadow-sm border-0">
                  <div className="card-body text-center">
                    <h6>{p.nombre}</h6>
                    <span className="badge bg-success">{p.precio} Bs</span>
                    <button className="btn btn-outline-primary btn-sm w-100 mt-2"
                      onClick={() => agregar(p)}>
                      Añadir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow border-0 sticky-top" style={{top:'20px'}}>
            <div className="card-body">
              <h4>Carrito</h4>
              <ul className="list-group mb-3">
                {carrito.map((i, idx) => (
                  <li key={idx} className="list-group-item d-flex justify-content-between">
                    {i.nombre} <span>{i.precio}</span>
                  </li>
                ))}
              </ul>
              <h5>Total: {total} Bs</h5>
              <button className="btn btn-success w-100" onClick={finalizar}>
                Finalizar
              </button>
              <button className="btn btn-link" onClick={volver}>Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ventas;