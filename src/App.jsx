import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Productos from './components/Productos';
import Inventario from './components/Inventario';
import Ventas from './components/Ventas';
import Mermas from './components/Mermas';
import Trabajadores from './components/Trabajadores';
import Reportes from './components/Reportes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [vistaActual, setVistaActual] = useState('inicio');

  // Base de datos global
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Coca Cola 2L', precio: 12, stock: 20, categoria: 'Gaseosas' },
    { id: 2, nombre: 'Paceña Lata', precio: 10, stock: 50, categoria: 'Cervezas' },
    { id: 3, nombre: 'Vino Aranjuez', precio: 45, stock: 10, categoria: 'Vinos' }
  ]);

  const [trabajadores, setTrabajadores] = useState([
    { id: 1, nombre: 'Juan Pérez', cargo: 'Administrador' },
    { id: 2, nombre: 'Ana García', cargo: 'Vendedor' }
  ]);

  const [ventasRealizadas, setVentasRealizadas] = useState([]);

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <>
      {vistaActual === 'inicio' && (
        <Dashboard setVistaActual={setVistaActual} onLogout={() => setIsLoggedIn(false)} />
      )}
      
      {vistaActual === 'productos' && (
        <Productos productos={productos} setProductos={setProductos} volver={() => setVistaActual('inicio')} />
      )}

      {vistaActual === 'inventario' && (
        <Inventario productos={productos} volver={() => setVistaActual('inicio')} />
      )}

      {vistaActual === 'ventas' && (
        <Ventas 
          productos={productos} 
          setProductos={setProductos} 
          setVentasRealizadas={setVentasRealizadas}
          ventasRealizadas={ventasRealizadas}
          volver={() => setVistaActual('inicio')} 
        />
      )}

      {vistaActual === 'mermas' && (
        <Mermas productos={productos} setProductos={setProductos} volver={() => setVistaActual('inicio')} />
      )}

      {vistaActual === 'trabajadores' && (
        <Trabajadores trabajadores={trabajadores} setTrabajadores={setTrabajadores} volver={() => setVistaActual('inicio')} />
      )}

      {vistaActual === 'reportes' && (
        <Reportes ventas={ventasRealizadas} productos={productos} volver={() => setVistaActual('inicio')} />
      )}
    </>
  );
}

export default App;