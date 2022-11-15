import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return(
        <div className="container">
            <div className="squares">
                <h1>Login</h1>
                <input className="username" placeholder="Username" type={"text"}/>
                <input className="password" placeholder="Password" type={"password"}/>
                <button className="Login">
                    <Link to="/">Log in</Link>
                </button>
                <Link to="/signUp">Sign Up</Link>
            </div>
        </div>
    )
}

export default Login;