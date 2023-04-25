//database

export default {
  db_servicios: [
    {
      nombre: "Hunter",
      detalles:
        "spacio destinado al descanso y recreacion de nuestros campers y coworkers",
      disponibilidad: "sujeto a horario",
      img: "../images/hunters.png",
    },
    {
      nombre: "Cafeteria hunters",
      detalles: "cafertia",
      disponibilidad: "sujeto a horario",
      img: "../images/Interior-cafeteria-pasteleria-Ofelia-Bakery_1731437050_168755568_1200x675.jpg",
    },
    {
        nombre: "Cafeteria 8vo",
        detalles: "cafertia premiumt",
        disponibilidad: "sujeto a horario",
        img: "../images/cafeteria 8vo.jpg",
    },
    {
        nombre: "Baños",
        detalles: "Baños vip",
        disponibilidad: "sujeto a horario",
        img: "../images/aseo.png",
    },
  ],

  db_tienda : [
    {
        nombre: "papas",
        img:"../images/papasmargarita.jpg",
        precio:"2000$"
    },
    {
        nombre: "pastel",
        img:"../images/Pastel-de-Pollo7.jpg",
        precio:"2300$"
    },
    {
        nombre: "papas",
        img:"../images/Color-del-cafe-filtrado-y-su-parecido-con-el-color-de-un-vino-tinto.-scaled.jpg",
        precio:"800$"
    },
  ],

  servicios() {
    const dialog = document.querySelector(".modal");
    const close_modal = document.querySelector(".close");
    const tbody = document.querySelector("tbody");
    const servicio = document.querySelector("#contenedor-tarjetas");

    document.addEventListener("DOMContentLoaded", () => {
      this.db_servicios.forEach((db) => {
        servicio.insertAdjacentHTML(
          "beforeend",
          `
        
                <div class="tarjetas">
                    <p>${db.nombre}</p>
                    <img src="${db.img}" alt="">
                    <button id="dialog" data-modal="${db.nombre}">ver datos</button>
                </div>
            
            `
        );
      });

      const dialog_show = document.querySelectorAll("#dialog");
      dialog_show.forEach((dialog_modal) => {
        dialog_modal.addEventListener("click", (e) => {
          dialog.showModal();
          tbody.innerHTML = "";
          this.db_servicios.forEach((servicio) => {
            servicio.nombre === e.target.dataset.modal
              ? tbody.insertAdjacentHTML(
                  "beforeend",
                  `
              <tr>
                  <td>
                      ${servicio.nombre}
                  </td>
                  <td>
                      ${servicio.detalles}
                  </td>
                  <td>
                      ${servicio.disponibilidad}
                  </td>
              </tr>
          
          `
                )
              : false;
          });
        });
      });
      close_modal.addEventListener("click", (e) => {
        dialog.close();
      });
    });
  },
};
