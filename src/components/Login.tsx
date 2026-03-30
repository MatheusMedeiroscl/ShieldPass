import { useState } from "react";
import { AuthService } from "../shared/services/AuthService";
import { useAuth } from "../shared/context/AuthProvider";


export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useAuth(); 

    const handleLogin = async () => {
      try{
        const token = await AuthService.login(email, password);
        login(token);

        setEmail('');
        setPassword('');
      }catch(error){
        alert("email ou senha inválidos")
        console.log(error);
      };
    }


    return(<>
    <section className="inputArea">
        <label>Email:</label><br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email..."/>

            <br />

        <label>Password:</label><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password..." />
    </section>

    <button onClick={handleLogin}>Login</button>
    </>)

}