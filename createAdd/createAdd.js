
import {NotificationController} from "../shared/notification/NotificationController.js"
import {CreateAddController} from "./createAddController.js"

/**
 * Controlador de signup.html 
 */

// Escucha un evento
document.addEventListener('DOMContentLoaded', () => {
    // selecciona el formulario del html
    const formElement = document.querySelector('form');
    const notificationElement = document.querySelector(".notification");
    // devuelve el formulario a SignupController como parámetro para crear
    // una instancia de él.
    //Lo mismo hacemos con el notificatio controller
    const notificationController = new NotificationController(notificationElement);
    const createAddController = new CreateAddController(formElement);

})