//Header

let usuario = JSON.parse(localStorage.getItem("1"));

console.log(usuario);
console.log(usuario.nombre);

let saludo = document.getElementById("saludo");
saludo.innerText = `Bienvenido ${usuario.nombre}`;

//Main

let formulario = document.getElementById("formulario");
let compra = document.getElementById("precio_compra");
let venta = document.getElementById("precio_venta");

fetch("/JSON/cotizaciones.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((divisa) => {
      select.children.innerText = divisa.nombre;
    });
  });
