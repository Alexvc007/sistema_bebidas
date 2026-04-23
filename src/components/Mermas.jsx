const Mermas = ({ productos, setProductos, volver }) => {
  const registrarMerma = (id) => {
    const nuevos = productos.map(p => p.id === id ? { ...p, stock: Math.max(0, p.stock - 1) } : p);
    setProductos(nuevos);
    alert("Merma registrada");
  };

  return (
    <div className="container mt-4 text-center">
      <h2>📉 Gestión de Mermas</h2>
      <p className="text-muted">Registra productos vencidos o dañados para darlos de baja.</p>
      <div className="list-group">
        {productos.map(p => (
          <div key={p.id} className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2 rounded border-0">
            {p.nombre} (Stock: {p.stock})
            <button className="btn btn-outline-danger btn-sm" onClick={() => registrarMerma(p.id)}>
              <i className="bi bi-dash-circle"></i> Marcar 1 unidad como Merma
            </button>
          </div>
        ))}
      </div>
      <button className="btn btn-secondary mt-4" onClick={volver}>Volver</button>
    </div>
  );
};
export default Mermas;