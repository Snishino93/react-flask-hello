import React, {useState}  from "react";
import { useNavigate } from "react-router-dom";

export const Register=()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return(
        <div>
          <div className="container h-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Create Your Account</p>
                            </div>
 
                            <div className="form-outline mb-4">
                                <label className="form-label" for="formUsername">Usuario</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="formUsername" className="form-control form-control-lg" placeholder="Escribe un nombre de usuario" />
                            </div>
              
                            <div className="form-outline mb-3">
                                <label className="form-label" for="formPassword">Contraseña</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="formPassword" className="form-control form-control-lg" placeholder="Escribe una contraseña" />
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
                                <button type="button" className="btn btn-primary btn-lg" /*onClick={() => registerUser()}*/ >Regístrate</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0"><a href="/login" className="link-danger">Inicia sesión</a></p>
                            </div>
        
                        </form>
                    </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}