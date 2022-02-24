export function buildAddView(add) {

    
    let addTemplate = `
    <a href="/addDetail.html?id=${add.id}">
    <h1>${add.title}</h1>
    
    <img src="${add.image || "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"}"></img>
    <p> Precio: ${add.precio}€ <p>
    <p> Estado: ${add.estado}<p>
    <p>${add.content}<p>
    </a>
    `;

    return addTemplate
}
export function buildAddListSpinnerView(){
    return `
    <div class="loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
    `
}
export function buildNotFoundAddsView() {
    return `
    <h1> Oooops!!! no hay ningún anuncio!!! :( </h1>`
}