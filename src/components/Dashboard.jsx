import React from 'react';

const Dashboard = ({ setVistaActual, onLogout }) => {
  const modulos = [
    { id: 'RF-003', nombre: 'Trabajadores', slug: 'trabajadores', icon: 'bi-people-fill', color: 'bg-primary' },
    { id: 'RF-004', nombre: 'Productos', slug: 'productos', icon: 'bi-cup-straw', color: 'bg-success' },
    { id: 'RF-005', nombre: 'Inventario', slug: 'inventario', icon: 'bi-box-seam-fill', color: 'bg-warning' },
    { id: 'RF-006', nombre: 'Ventas', slug: 'ventas', icon: 'bi-cart-fill', color: 'bg-info' },
    { id: 'RF-007', nombre: 'Mermas', slug: 'mermas', icon: 'bi-trash3-fill', color: 'bg-danger' },
    { id: 'RF-008', nombre: 'Reportes', slug: 'reportes', icon: 'bi-file-earmark-bar-graph-fill', color: 'bg-dark' },
  ];

  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand fw-bold">SISTEMA BEBIDAS</span>
        <button className="btn btn-danger btn-sm" onClick={onLogout}>
          <i className="bi bi-box-arrow-right"></i> Salir
        </button>
      </nav>

      <div className="container-fluid px-4 py-4">
        <h3 className="fw-bold">Panel de Administración</h3>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
          {modulos.map((mod) => (
            <div key={mod.id} className="col">
              <div 
                className="card h-100 text-center border-0 shadow-sm"
                style={{ cursor: 'pointer' }}
                onClick={() => setVistaActual(mod.slug)}
              >
                <div className="card-body">
                  <div className={`rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center ${mod.color} text-white`}
                       style={{ width: '70px', height: '70px' }}>
                    <i className={`bi ${mod.icon} fs-3`}></i>
                  </div>
                  <h6 className="fw-semibold">{mod.nombre}</h6>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;