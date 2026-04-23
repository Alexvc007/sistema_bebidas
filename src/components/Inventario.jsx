const Inventario = ({ productos, volver }) => {
  return (
    <div className="container-fluid px-4 py-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">
          <i className="bi bi-box-seam me-2"></i>
          Control de Inventario
        </h3>
        <button className="btn btn-secondary" onClick={volver}>
          <i className="bi bi-arrow-left"></i> Volver
        </button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {productos.map(p => {
          const porcentaje = (p.stock / 100) * 100;
          const esCritico = p.stock < 10;

          return (
            <div key={p.id} className="col">
              <div className={`card h-100 shadow-sm border-0 ${esCritico ? 'border-start border-danger border-4' : ''}`}>

                <div className="card-body">
                  <h5 className="fw-semibold">{p.nombre}</h5>


                  <p className="mb-2">
                    Stock: <strong>{p.stock}</strong> unidades
                  </p>

                  <div className="progress mb-2" style={{ height: '10px' }}>
                    <div
                      className={`progress-bar ${esCritico ? 'bg-danger' : 'bg-success'}`}
                      style={{ width: `${porcentaje}%` }}
                    ></div>
                  </div>

                  {esCritico ? (
                    <span className="badge bg-danger">
                      Stock crítico
                    </span>
                  ) : (
                    <span className="badge bg-success">
                      Stock normal
                    </span>
                  )}
                </div>

                <div className="card-footer bg-transparent border-0 text-end">
                  <small className="text-muted">
                    Categoría: {p.categoria}
                  </small>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Inventario;