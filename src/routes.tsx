import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { AuthPage } from "./Pages/AuthPage";
import { useAuth } from "./shared/context/AuthProvider";



export function AppRoutes() {
       const { isAuthenticated } = useAuth();

       return(
        <BrowserRouter>
        {isAuthenticated && (
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="*"  element={<Home/>}/>
            </Routes>
        )}
        {!isAuthenticated && (
            <Routes>
                <Route path="*"  element={<AuthPage/>}/>
            </Routes>
        )}

    </BrowserRouter>
       )
}