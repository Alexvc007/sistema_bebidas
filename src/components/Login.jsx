import { useState } from 'react';

const Login = ({ onLogin }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === 'admin' && pass === '123') {
            onLogin();
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="card shadow-lg" style={{ width: '350px', borderRadius: '15px' }}>
                <div className="card-body p-5">
                    <h2 className="text-center mb-4 text-primary">Bebidas S.A.</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="admin"
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="123"
                                value={pass} // Es buena práctica agregar el value
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 py-2 shadow-sm">
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;