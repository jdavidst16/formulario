
document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "57311259210";

  let cliente = document.querySelector("#cliente").value;
  let Telefono = document.querySelector("#Telefono").value;
  let ciudad = document.querySelector("#ciudad").value;
  let direccion = document.querySelector("#direccion").value;
  let color = document.querySelector("#color").value;
  let cantidad = document.querySelector("#cantidad").value;
  let correo = document.querySelector("#correo").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=573112259210&text=
    *_Hola ElectroRex_*%0A
    *quiero pedir mis Inpods i12*%0A%0A
    *NOMBRE*%0A
    ${cliente}%0A

    *Telefono*%0A
    ${Telefono}%0A

    *CIUDAD*%0A
    ${ciudad}%0A

    *DIRECCION*%0A
    ${direccion}%0A

    *CANTIDAD*%0A
    ${cantidad}%0A

    *COLOR*%0A
    ${color}%0A
    
    *Correo electronico*%0A
    ${correo}`;

  if (cliente === "" || ciudad === "" || direccion === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Completa los datos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu pedido satisfactoriamente,
   esperalo muy pronto en casa de 2 a 4 dias habiles, Gracias por tu compra ${cliente}`;

  window.open(url);
});

