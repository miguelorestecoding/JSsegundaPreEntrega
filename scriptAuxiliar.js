var miArray = [
    { nombre: "P.A.I.S.", factor: 0.3 },
    { nombre: "Adelanto Ganancias 35", factor: 0.35 },
    { nombre: "Adelanto Ganancias 45", factor: 0.45 },
    { nombre: "Adelanto Bienes Personales", factor: 0.25  },
  ];

var miObjeto = {};

console.log(miArray)
console.log(miObjeto)

for (var i = 0; i < miArray.length; i++) {
  miObjeto[miArray[i]] = 0;
}

console.log(miArray)
console.log(miObjeto)
