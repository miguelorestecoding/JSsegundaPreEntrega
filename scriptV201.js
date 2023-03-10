const dolarTipos = [
  { nombre: "Dólar Solidario", factor: 1.65 },
  { nombre: "Dólar Tarjeta", factor: 1.75 },
  { nombre: "Dólar Qatar", factor: 2 },
];

let dolarOficialBNVendedor;

function solicitaDolarOficialBNVendedor() {
  dolarOficialBNVendedor = prompt(
    "Hola! 💵 Este es un calculador del valor de los distintos precios del Dólar.\nAntes de continuar, por favor ingresa el valor del 'Dólar Oficial Banco Nación Vendedor' 🏦.\nPuedes consultarlo en: https://www.bna.com.ar/Personas"
  );

  return dolarOficialBNVendedor;
}

function calculaDolarTipo(tipo) {
  return parseFloat(dolarOficialBNVendedor) * tipo.factor;
}

function muestraPanelDeOpciones() {
  const dolarOficialIngresado = parseFloat(dolarOficialBNVendedor)
    .toFixed(2)
    .replace(".", ",");

  opcion = prompt(
    `*** DOLAR OFICIAL INGRESADO: $${dolarOficialIngresado}\n Selecciona qué tipo de Dólar quieres calcular:\n${dolarTipos
      .map((tipo, index) => `${index + 1} ${tipo.nombre}`)
      .join("\n")}\n${dolarTipos.length + 1} Salir de la aplicación`
  );

  if (opcion === null) {
    alert(
      "⛔ Has presionado el botón cancelar, entiendo que han finalizado tus consultas.\n👋 Gracias por utilizar el calculador del Dólar! "
    );
    return;
  }

  opcion = parseInt(opcion);
  const tipoSeleccionado = dolarTipos[opcion - 1];

  if (tipoSeleccionado) {
    mostrarResultado(
      calculaDolarTipo(tipoSeleccionado),
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
