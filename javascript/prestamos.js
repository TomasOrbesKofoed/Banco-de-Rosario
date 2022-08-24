//Header

let usuario = JSON.parse(localStorage.getItem("1"));

console.log(usuario);
console.log(usuario.nombre);

let saludo = document.getElementById("saludo");
saludo.innerText = `Bienvenido ${usuario.nombre}`;

//Main

let formulario = document.getElementById("formulario");
let info = document.getElementById("info");
let aceptarPrestamo = document.getElementById("confirmar_prestamo");
let prestamos_solicitados = [];
let listado = document.getElementById("lista_prestamos");
class Orden_prestamo {
  constructor(valor, años, cuotaMensual) {
    this.monto = valor;
    this.tiempo = años;
    this.cuota = cuotaMensual;
  }
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let valorPrestamo = formulario.children[0].children[1].value;
  let añosPrestamo = formulario.children[1].children[1].value;

  function calculoValorPrestamo(valorPrestamo, añosPrestamo) {
    if (añosPrestamo < 6) {
      return valorPrestamo * Math.pow(1.5, añosPrestamo);
    } else {
      return 0;
    }
  }

  function calculoCuotasMensuales(añosPrestamo) {
    return (
      calculoValorPrestamo(valorPrestamo, añosPrestamo) / (12 * añosPrestamo)
    );
  }

  let valorCuotaMensual = calculoCuotasMensuales(añosPrestamo);

  añosPrestamo < 6
    ? (info.innerText = `Con los datos suministrados, usted solicitá un prestamo de ${valorPrestamo}, a pagar durante ${añosPrestamo} años de forma mensual (numero de cuotas a pagar: ${
        añosPrestamo * 12
      }). El valor de cada cuota mensual será de ${valorCuotaMensual}`)
    : (info.innerText =
        "Lo lamentamos, pero no otorgamos prestamos con plazos mayores a 5 años");
});

aceptarPrestamo.addEventListener("click", () => {
  let valorPrestamo = formulario.children[0].children[1].value;
  let añosPrestamo = formulario.children[1].children[1].value;
  function calculoValorPrestamo(valorPrestamo, añosPrestamo) {
    if (añosPrestamo < 6) {
      return valorPrestamo * Math.pow(1.5, añosPrestamo);
    } else {
      return 0;
    }
  }
  function calculoCuotasMensuales(añosPrestamo) {
    return (
      calculoValorPrestamo(valorPrestamo, añosPrestamo) / (12 * añosPrestamo)
    );
  }
  let valorCuotaMensual = calculoCuotasMensuales(añosPrestamo);

  Swal.fire({
    icon: "success",
    title: "Perfecto!",
    text: "En las proximas horas se le comunicará si se le otorga su prestamo",
  });
  prestamos_solicitados.push(
    new Orden_prestamo(valorPrestamo, añosPrestamo, valorCuotaMensual)
  );
});

let mostrar_prestamo = document.getElementById("mostrar_prestamos");
mostrar_prestamo.addEventListener("click", () => {
  prestamos_solicitados.forEach((solicitud) => {
    const item = document.createElement("li");
    item.innerText = `Su solicitud de un prestamo por ${solicitud.monto} pesos a pagar en ${solicitud.tiempo} año y cuyo valor de cuota mensual es de ${solicitud.cuota} pesos; está en estado de Pendiente`;
    listado.append(item);
  });
});

console.log(prestamos_solicitados);
