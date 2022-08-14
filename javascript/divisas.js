//Header

let usuario = JSON.parse(localStorage.getItem("1"));

console.log(usuario);
console.log(usuario.nombre);

let saludo = document.getElementById("saludo");
saludo.innerText = `Bienvenido ${usuario.nombre}`;

//Main

let contenedor = document.getElementById("contenedor_divisa");

fetch("/JSON/cotizaciones.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((divisa) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <div>
        <h3>${divisa.nombre}</h3>
        <p>Compra: ${divisa.compra}</p>
        <p>Venta: ${divisa.venta}</p>
        </div>
      `;
      const ul = document.createElement("ul");
      contenedor.append(ul);
      ul.append(li);
    });
  });
