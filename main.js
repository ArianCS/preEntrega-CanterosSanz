const normal = 150;

const premium = 175;

const gnc = 80;

const electrico = 55;


// condicional bienvenida

let bienvenida = prompt("¡Hola! ¿Querés calcular caunto va a costar tu viaje?");

if (bienvenida == "si"){
    alert("Continuemos");
}else{ (bienvenida != "si")
  alert("Esta página no es para vos, pero puedes entrar igual");
}
  // Preguntas e información

do{
    kilometros = parseFloat( prompt("Ingresá la cantidad de kilómetros a recorrer"));
} while (kilometros <= 0);

do{
    combustible = (prompt ("Indicanos el combustible que usás: Normal, Premium, GNC o Eléctrico")).toLowerCase();
} while ((combustible != "normal") && (combustible != "premium") && (combustible != "gnc") && (combustible != "electrico"));

do{
    consumo = parseFloat( prompt("¿Cuál es el consumo medio de tu auto entre 7 y 17 km/l?"));
} while ((consumo <= 6) || (consumo >= 18));


// cálculos in situ

switch (combustible) {
  case "normal":
    document.write("Gastarías $" + parseFloat(kilometros * normal / consumo).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros.\n\n"));
    document.write("Tu consumo sería de: " + parseFloat(litrosCombustible = kilometros / consumo).toFixed(2) + (" litros de nafta."));
    document.write(" A razón de " + (consumo) + (" kilómetros por cada litro."));
    break;
  case "premium":
    document.write("Gastarías $" + parseFloat(kilometros * premium / consumo).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros."));
    document.write("Tu consumo sería de: " + parseFloat(litrosCombustible = kilometros / consumo).toFixed(2) + (" litros de nafta."));
    document.write(" A razón de " + (consumo) + (" kilómetros por cada litro."));
    break;
  case "gnc":
    document.write("Gastarías $" + parseFloat(kilometros * gnc / consumo).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros."));
    document.write("Tu consumo sería de: " + parseFloat(litrosCombustibleGnc = kilometros / (consumo * 0.1)).toFixed(2) + (" m3 de GNC."));
    document.write(" A razón de " + (consumo) + (" kilómetros por cada litro."));
    break;
  case "electrico":
    document.write("Gastarías $" + parseFloat(kilometros * electrico / consumo).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros."));
    document.write("Tu consumo sería de: " + parseFloat(litrosCombustibleElectrico = kilometros / (consumo * 9.6)).toFixed(2) + (" kilo vatios hora por litro."));
    break;
}
