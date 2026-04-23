const Reportes = ({ ventas, productos, volver }) => {
  const totalRecaudado = ventas.reduce((acc, v) => acc + v.total, 0);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <h2>📋 Reportes del Sistema</h2>
        <button className="btn btn-secondary" onClick={volver}>Volver</button>
      </div>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0 bg-primary text-white text-center">
            <h3>Total Ventas</h3>
            <h1>{ventas.length}</h1>
            <p>Ventas registradas con éxito</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0 bg-success text-white text-center">
            <h3>Recaudación Total</h3>
            <h1>{totalRecaudado} Bs</h1>
            <p>Dinero total en caja simulada</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reportes;