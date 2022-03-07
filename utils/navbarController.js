import { signupService } from "../signup/signupService.js";
import { loggedNavbarView, unloggedNavbarView } from "./navbarView.js";
export class NavbarListController {

    constructor(navbarElement){
        this.navbarElement = navbarElement
    }
    showNavbar(navbarElement) {
        
        let navbarTemplate;

        if(signupService.getLoggedUser()){
        navbarTemplate = loggedNavbarView();
        } else {
        navbarTemplate = unloggedNavbarView()
        }
    
        
        const navbarNav = document.createElement('nav');
        
        navbarNav.innerHTML = navbarTemplate;
        
        this.navbarElement.appendChild(navbarNav);  
        
        }  
        }