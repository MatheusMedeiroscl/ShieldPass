import { useState } from "react"
import { AuthService } from "../shared/services/AuthService";
import "../style/Login.css"
export function LoginPage(){

    const [email, SetEmail] = useState('');
    const [password, setPassword]= useState('');

    const handleLogin = () => {
        AuthService.login(email, password);
    }
    return(<div className="page">
        <div className="card">
            <h1>Shild.ID</h1>

            <section className="inputArea">
                <label>Email:</label><br />
                <input type="text" value={email} onChange={(e) => SetEmail(e.target.value)}  placeholder="enter your email..."/>

                <br />

                <label>Password:</label><br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password..."/>     
            </section>

                <button onClick={handleLogin}>Login</button>      
        </div>
    </div>)
}