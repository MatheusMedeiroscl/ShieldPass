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


    const data = await response.json();
    return data.token;
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

    },
    
    async getme (newToken: string){
  
        const response = await fetch(`${URL}/me`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newToken}` // token vai no header
            }
        });

    if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();
    return user;
    }

}