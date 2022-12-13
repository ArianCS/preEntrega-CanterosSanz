// condicional bienvenida

function saludo(bienvenida) {
  var bienvenida
  if (bienvenida == "si") {
    alert("Continuemos");
  } else {
    alert("Esta página no es para vos, pero puedes entrar igual");
  }
}

bienvenida = prompt("¡Hola! ¿Querés calcular caunto va a costar tu viaje?");

saludo(bienvenida);

// Preguntas e información

function parametros(){
  do{
    kilometros = parseFloat( prompt("Ingresá la cantidad de kilómetros a recorrer"));
  } while (kilometros <= 0);

  do{
    combustible = (prompt ("Indicanos el combustible que usás: Normal, Premium, GNC o Eléctrico")).toLowerCase();
  } while ((combustible != "normal") && (combustible != "premium") && (combustible != "gnc") && (combustible != "electrico"));

  do{
    consumo = parseFloat( prompt("¿Cuál es el consumo medio de tu auto entre 7 y 17 km/l?"));
  } while ((consumo <= 6) || (consumo >= 18));
}

parametros();

// cálculos in situ

const normal = 150;

const premium = 175;

const gnc = 80;

const electrico = 55;

function calculos(precio){
  var precio
  switch (combustible) {
    case "normal":
      combustible == normal;
      precio = (kilometros * (normal/ consumo));
      document.write("Gastarías $" + parseFloat(precio).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros."));
      document.write("<br>")
      document.write("Tu consumo sería de: " + parseFloat(litrosCombustible = kilometros / consumo).toFixed(2) + (" litros de nafta."));
      document.write("<br>")
      document.write(" A razón de " + (consumo) + (" kilómetros por cada litro."));
      break;
    case "premium":
      combustible == premium;
      precio = (kilometros * (premium/ consumo));
      document.write("Gastarías $" + parseFloat(precio).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros."));
      document.write("<br>")
      document.write("Tu consumo sería de: " + parseFloat(litrosCombustible = kilometros / consumo).toFixed(2) + (" litros de nafta."));
      document.write("<br>")
      document.write(" A razón de " + (consumo) + (" kilómetros por cada litro."));
      break;
    case "gnc":
      combustible == gnc;
      precio = (kilometros * (gnc/ consumo));
      document.write("Gastarías $" + parseFloat(precio).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros."));
      document.write("<br>")
      document.write("Tu consumo sería de: " + parseFloat(litrosCombustibleGnc = kilometros / (consumo * 0.1)).toFixed(2) + (" m3 de GNC."));
      document.write("<br>")
      document.write(" A razón de " + (consumo) + (" kilómetros por cada litro."));
      break;
    case "electrico":
      combustible == electrico;
      precio = (kilometros * (electrico/ consumo));
      document.write("Gastarías $" + parseFloat(precio).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros."));
      document.write("<br>")
      document.write("Tu consumo sería de: " + parseFloat(litrosCombustibleElectrico = kilometros / (consumo * 9.6)).toFixed(2) + (" kilo vatios hora por litro."));
      break;
  }
}

calculos();