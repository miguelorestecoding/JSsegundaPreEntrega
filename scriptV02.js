// Variables Globales
let impuestosAlDolar = [];
let tiposDeDolar = [];
let textoListaImpuestosAgregados = `Impuestos Definidos:\n`;
let textoListaDolaresAgregados = `Dolares Disponibles para calcular su valor:\n`;
let opcionImpuesto = ""
let factorTotal = 0;


// Clases
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

//Definición de Funciones

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
      creaTipoDeDolar();
      menuPrincipal()
      break;
    case 4:
    alert(mostrarTiposDeDolar(tiposDeDolar))
    menuPrincipal()
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

function traeFactorImpuesto(opcionImpuesto) {
    let agregaFactor = impuestosAlDolar[opcionImpuesto-1].factor
    console.log(agregaFactor)
    return agregaFactor
    }

function sumaImpuestosAlDolar() {
  opcionImpuesto = prompt(
    `Ingresa que impuestos se aplican al dolar que estas creando. Presiona *Cancelar* para cancelar la creación *OK* para finalizar:\n
    *** Por ahora, tu factor total es de: ${factorTotal}\n ${mostrarTiposDeImpuestos(impuestosAlDolar)}`
  );

  if (opcionImpuesto === null) {
    alert("⛔ Agregando Impuestos has cancelado la creación de este tipo de Dolar. Vuelves al Menu Principal!")
    menuPrincipal()
}

opcionImpuesto = parseInt(opcionImpuesto)

if (opcionImpuesto < 0 || opcionImpuesto > impuestosAlDolar.length) {
    alert("El Valor Ingresado No es Válido. Por favor ingresa un valor Valido")
    sumaImpuestosAlDolar()
}

  while (opcionImpuesto >= 0 && opcionImpuesto <= impuestosAlDolar.length) {
    factorTotal += traeFactorImpuesto(opcionImpuesto)
   sumaImpuestosAlDolar()  
    }

  return factorTotal
}

function creaTipoDeDolar() {
    let nombreDeDolar = prompt(
      "Ingrese el nombre del Dolar que desea Crear!"
    );

    sumaImpuestosAlDolar()
  
    let dolarACrear = new TiposDeDolar(
      nombreDeDolar,
      factorTotal
    );
    alert(`Es creado un nuevo tipo de Dolar llamado "${nombreDeDolar}" que que es un %${factorTotal * 100} mas caro que el Dolar Oficial Banco Nación. En la opción X del Menu Principal podrás ahora calcular su valor.`)
    tiposDeDolar.push(dolarACrear);
    console.log(tiposDeDolar)
    factorTotal = 0;
  }

  function mostrarTiposDeDolar(tiposDeDolar) {
    for (const dolar of tiposDeDolar) {
      textoListaDolaresAgregados += `\n------------------------------\n**Orden**: ${
        tiposDeDolar.indexOf(dolar) + 1
      }\n**Nombre**: ${dolar.nombre}\n**Factor**: ${dolar.factor}`;
    }
    return textoListaDolaresAgregados;
  }

//Función de Ejecución
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
