import { getAdds }from "./addListService.js";
import { buildAddView, buildAddListSpinnerView, buildNotFoundAddsView} from "./addListView.js";

import { pubSub } from "../utils/pubSub.js";
export class AddListController {

    constructor(addListElement){
        this.addListElement = addListElement;
    }
    async showAdds(addListElement) {
        let adds 
        const spinnerTemplate = buildAddListSpinnerView();
        
        this.addListElement.innerHTML = spinnerTemplate
        
        try {
         
        adds = await getAdds() 
            
        if (adds.length === 0){
            this.addListElement.innerHTML = buildNotFoundAddsView();
        }

        for (const add of adds) {
        
            const addTemplate = buildAddView(add)
            const addArticleElement = document.createElement('article');
            
            addArticleElement.innerHTML = addTemplate;
            
            this.addListElement.appendChild(addArticleElement);  
        };   
        } catch (error) {
            // alert("Error obteniendo tweets")
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, "Error obteniendo anuncios")
 
        } finally {
            const loader = this.addListElement.querySelector(".loader");
            loader.remove()        
        }}    
}
    