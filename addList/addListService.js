import { signupService} from "../signup/signupService.js"
 export async function getAdds(){
  const url = 'http://localhost:8000/api/adds';
  let adds;
  let response;

    try {  
      response = await fetch(url); 
    } catch (error) {
      throw new Error('No he podido ir a por los anuncios')  
    }
    
    if (!response.ok){
      throw new Error('Anuncios no encontrados')
    }
    try {
      adds = await response.json() ;
    } catch (error) {
      throw new Error('No he podido transformar la respuesta a json: ', error)  
    }

    return adds;
  }

  export async function getAdd(addId){
    const url = `http://localhost:8000/api/adds/${addId}`;
    let add;
    let response;

      try {  
        response = await fetch(url); 
      } catch (error) {
        throw new Error('No he podido ir a por los anuncios')  
      }
      
      if (!response.ok){
        throw new Error('Anuncios no encontrados')
      }
      try {
        add = await response.json() ;
      } catch (error) {
        throw new Error('No he podido transformar la respuesta a json: ', error)  
      }

      return add;
  }
  export async function deleteAdd(addId) {
    const url = `http://localhost:8000/api/adds/${addId}`;

    let response;
    

    try {
      response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + signupService.getLoggedUser(),
        },
      });
    } catch (error) {
      throw new Error("No he podido borrar el anuncio");
    }

    if (!response.ok) {
      throw new Error("Anuncio no encontrado");
    }
  }
  export function newGetAdds() {
    const url = 'http://localhost:8000/api/adds';

    return new Promise(function(resolve, reject){
      fetch(url)
              .catch((error)=>{
            console.log(error);
          })
          .then((responseHttp) => {
            return responseHttp.json()
          })

          .then((adds) => 
            resolve(adds))
      })
  }
   
