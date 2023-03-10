tipoSeleccionado.nombre
);
} else if (opcion === dolarTipos.length + 1) {
alert("👋 Gracias por utilizar el calculador del Dólar!");
} else {
alert("🥴 Opción inválida, por favor seleccione una opción válida.");
muestraPanelDeOpciones();
}
}

function mostrarResultado(resultado, tipoDolar) {
alert(
`😉 El resultado de tu consulta para el Dólar ${tipoDolar} es : $${resultado
  .toFixed(2)
  .replace(".", ",")}`
);
}

function cotizadorDeDolares() {
if (dolarOficialBNVendedor === undefined) {
solicitaDolarOficialBNVendedor();

if (dolarOficialBNVendedor === null) {
  alert(
    "⛔ Has presionado el botón cancelar, entiendo que no quieres realizar calculos ahora.\nCalcularemos el valor del dolar en otra ocasión 🤑!."
  );
  return;
} else if (isNaN(parseFloat(dolarOficialBNVendedor))) {
  alert(" ⛔ Valor de dolar no válido. Por favor ingresa un número.");
  dolarOficialBNVendedor = undefined;
  return cotizadorDeDolares();
}
}

muestraPanelDeOpciones();

if (opcion && opcion <= dolarTipos.length) {
let otraConsulta = confirm("🧐 Quieres realizar otra consulta?");
if (otraConsulta) {
  cotizadorDeDolares();
  return;
} else {
  alert("👋 Adios, espero haberte sido útil.");
  return;
}
}
}

cotizadorDeDolares();
