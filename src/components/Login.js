import axios from "axios";
import swAlert from '@sweetalert/with-react';
import {useNavigate, Navigate} from "react-router-dom";

function Login () {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(email === "" || password === "") {
            swAlert(
                <div>
                    <h2>Los campos no pueden estar vacíos.</h2>
                    <p>Texto texto texto texto 123</p>
                </div>                
            )
            return;
        }

        if(email !== "" && !regexEmail.test(email)) {
            swAlert(
                <div>
                    <h2>Debes escribir una dirección de correo válida.</h2>
                </div>                
            )
            return;
        }

        if(email !== "challenge@alkemy.org" || password !== "react") {
            swAlert(<h2>Credenciales inválidas.</h2>)
            return;
        }

        axios
            .post("http://challenge-react.alkemy.org", {email, password})
            .then(res => {
                swAlert(<h2>Perfecto, ingresaste correctamente.</h2>)
                // console.log(res.data);
                const tokenRecibido = res.data.token;
                sessionStorage.setItem("token", tokenRecibido)
                navigate("/listado");
            })
            
    }

    let token = sessionStorage.getItem("token");
    
    return (
        <>
            {token && <Navigate to="/listado" />}
            <h2>Formulario de Login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo Electrónico:</span><br/>
                    <input type="text" name="email" />    
                </label>
                
                <br/>
                <label>
                    <span>Contraseña:</span><br/>
                    <input type="password" name="password" />
                </label>
                
                <br/>
                <button className="btn btn-success mt-2" type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login