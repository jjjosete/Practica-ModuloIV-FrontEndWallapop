import { AddDetailController } from "./AddDetailController.js";
import { NotificationController } from "../shared/notification/NotificationController.js";

document.addEventListener("DOMContentLoaded", () => {
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