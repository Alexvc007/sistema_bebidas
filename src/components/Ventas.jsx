import { useState } from 'react';

const Ventas = ({ productos, setProductos, ventasRealizadas, setVentasRealizadas, volver }) => {
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

    // 🔹 Guardar venta correctamente
    setVentasRealizadas([
      ...ventasRealizadas,
      {
        id: Date.now(),
        total: carrito.reduce((acc, i) => acc + i.precio, 0),
        items: carrito
      }
    ]);

    setCarrito([]);
    alert("Venta realizada");
  };

  const total = carrito.reduce((acc, i) => acc + i.precio, 0);

  return (
    <div className="container-fluid px-4 py-4">
      <div className="row">
        
        {/* 🔹 LISTA DE PRODUCTOS */}
        <div className="col-md-8">
          <h4>Productos</h4>

          <div className="row g-3">
            {productos.map(p => (
              <div className="col-md-4" key={p.id}>
                <div className="card shadow-sm border-0">
                  <div className="card-body text-center">
                    
                    <h6>{p.nombre}</h6>

                    <span className="badge bg-success">
                      {p.precio} Bs
                    </span>

                    <div className="small text-muted">
                      Stock: {p.stock}
                    </div>

                    <button 
                      className="btn btn-outline-primary btn-sm w-100 mt-2"
                      onClick={() => agregar(p)}
                      disabled={p.stock <= 0}
                    >
                      Añadir
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 CARRITO */}
        <div className="col-md-4">
          <div className="card shadow border-0 sticky-top" style={{ top: '20px' }}>
            <div className="card-body">
              
              <h4>Carrito</h4>

              <ul className="list-group mb-3">
                {carrito.map((i, idx) => (
                  <li key={idx} className="list-group-item d-flex justify-content-between">
                    {i.nombre} 
                    <span>{i.precio} Bs</span>
                  </li>
                ))}
              </ul>

              <h5>Total: {total} Bs</h5>

              <button 
                className="btn btn-success w-100 mb-2"
                onClick={finalizar}
                disabled={carrito.length === 0}
              >
                Finalizar
              </button>

              <button 
                className="btn btn-link w-100"
                onClick={volver}
              >
                Volver
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ventas;