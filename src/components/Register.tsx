import { useState } from "react";
import { AuthService } from "../shared/services/AuthService";


export function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        AuthService.register(name,email,password);
        setPassword('');
        setEmail('');
        setName('');
    }


    return(<>
        <section className="inputArea">
            <label>Name:</label><br />
                <input type="text" value={name}  onChange={(e) => setName(e.target.value)} placeholder="enter your name..." />

                <br />  
                                         
            <label>Email:</label><br />
                <input type="text"  value={email}  onChange={(e) => setEmail(e.target.value)}  placeholder="enter your email..."  />

                <br />

            <label>Password:</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password..." />
        </section>

        <button onClick={handleRegister}>Register</button>
    </>)

}