import { pubSub } from "../utils/pubSub.js";
import {buildAddView} from "../addList/addListView.js";
import { getAdd, deleteAdd} from "../addList/addListService.js"
import { signupService } from "../signup/signupService.js";
import { decodeToken } from "../utils/decodeToken.js";
 


export class AddDetailController {
  constructor(addDetailElement) {
    this.addDetailElement = addDetailElement;
    this.add = null;
  }

  async showAdd(addId) {
    if (!addId) {
      pubSub.publish(
        pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
        "Id del anuncio no válida"
      );

      return;
    }

    try {
      this.add = await getAdd(addId);
      const addTemplate = buildAddView(this.add);

      this.addDetailElement.innerHTML = addTemplate;
      this.handleDeleteButton();
    
    } catch (error) {
      pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
    
    }
  }

  handleDeleteButton() {
    const loggedUserToken = signupService.getLoggedUser();

    if (loggedUserToken) {
        const userInfo = decodeToken(loggedUserToken);
        const isOwner = this.isAddOwner(userInfo.userId)

        console.log(isOwner)

        if (isOwner) {
            this.drawDeleteButton()
        }
    }
  }
  isAddOwner(userId) {
      return userId === this.add.userId
      
  }
  drawDeleteButton() {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Borrar Tweet";

    this.addDetailElement.appendChild(buttonElement);

    this.addDetailElement.addEventListener("click", () => {
      this.deleteAdd();
    });
  }

  async deleteAdd() {
    const shouldDelete = window.confirm("Estás seguro de borrar el anuncio?");

    if (shouldDelete) {
       try {
           console.log("borrar")
        await deleteAdd(this.add.id);
        window.location.href = "/addList.html";
      } catch (error) {
        pubSub.publish(
            pubSub.TOPICS.SHOW_ERROR_NOTIFICATION,
            "No se ha podido borrar el anuncio"
          );
          console.log(error)
        }
        }
    }
}