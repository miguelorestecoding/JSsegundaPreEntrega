// Variables Globales
let impuestosAlDolar = []

class ImpuestosAlDolar {
    constructor(nombre, factor) {
        this.nombre = nombre;
        this.factor = factor;
    }
}

let tiposDeDolar = []

class TiposDeDolar {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

function menuPrincipal() {

    let opcionMenuPrincipal = ""

    opcionMenuPrincipal = prompt(`Elige la opcion:\n1 - Crear Impuesto\n2 - Ver Impuestos Existentes\n3 - Crear Nuevo Tipo de Dolar\n4 - Ver tipo de Dolares Existentes\n5 - Utilizar el Calculador del Dolar\n6 - Utilizar el Calculador del Dolar\n7 - Salir del Aplicativo `)

    if (opcionMenuPrincipal == null) {
        alert(
          "⛔ En el Menu Principal has presionado el botón cancelar.\n👋 Adios, vuelve cuando Quieras! "
        );
        return;
      }

    switch(parseInt(opcionMenuPrincipal)) {
        case 1:
        agregarTipoDeImpuestos()
        menuPrincipal()
        break;
        case 2:
        alert(mostrarTiposDeImpuestos(impuestosAlDolar))
        menuPrincipal()
        break;
        case 3:
        break;
        case 4:
        break;
        case 5:
        break;
        case 6:
        break;
        default:
            alert("🥴 Opción inválida en el Menú Principal, por favor seleccione una opción válida.");
            menuPrincipal()
        break;

    }
}

function agregarTipoDeImpuestos() {
    
    let nombreDeImpuesto = prompt("Ingrese el nombre del impuesto que desea agregar")
    let factorDelImpuesto = prompt("Ingrese el porcentaje del impuesto")

    let impuestoACrear = new ImpuestosAlDolar(nombreDeImpuesto, (parseInt(factorDelImpuesto)/100))
    impuestosAlDolar.push(impuestoACrear)
    console.log(impuestosAlDolar)
}

function mostrarTiposDeImpuestos(impuestosAlDolar) {
    let textoListaImpuestosAgregados = `Impuestos Definidos:\n`
    for (const impuesto of impuestosAlDolar) {
        textoListaImpuestosAgregados += `\nNombre: ${impuesto.nombre}\nFactor: ${impuesto.factor}`
    }
    return textoListaImpuestosAgregados
}

function main() {
    menuPrincipal()
}

main()



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