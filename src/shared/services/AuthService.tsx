const URL = 'http://localhost:8080/auth'


export const AuthService = {
    async login (email: string, password: string){
        const response = await fetch(`${URL}/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

    if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
    }

    const token = await response.json();
    return token;
    },

    async register(name: string, email: string, password:string){
        const response = await fetch(`${URL}/register`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });


        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
            alert("Fail in register")
        }

        alert("Success Register")

    }
}