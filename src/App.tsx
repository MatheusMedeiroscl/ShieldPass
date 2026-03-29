import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { LoginPage } from "./Pages/Login";
import { RegisterPage } from "./Pages/Register";


export function App(){

    const isAuthenticated = false;


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
                <Route path="*"  element={<LoginPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
        )}

    </BrowserRouter>
    )
}