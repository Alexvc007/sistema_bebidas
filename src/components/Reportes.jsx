const Reportes = ({ ventas, volver }) => {

  const total = ventas.reduce((acc,v)=>acc+v.total,0);

  return (
    <div className="container-fluid px-4 py-4">
      <h3>Reportes</h3>

      <div className="row g-4 mt-3">
        <div className="col-md-6">
          <div className="card bg-primary text-white text-center shadow">
            <div className="card-body">
              <h5>Total Ventas</h5>
              <h1>{ventas.length}</h1>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card bg-success text-white text-center shadow">
            <div className="card-body">
              <h5>Total Recaudado</h5>
              <h1>{total} Bs</h1>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-secondary mt-4" onClick={volver}>Volver</button>
    </div>
  );
};

export default Reportes;