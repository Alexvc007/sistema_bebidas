const Mermas = ({ productos, setProductos, volver }) => {

  const registrar = (id) => {
    const nuevos = productos.map(p =>
      p.id === id ? { ...p, stock: p.stock - 1 } : p
    );
    setProductos(nuevos);
  };

  return (
    <div className="container-fluid px-4 py-4">
      <h3>Mermas</h3>

      <div className="list-group shadow-sm mt-3">
        {productos.map(p => (
          <div key={p.id} className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{p.nombre}</strong>
              <div className="small text-muted">Stock: {p.stock}</div>
            </div>
            <button className="btn btn-outline-danger btn-sm"
              onClick={() => registrar(p.id)}>
              <i className="bi bi-dash-circle"></i>
            </button>
          </div>
        ))}
      </div>

      <button className="btn btn-secondary mt-3" onClick={volver}>Volver</button>
    </div>
  );
};

export default Mermas;