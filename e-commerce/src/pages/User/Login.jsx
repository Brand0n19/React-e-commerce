import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function LogIn(){
  const navigate = useNavigate();
    const [alertProps, setAlertProps] = useState({ variant: '', title: '' });

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
      });
    
      const [loginError, setLoginError] = useState(false);
    
      const handleLoginChange = (e) => {
        setLoginData({
          ...loginData,
          [e.target.id]: e.target.value,
        });
      };
    
      const handleLoginSubmit = async (e) => {
        e.preventDefault();


    try {

        const response = await fetch(`http://localhost:5000/usuario?email=${loginData.email}&password=${loginData.password}`)

        if (response.ok) {
            const userData = await response.json();
    

            if (userData.length > 0) {
              setLoginError(false);
              setAlertProps({ variant: 'success', title: 'Registro exitoso' });
              alert("exito")
              navigate(`/`)
            } else {
              setLoginError(true);
              setAlertProps({ variant: 'danger', title: 'Creadenciales incorrectos' });
              alert("credenciales incorrectos")
            }
          } else {
            console.error('Error al verificar credenciales');
            setLoginError(true);
          }
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          setLoginError(true);
        }
    };

    return(

        <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form onSubmit={handleLoginSubmit}>
          <p className="text-center fw-bold p-font p-sizing">¡Bienvenido de nuevo!</p>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="loginName">
              Correo
            </label>
            <input
              type="email"
              id="email"
              className={`form-control ${loginError && !loginData.email ? 'is-invalid' : ''}`}
              onChange={handleLoginChange}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="loginPassword">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className={`form-control ${loginError && !loginData.password ? 'is-invalid' : ''}`}
              onChange={handleLoginChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Iniciar sesión
          </button>

          <div className="text-center">
            <p>
              ¿Aún no eres miembro? <a>
                <Link to={"/register"}>
                Regístrate
                </Link>
                </a>
            </p>
          </div>
        </form>
        </div>
        </div>

    )
}

export default LogIn