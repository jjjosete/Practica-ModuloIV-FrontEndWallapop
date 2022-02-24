/**
 * Creacion de una clase Sign up controller
 * -> Devuelve el formulario
 * 
 * 
 */
 import { pubSub } from "../utils/pubSub.js";
 import { createAddService } from "./createAddService.js"
 

 export class CreateAddController {
   constructor(formElement) {
     this.formElement = formElement;
 
     this.subscribeToEvents();
     
   }
 
   subscribeToEvents() {
    //  this.onAnyInputChanged();
     this.onSubmitForm();
   }
 
 
   onSubmitForm() {
     this.formElement.addEventListener("submit", (event) => {
       event.preventDefault();
       const formData = new FormData(this.formElement);

       const title = formData.get("addTitle");
       const content = formData.get("addContent");
       const precio = formData.get("price");
       const estado = formData.get("addEstado");
       const foto= formData.get("foto");
       const token = localStorage.getItem("jwt");
 
 
       console.log(title,content,precio,estado,foto, token);
     
      const isUserLogged= createAddService.getLoggedUser()

      console.log(isUserLogged)

      if (!isUserLogged){
        pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, "Necesitas estar logeado para publicar un anuncio");
      }else{
        try {
         
        createAddService.createAdd(title,content,precio,estado,foto, token);
        window.location.href ='/addList.html';
        } catch (error) {
          pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
        }}
     });
   }
  }