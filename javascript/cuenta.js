function nroCuentaAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

let numeroCuenta = Math.ceil(nroCuentaAleatorio(0, 999999999999));

//Header

let usuario = JSON.parse(localStorage.getItem("1"));

console.log(usuario);
console.log(usuario.nombre);

let saludo = document.getElementById("saludo");
saludo.innerText = `Bienvenido ${usuario.nombre}`;

//Seccion principal

let nombre_cuenta = document.getElementById("nombre_cuenta");
let nro_cuenta = document.getElementById("nro_cuenta");
let saldo_cuenta = document.getElementById("saldo_cuenta");

nombre_cuenta.innerText = `Bienvenido ${usuario.nombre}`;
nro_cuenta.innerText = `Tu número de cuenta corriente es: ${numeroCuenta}`;
saldo_cuenta.innerText = "Tu saldo actual es de $0";
