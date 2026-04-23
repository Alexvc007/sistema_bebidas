const Inventario = ({ productos, volver }) => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <h2>📦 Control de Inventario</h2>
        <button className="btn btn-secondary" onClick={volver}>Volver</button>
      </div>
      <div className="row">
        {productos.map(p => (
          <div className="col-md-4 mb-3" key={p.id}>
            <div className={`card shadow-sm border-0 ${p.stock < 10 ? 'border-start border-danger border-4' : ''}`}>
              <div className="card-body">
                <h5 className="fw-bold">{p.nombre}</h5>
                <p className="text-muted mb-1">Stock Actual: <strong>{p.stock} unidades</strong></p>
                <div className="progress" style={{height: '10px'}}>
                  <div 
                    className={`progress-bar ${p.stock < 10 ? 'bg-danger' : 'bg-success'}`} 
                    style={{width: `${(p.stock / 100) * 100}%`}}
                  ></div>
                </div>
                {p.stock < 10 && <small className="text-danger fw-bold">¡Reabastecer pronto!</small>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Inventario;