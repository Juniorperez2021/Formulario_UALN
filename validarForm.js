window.onload=function(){
  let formulario = document.forms[0];
  //agregar manejador de evento para el formulario
  if(document.addEventListener){
    formulario.addEventListener("submit", validarFormulario);
  }
  else if(document.attachEvent){
    formulario.attachEvent("onsubmit", validarFormulario);
  }
}
function validarFormulario(event){
  //acceder a input email
  let inputEmail = document.getElementById('email');
  //validar código de cliente

  // validar código de cliente
  let codigoCliente = document.getElementById('codigoCliente');
  if(codigoCliente.value === ''){
  console.log("Ingrese un código de cliente válido");
  event.preventDefault();
  return false;
}

  //validar correo electrónico
  if(!validarEmail(inputEmail.value)){
    console.log("email no valido");
    event.preventDefault();//evitar que formulario se envie
    return false;//dirección de correo no válida
  }
  //validar número de factura
  let inputFactura = document.getElementById('factura');
  let regexFactura = /^\d-\d{3}$/; //Es una expresión regular para validar el formato
  if(!regexFactura.test(inputFactura.value)){
    console.log("número de factura no válido");
    event.preventDefault(); //evitar que formulario se envie
    return false;} //número de factura no válido

  //formato es digito-3digitos

  function validarNumeroFactura(numero) {
    let regex = /^\d-\d{3}$/;
    return regex.test(numero);
  }
let inputNumeroFactura = document.getElementById('numeroFactura');

if (!validarNumeroFactura(inputNumeroFactura.value)) {
  console.log("Número de factura no válido");
  event.preventDefault();
  return false;
}
  //validar monto a pagar, solo aceptar valores en coma flotate,
  //por ejemplo: 133.30 o 1020.15

  function validarMonto(monto){
    //expresión regular para validar monto
    var re = /^\d+(\.\d{1,2})?$/;
    return re.test(monto);
  }
  
  //acceder al input de monto
  let inputMonto = document.getElementById('monto');
  //validar monto a pagar
  if(!validarMonto(inputMonto.value)){
  console.log("monto no valido");
  event.preventDefault(); //evitar que formulario se envie
  return false; //monto no válido
}

  //validar tarjeta de crédito

  function validarTarjetaCredito(numTarjeta) {
    // expresión regular para validar el número de tarjeta de crédito
    var re = /^([0-9]{4}-){3}[0-9]{4}$/;
    return re.test(numTarjeta);
  }

  // Aca precisamente la valida la tarjeta de crédito
  var tarjetaCredito = document.getElementById("tarjetacredito");

  if(!validarTarjetaCredito(tarjetaCredito.value)){
  console.log("número de tarjeta de crédito no válido");
  event.preventDefault(); //evitar que formulario se envíe
  return false; //número de tarjeta de crédito no válido
}

  //formato valido es 3333-3333-3333-33333
  //16 digitos en grupos de 4 separados por guión

  //validar nombre tarjeta habiente, no debe ser vacío
  var tarjetaHabiente = document.getElementById("tarjetahabiente");


  //validar fecha de experición de tarjeta
  //formato es mm-aa (dos digitos para mes, guión, dos digitos para año)
  //por ejemplo: 09-18
  if(!validarFechaExpiracionTarjeta(document.getElementById("fechaexpiracion").value)){
    console.log("fecha de expiración no válida");
    event.preventDefault();//evitar que formulario se envie
    return false;//fecha de expiración no válida
  }

  //Si todo fue validado, retornar true
  console.log("ok");
  return true;
}
function getTarget(e){
  var target;
  if(e.target)
    target = e.target;
  else if(e.srcElement)
    target = e.srcElement;
  if(target.nodeType==3) //safari
    target = target.parentNode;

  return target;
}
function validarEmail(email){
  //expresión regular para validar correo
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
  return re.test(email);
}
