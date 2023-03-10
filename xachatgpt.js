let impuestosAlDolar = []


function menuPrincipal() {

    let opcionMenuPrincipal = ""

    opcionMenuPrincipal = prompt(`Elige la opcion:\n1 - Crear Impuesto\n2 - Ver Impuestos Existentes\n3 - Crear Nuevo Tipo de Dolar\n4 - Ver tipo de Dolares Existentes\n5 - Utilizar el Calculador del Dolar\n6 - Utilizar el Calculador del Dolar `)

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
        default:
            alert("🥴 Opción inválida en el Menú Principal, por favor seleccione una opción válida.");
            menuPrincipal()
        break;

    }
}

class ImpuestosAlDolar {
    constructor(nombre, factor) {
        this.nombre = nombre;
        this.factor = factor;
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
    let textoDeImpuestosAgregados = `Impuestos Definidos:\n\n`
    for (const impuesto of impuestosAlDolar) {
        listaDeImpuestosAgregados += `Nombre: ${impuesto.nombre}\nFactor: ${impuesto.nombre}\n`
    }
    return textoDeImpuestosAgregados
}

function main() {
    menuPrincipal()
    console.log(mostrarTiposDeImpuestos(impuestosAlDolar))
}

main()