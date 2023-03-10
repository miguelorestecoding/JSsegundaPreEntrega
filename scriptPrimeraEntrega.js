let dolarOficialBNVendedor;
let opcion;

function solicitaDolarOficialBNVendedor() {
  dolarOficialBNVendedor = prompt(
    "Hola! 💵 Este es un calculador del valor de los distintos precios del Dólar.\nAntes de continuar, por favor ingresa el valor del 'Dólar Oficial Banco Nación Vendedor' 🏦.\nPuedes consultarlo en: https://www.bna.com.ar/Personas"
  );

  return dolarOficialBNVendedor;
}

function calculaDolarSolidario() {
  return parseFloat(dolarOficialBNVendedor) * 1.65;
}

function calculaDolarNetflix() {
  return parseFloat(dolarOficialBNVendedor) * 1.75;
}

function calculaDolarQatar() {
  return parseFloat(dolarOficialBNVendedor) * 2;
}

function muestraPanelDeOpciones() {
  opcion = prompt(
    `*** DOLAR OFICIAL INGRESADO: $${parseFloat(dolarOficialBNVendedor)
      .toFixed(2)
      .replace(
        ".",
        ","
      )}. ***\n\n Selecciona qué tipo de Dólar quieres calcular:\n1 🥰 Dólar Solidario\n2 💳 Dólar Tarjeta (compras con tarjeta hasta U$D300)\n3 ✈ Dólar Qatar (compras con tarjeta superando U$D300)\n4 👋 Salir de la aplicación`
  );

  if (opcion === null) {
    alert(
      "⛔ Has presionado el botón cancelar, entiendo que han finalizado tus consultas.\n👋 Adios, vuelve cuando Quieras! "
    );
    return;
  }
  opcion = parseInt(opcion);
  switch (opcion) {
    case 1:
      mostrarResultado(calculaDolarSolidario(), "Solidario 🥰");
      break;
    case 2:
      mostrarResultado(calculaDolarNetflix(), "Tarjeta 💳");
      break;
    case 3:
      mostrarResultado(calculaDolarQatar(), "Qatar ✈");
      break;
    case 4:
      alert("👋 Gracias por utilizar el calculador del Dólar!");
      break;
    default:
      alert("🥴 Opción inválida, por favor seleccione una opción válida.");
      muestraPanelDeOpciones();
      break;
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

  while (opcion === 1 || opcion === 2 || opcion === 3) {
    let otraConsulta = confirm("🧐 Quieres realizar otra consulta?");
    if (otraConsulta) {
      cotizadorDeDolares();
      return;
    } 
      alert("👋 Adios, espero haberte sido útil.");
      return;
      }
}

cotizadorDeDolares();