import React from 'react';

const Dashboard = ({ setVistaActual, onLogout }) => {
  const modulos = [
    { id: 'RF-003', nombre: 'Trabajadores', slug: 'trabajadores', icon: 'bi-people-fill', color: 'bg-primary' },
    { id: 'RF-004', nombre: 'Productos', slug: 'productos', icon: 'bi-bottle-fill', color: 'bg-success' },
    { id: 'RF-005', nombre: 'Inventario', slug: 'inventario', icon: 'bi-box-seam-fill', color: 'bg-warning' },
    { id: 'RF-006', nombre: 'Ventas', slug: 'ventas', icon: 'bi-cart-fill', color: 'bg-info' },
    { id: 'RF-007', nombre: 'Mermas', slug: 'mermas', icon: 'bi-trash3-fill', color: 'bg-danger' },
    { id: 'RF-008', nombre: 'Reportes', slug: 'reportes', icon: 'bi-file-earmark-bar-graph-fill', color: 'bg-dark' },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar Principal */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-droplet-fill me-2 text-info"></i>
            SISTEMA BEBIDAS
          </a>
          <div className="d-flex align-items-center">
            <span className="text-light me-3 d-none d-md-inline">Bienvenido, <strong>Admin</strong></span>
            <button className="btn btn-danger btn-sm shadow-sm" onClick={onLogout}>
              <i className="bi bi-box-arrow-right me-1"></i> Salir
            </button>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        {/* Encabezado y RF-002 (Gráficos/Resumen) */}
        <div className="row mb-4">
          <div className="col">
            <h2 className="fw-bold text-secondary">Panel de Administración</h2>
            <p className="text-muted">Resumen general del inventario y ventas.</p>
          </div>
        </div>

        {/* Tarjetas de Estadísticas (Dashboard Realista) */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-body d-flex align-items-center p-4">
                <div className="flex-shrink-0 bg-success-subtle p-3 rounded-3">
                  <i className="bi bi-currency-dollar fs-2 text-success"></i>
                </div>
                <div className="ms-4">
                  <h6 className="mb-1 text-muted">Ventas Hoy</h6>
                  <h3 className="mb-0 fw-bold">1,450.50 Bs</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-body d-flex align-items-center p-4">
                <div className="flex-shrink-0 bg-warning-subtle p-3 rounded-3">
                  <i className="bi bi-exclamation-triangle fs-2 text-warning"></i>
                </div>
                <div className="ms-4">
                  <h6 className="mb-1 text-muted">Stock Crítico</h6>
                  <h3 className="mb-0 fw-bold">12 Productos</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-body d-flex align-items-center p-4">
                <div className="flex-shrink-0 bg-primary-subtle p-3 rounded-3">
                  <i className="bi bi-person-badge fs-2 text-primary"></i>
                </div>
                <div className="ms-4">
                  <h6 className="mb-1 text-muted">Actividad</h6>
                  <h3 className="mb-0 fw-bold">4 Empleados</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rejilla de Módulos Operativos */}
        <h5 className="mb-4 fw-bold">Módulos del Sistema</h5>
        <div className="row g-4">
          {modulos.map((mod) => (
            <div key={mod.id} className="col-6 col-md-4 col-lg-3">
              <div 
                className="card h-100 shadow-sm border-0 text-center p-3 module-card rounded-4"
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                onClick={() => setVistaActual(mod.slug)}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="card-body">
                  <div className={`mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center ${mod.color} text-white shadow`} style={{ width: '60px', height: '60px' }}>
                    <i className={`bi ${mod.icon} fs-3`}></i>
                  </div>
                  <h6 className="fw-bold mb-1 text-dark">{mod.nombre}</h6>
                  <div className="badge bg-light text-muted border">{mod.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer simple */}
      <footer className="text-center py-4 text-muted border-top bg-white mt-5">
        <small>&copy; 2026 Sistema Bebidas - Materia Diseño Web</small>
      </footer>
    </div>
  );
};

export default Dashboard;