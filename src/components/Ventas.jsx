import { useState } from 'react';

const Ventas = ({ productos, setProductos, volver }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    if (producto.stock <= 0) return alert("Sin stock");
    setCarrito([...carrito, producto]);
  };

  const finalizarVenta = () => {
    // Restar stock en la "DB" global
    const nuevosProductos = productos.map(p => {
      const itemsEnCarrito = carrito.filter(item => item.id === p.id).length;
      return { ...p, stock: p.stock - itemsEnCarrito };
    });

    setProductos(nuevosProductos);
    alert("Venta realizada con éxito 🎉");
    setCarrito([]);
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h3>Seleccionar Bebidas</h3>
          <div className="row g-3">
            {productos.map(p => (
              <div className="col-md-4" key={p.id}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center">
                    <h6>{p.nombre}</h6>
                    <p className="text-primary fw-bold">{p.precio} Bs</p>
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => agregarAlCarrito(p)}
                      disabled={p.stock <= 0}
                    >
                      {p.stock > 0 ? 'Añadir' : 'Agotado'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card shadow border-0 p-3 bg-light">
            <h4>🛒 Carrito</h4>
            <ul className="list-group list-group-flush mb-3">
              {carrito.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between bg-transparent">
                  {item.nombre} <span>{item.precio} Bs</span>
                </li>
              ))}
            </ul>
            <h4 className="text-end">Total: {total} Bs</h4>
            <button className="btn btn-success w-100 mt-3" onClick={finalizarVenta} disabled={carrito.length === 0}>
              Registrar Venta
            </button>
            <button className="btn btn-link text-muted mt-2" onClick={volver}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ventas;