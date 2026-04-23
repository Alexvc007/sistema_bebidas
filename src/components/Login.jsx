import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (user === 'admin' && pass === '123') onLogin();
    else alert("Error");
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow border-0" style={{width:'350px'}}>
        <div className="card-header bg-primary text-white text-center">
          <h4>Sistema Bebidas</h4>
        </div>
        <div className="card-body">
          <form onSubmit={submit}>
            <input className="form-control mb-3" placeholder="Usuario"
              onChange={e=>setUser(e.target.value)}/>
            <input type="password" className="form-control mb-3" placeholder="Password"
              onChange={e=>setPass(e.target.value)}/>
            <button className="btn btn-primary w-100">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;