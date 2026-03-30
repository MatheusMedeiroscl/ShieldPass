import { useState } from "react"
import "../style/AuthService.css"
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { useAuth } from "../shared/context/AuthProvider";

export function AuthPage() {
    const [page, setPage] = useState('login');

    return (
    <div className="page">
        <div className="card">
            {page === 'login' && (
                <>
                    <h1>Shild.ID</h1>
                    <Login />
                    <p className="switchAction" onClick={() => {setPage('register')}}>Create account</p>
                </>
            )}
            {page === 'register' && (
                <>
                    <h1>Wlecome to Shild.ID</h1>
                    <Register />
                    <p className="switchAction" onClick={() => {setPage('login')}}>Access account</p>

                </>
            )}
        </div>
    </div>
    )
}