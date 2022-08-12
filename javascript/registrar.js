let formulario = document.getElementById("formulario");
let contra_comentario = document.getElementById("contra_comentario");
let doc_error = document.getElementById("doc_error");

let redireccionar = () => {
  document.location.href = "/paginas/cuenta.html";
};

class UsuarioNuevo {
  constructor(nombre, documento, email, contraseña) {
    this.nombre = nombre;
    this.documento = documento;
    this.email = email;
    this.contraseña = contraseña;
  }
}

function guardarUsuario(clave, valor) {
  localStorage.setItem(clave, valor);
}

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  let usuario = new UsuarioNuevo(
    formulario.children[0].children[1].value,
    formulario.children[1].children[1].value,
    formulario.children[2].children[1].value,
    formulario.children[3].children[1].value
  );
  if (
    usuario.documento.length < 9 &&
    usuario.documento.length > 7 &&
    usuario.contraseña.length > 7
  ) {
    guardarUsuario(1, JSON.stringify(usuario));
    await Swal.fire({
      icon: "success",
      title: "Usted se ha registrado correctamente",
      text: "Serás redireccionado a la pagina de inicio",
      timer: 2000,
    });
    redireccionar();
  } else if (
    usuario.documento.length < 9 &&
    usuario.documento.length > 7 &&
    usuario.contraseña.length < 7
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algunos campos estan mal completados",
    });
    contra_comentario.innerText = "La contraseña debe tenes más de 8 díjitos";
  } else if (usuario.documento.length !== 8 && usuario.contraseña.length > 7) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algunos campos estan mal completados",
    });
    doc_error.innerText = "El documento no tiene 8 díjitos";
  } else if (usuario.documento.length !== 8 && usuario.contraseña.length < 7) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algunos campos estan mal completados",
    });
    doc_error.innerText = "El documento no tiene 8 díjitos";
    contra_comentario.innerText = "La contraseña debe tenes más de 8 díjitos";
  }
});
