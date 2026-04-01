import { useState } from "react";
import { AuthService } from "../shared/services/AuthService";
import { useAuth } from "../shared/context/AuthProvider";


export function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login}= useAuth();

    const handleRegister = async () => {
        try{
           await AuthService.register(name,email,password);
          const token = await  AuthService.login(email, password);
          login(token);
        } catch (error) {
            alert("Erro ao criar conta");
        }
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