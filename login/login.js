import { LoginController } from "./LoginController.js";
import { NotificationController } from "../shared/notification/NotificationController.js";
import {NavbarListController} from "../utils/navbarController.js"
document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.querySelector(".navbar")
  const navbarController = new NavbarListController(navbarElement)
  navbarController.showNavbar();
  const loginFormElement = document.querySelector("form");
  const notificationElement = document.querySelector(".notification");

  const notificationController = new NotificationController(
    notificationElement
  );

  const loginController = new LoginController(loginFormElement);
});