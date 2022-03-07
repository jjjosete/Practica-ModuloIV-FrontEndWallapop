

export function loggedNavbarView(){
    let loggedNavbarTemplate = `
    
    <ul class="navigation_list">
        <li><a href="./addList.html" id="listElement">Lista de anuncios</a></li>
        <li><a href="./createAdd.html" id="listElement">Crear anuncio</a></li>
        
    </ul>
    `
    return loggedNavbarTemplate
    
}

export function unloggedNavbarView(){

    let unloggedNavbarTemplate= `
    <div>
    <ul class="navigation_list">
        <li><a href="./addList.html" id="listElement">Lista de anuncios</a></li>
        <li><a href="./login.html" id="listElement">Log in</a></li>
        <li><a href="./signup.html" id="listElement">Sign up</a></li>
    </ul>`
    return unloggedNavbarTemplate
}
