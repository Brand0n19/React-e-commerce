import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
        const navigate = useNavigate();
        const [registrationData, setRegistrationData] = useState({
          name: '',
          email: '',
          password: '',
          repeatPassword: '',
        });
      
        const [registrationError, setRegistrationError] = useState(false);
        const [alertProps, setAlertProps] = useState({ variant: '', title: '' });
      
        const handleRegistrationChange = (e) => {
          setRegistrationData({
            ...registrationData,
            [e.target.id]: e.target.value,
          });
        };
      
        const showAlert = (variant, title) => {
          setAlertProps({ variant, title });
        };
      
    
    
    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
            
        if (!registrationData.name || !registrationData.email || !registrationData.password) {
            setRegistrationError(true);
            alert( 'Completa todos los campos obligatorios');
            return;
        }

        if (registrationData.password !== registrationData.repeatPassword) {
        setRegistrationError(true);
            alert( 'Las contraseñas no coinciden');
        return;
        }
       try{ const response = await fetch('http://localhost:5000/usuario', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            name: registrationData.name,
            username: registrationData.username,
            email: registrationData.email,
            password: registrationData.password,
            }),
        });

    if (response.ok) {
        setRegistrationError(false);
        alert('Registro exitoso');
        navigate(`/login`)
        
      } else {
        console.error('Error al registrar usuario');
        setRegistrationError(true);
        alert('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setRegistrationError(true);
      alert('Error al registrar usuario');
    }

    };

  return (
    <div className="tab-content">
        <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
        >
            <form onSubmit={handleRegistrationSubmit}>
            <p className="text-center fw-bold p-font p-sizing">¡Es genial que te unas!</p>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="name">
                Nombre
                </label>
                <input
                type="text"
                id="name"
                className="form-control"
                onChange={handleRegistrationChange}
                />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                Correo
                </label>
                <input
                type="email"
                id="email"
                className="form-control"
                onChange={handleRegistrationChange}
                />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                Contraseña
                </label>
                <input
                type="password"
                id="password"
                className="form-control"
                onChange={handleRegistrationChange}
                />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="repeatPassword">
                Repita la contraseña
                </label>
                <input
                type="password"
                id="repeatPassword"
                className="form-control"
                onChange={handleRegistrationChange}
                />
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block mb-4">
                
                Registrarse
                </button>
            </div>
            </form>
        </div>
    </div>

  );
};

export default Register;
