import { useState } from "react"
import { AuthService } from "../shared/services/AuthService";
import "../style/Login.css"
import { Link } from "react-router";
export function RegisterPage(){

    const [email, SetEmail] = useState('');
    const [password, setPassword]= useState('');
    const [name, setName]= useState('');

    const handleRegister = () => {
        AuthService.register(name, email, password);
        setPassword('')
        SetEmail('')
        setName('')
    }
    return(<div className="page">

        <div className="card">
            <h1>Welcome to Shild.ID</h1>

            <section className="inputArea">
                <label>Name:</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="enter your name..."/>

                <br />
                <label>Email:</label><br />
                <input type="text" value={email} onChange={(e) => SetEmail(e.target.value)}  placeholder="enter your email..."/>

                <br />

                <label>Password:</label><br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password..."/>     
            </section>

                <button onClick={handleRegister}>Register</button>  

                <Link to="/login">já possuo conta</Link>
        </div>
    </div>)
}