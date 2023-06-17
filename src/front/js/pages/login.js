import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
// import {useHistory} from "react-router";

export const Login =()=>{
    const {store, actions} = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    // const history = useHistory();
    // console.log("This is null", store.token)

    const handleClick = () => {
        actions.login(username, password)
        console.log("Button clicked");//.then(()=> {
        //     history.push("/")
        // })
    };
    const handleSubmit = (e) => {
        e.preventDefault()

        if(username === "" || password === ""){
            setError(true)
            console.log('Error:', error);
            return;
        }

        setError(false)
    }

    return(
        <div>
            <div className="container h-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                {/* {(store.token && store.token != "" && store.token != undefined) ? (
                    "You are logged in with this token" + store.token 
                    ) : (  */}
                            <form 
                                className="formulario"
                                onSubmit={handleSubmit}
                            >   
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Entra a tu cuenta</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" for="formUsername">Usuario</label>    
                                    <input 
                                        type="text"
                                        id="formUsername"
                                        className="form-control form-control-lg"
                                        value={username}
                                        placeholder="Introduce tu Usuario"
                                        onChange={e=> setUsername(e.target.value)}></input>
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label" for="formPassword">Contraseña</label>
                                    <input 
                                        type="password"
                                        id="formPassword"
                                        className="form-control form-control-lg"
                                        value={password}
                                        placeholder="Introduce tu contraseña"
                                        onChange={e=> setPassword(e.target.value)}></input>
                                </div>
                    
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Recuérdame
                                        </label>
                                    </div>
                                <a href="#!" className="text-body">Olvidaste la contraseña?</a>
                                </div>
                    
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleClick} >Iniciar Sesion</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Aún no tienes cuenta? <a href="/register" className="link-danger">Regístrate</a></p>
                                </div>
                                {error && <p>Todos los campos son obligatorios</p>}
                            </form>
                {/* )} */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};