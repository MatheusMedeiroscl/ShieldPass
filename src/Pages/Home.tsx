import { useAuth } from "../shared/context/AuthProvider"




export function Home(){
    const {logout} = useAuth();
    return(<>

        <button onClick={logout}>Logout</button>
    </>)
}