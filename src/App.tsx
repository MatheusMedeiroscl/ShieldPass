import { AppRoutes } from "./routes";
import { AuthProvider } from "./shared/context/AuthProvider";


export function App(){
    return(
        <AuthProvider>
            <AppRoutes/>
        </AuthProvider>
    )
}