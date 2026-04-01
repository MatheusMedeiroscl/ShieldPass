import { useAuth } from "../shared/context/AuthProvider"




export function Home(){
    const {logout, user} = useAuth();
    return(<>

        <button onClick={logout}>{user?.name}</button>
    </>)
}