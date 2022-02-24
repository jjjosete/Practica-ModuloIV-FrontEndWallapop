import {  AddListController } from "./addListController.js";
import { NotificationController} from "../shared/notification/NotificationController.js"


document.addEventListener('DOMContentLoaded', async () =>{
     const notificationElement = document.querySelector(".notification");

     const notificatioController = new NotificationController(notificationElement);
    

    const addListElement = document.querySelector(".add-list");

    const addListController = new AddListController(addListElement)
    await addListController.showAdds();
})