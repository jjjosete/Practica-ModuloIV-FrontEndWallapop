import {  AddListController } from "./addListController.js";
import { NotificationController} from "../shared/notification/NotificationController.js"
import {NavbarListController} from "../utils/navbarController.js"

document.addEventListener('DOMContentLoaded', async () =>{
    const navbarElement = document.querySelector(".navbar")
    const navbarController = new NavbarListController(navbarElement)
    navbarController.showNavbar();

     const notificationElement = document.querySelector(".notification");

     const notificationController = new NotificationController(notificationElement);
    

    const addListElement = document.querySelector(".add-list");

    const addListController = new AddListController(addListElement)
    await addListController.showAdds();
})