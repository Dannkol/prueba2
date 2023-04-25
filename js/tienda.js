//script funcionalidad de carrito y tienda
import db  from "./db.js";

const datos = db.db_tienda

localStorage.setItem("carrito", [])

document.addEventListener("DOMContentLoaded", (e) =>{
    const productos =  document.querySelector('.products')
    
    datos.forEach((producto) => {
        productos.insertAdjacentHTML("beforeend", `
        <div class="carts">
            <img src="${producto.img}" alt="papitas" srcset="">
            <p>${producto.nombre}<h6>${producto.precio}</h6></p>
            <a id="carrito" data-carrito='${JSON.stringify(producto)}'>
                Añadir al carrrito
            </a>
        </div>
    
        
        `)
    })
    const carrito = document.querySelectorAll('#carrito')
    carrito.forEach((carrito) => {
        carrito.addEventListener('click', (e) => {
            //falta agregar y el fron
            localStorage.setItem('carrito', e.target.dataset.carrito)
        })
    })
})