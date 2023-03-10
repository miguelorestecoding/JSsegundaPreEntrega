// Variables Globales
let impuestosAlDolar = [];
let tiposDeDolar = [];
let textoListaImpuestosAgregados = `Impuestos Definidos:\n`;
let factorTotal = 0;

class ImpuestosAlDolar {
  constructor(nombre, factor) {
    this.nombre = nombre;
    this.factor = factor;
  }
}

class TiposDeDolar {
  constructor(nombre, factor) {
    this.nombre = nombre;
    this.factor = factor;
  }
}

// seguir desde aca, que al tocar 1 o 2 o 3 se vaya sumando el factor del impuesto a la variable factor total.
let opcionImpuesto = ""
function traeFactorImpuesto(opcionImpuesto) {
let agregaFactor = impuestosAlDolar[opcionImpuesto-1].factor
console.log(agregaFactor)
return agregaFactor
}

function menuPrincipal() {
  let opcionMenuPrincipal = "";

  opcionMenuPrincipal = prompt(
    `Elige la opcion:\n1 - Crear Impuesto\n2 - Ver Impuestos Existentes\n3 - Crear Nuevo Tipo de Dolar\n4 - Ver tipo de Dolares Existentes\n5 - Utilizar el Calculador del Dolar\n6 - Salir del Aplicativo `
  );

  if (opcionMenuPrincipal == null) {
    alert(
      "⛔ En el Menu Principal has presionado el botón cancelar.\n👋 Adios, vuelve cuando Quieras! "
    );
    return;
  }

  switch (parseInt(opcionMenuPrincipal)) {
    case 1:
      agregarTipoDeImpuestos();
      menuPrincipal();
      break;
    case 2:
      alert(mostrarTiposDeImpuestos(impuestosAlDolar));
      menuPrincipal();
      break;
    case 3:
      sumaImpuestosAlDolar();
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      alert(
        "⛔ En el Menu Principal has presionado la Opcion 6.\n👋 eso es un Adios! "
      );
      break;
    default:
      alert(
        "🥴 Opción inválida en el Menú Principal, por favor seleccione una opción válida."
      );
      menuPrincipal();
      break;
  }
}

function agregarTipoDeImpuestos() {
  let nombreDeImpuesto = prompt(
    "Ingrese el nombre del impuesto que desea agregar"
  );
  let factorDelImpuesto = prompt("Ingrese el porcentaje del impuesto");

  let impuestoACrear = new ImpuestosAlDolar(
    nombreDeImpuesto,
    parseInt(factorDelImpuesto) / 100
  );
  impuestosAlDolar.push(impuestoACrear);
}

function mostrarTiposDeImpuestos(impuestosAlDolar) {
  for (const impuesto of impuestosAlDolar) {
    textoListaImpuestosAgregados += `\n------------------------------\n**Orden**: ${
      impuestosAlDolar.indexOf(impuesto) + 1
    }\n**Nombre**: ${impuesto.nombre}\n**Factor**: ${impuesto.factor}`;
  }
  return textoListaImpuestosAgregados;
}

function sumaImpuestosAlDolar() {
  opcionImpuesto = prompt(
    `Ingresa que impuestos se aplican al dolar que estas creando (Cancelar para Terminar):\n\n*** Por ahora, tu factor total es de: ${factorTotal}\n\n ${mostrarTiposDeImpuestos(impuestosAlDolar)}`
  );

  if (opcionImpuesto === null) {
    alert("⛔ Agregando Impustos a un Tipo de Dolar que estas creando has pulsado Cancelar, volverás al Menu Principal.")
    menuPrincipal()
}

opcionImpuesto = parseInt(opcionImpuesto)

  while (opcionImpuesto >= 0 && opcionImpuesto <= impuestosAlDolar.length) {
    factorTotal += traeFactorImpuesto(opcionImpuesto)
   sumaImpuestosAlDolar()  
    }

  return factorTotal
}

function main() {
  menuPrincipal();
}

main();

// class tiposDeDolar {
//     constructor(nombre, impuestoPais, impuestoGanancias, impuestoBienesPersonales ) {
//     this.nombre = nombre;
//     this.impuestoPais = impuestoPais;
//     this.impuestoGanancias = impuestoGanancias;
//     this.impuestoBienesPersonales = impuestoBienesPersonales
//     }
// }

// const dolarTipos = [
//     { nombre: "Dólar Solidario", factor: 1.65 },
//     { nombre: "Dólar Tarjeta", factor: 1.75 },
//     { nombre: "Dólar Qatar", factor: 2 },
//   ];
