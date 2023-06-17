import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12">
                    <h1>Welcome to this React Application</h1>
                    <p><Link to="/login" className="btn btn-success">Login</Link> </p>
					<p><Link to="/register" className="btn btn-success">Register</Link> </p>
                </div>
            </div>
        </div>
    </div>
	);
};
