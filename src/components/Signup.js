import { Link } from "react-router-dom"
import "./Signup.css"

function signUp() {
    return(
        <div className="contain">
            <div className="boxs">
                <h1>Sign Up</h1>
                <input placeholder="Username"/>
                <input placeholder="Password"/>
                <input placeholder="Rewrite password"/>
                <button>
                    <Link to="/">Sign Up</Link>
                </button>
            </div>
        </div>
    )
}

export default signUp