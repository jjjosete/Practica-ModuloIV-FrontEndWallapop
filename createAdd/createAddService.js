class CreateAddService {

    //Se ocupa de gestionar la petición del login,
    // que siempre va a ser creación de usuario
    
        constructor() {}
    // Creación de usuario
        async createAdd(title,content,precio,estado,image, token){
        
            const body = {
              title,
              content,
              precio,
              estado,
              image,
              token,
            };
    
            const response = await fetch("http://localhost:8000/api/adds", {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
            });
            
    
            const data = await response.json();
    
            if (!response.ok) {
              throw new Error(data.message);
            }
          }
        
          getLoggedUser() {
            return localStorage.getItem("jwt") || null;
          }
        }
    
    export const createAddService = new CreateAddService()