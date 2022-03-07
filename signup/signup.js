import {SignupController} from "./SignupController.js"
import {NotificationController} from "../shared/notification/NotificationController.js"
import {NavbarListController} from "../utils/navbarController.js"
/**
 * Controlador de signup.html 
 */

// Escucha un evento
document.addEventListener('DOMContentLoaded', () => {
    const navbarElement = document.querySelector(".navbar")
  const navbarController = new NavbarListController(navbarElement)
  navbarController.showNavbar();
    // selecciona el formulario del html
    const formElement = document.querySelector('form');
    const notificationElement = document.querySelector(".notification");
    // devuelve el formulario a SignupController como parámetro para crear
    // una instancia de él.
    //Lo mismo hacemos con el notificatio controller
    const notificationController = new NotificationController(notificationElement);
    const signupController = new SignupController(formElement);

})