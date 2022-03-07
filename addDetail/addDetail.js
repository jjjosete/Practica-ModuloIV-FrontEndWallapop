import { AddDetailController } from "./AddDetailController.js";
import { NotificationController } from "../shared/notification/NotificationController.js";
import { NavbarListController} from "../utils/navbarController.js"
document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.querySelector(".navbar")
  const navbarController = new NavbarListController(navbarElement)
  navbarController.showNavbar();
  const addDetailElement = document.querySelector(".add-detail");

  const notificationElement = document.querySelector(".notification");

  const notificationController = new NotificationController(
    notificationElement
  );

  const searchParams = new URLSearchParams(window.location.search);

  const addId = searchParams.get("id");
 

  const addDetailController = new AddDetailController(addDetailElement);
  
  addDetailController.showAdd(addId);
});