alert("TriviasLaboratoria, pagina dedicada a poner a prueba tus conocimientos");

var nombre = prompt("Cual es tu nombre?");

document.getElementById("bienvenido").innerHTML = "Bienvenido(a): " + nombre;

var jugar= prompt("Quieres jugar?");

switch (jugar) {
  case "si":
    alert("Todas tus respuestas deben estar escritas en minuscula");
    var pregunta1 = prompt("Cual es el tercer planeta del sistema solar?");
    var pregunta2 = prompt("Cual es el animal mas grande del mundo?");
    var pregunta3 = prompt("Cuantos lados tiene un hexagono?");
    var correcto=0;
    var incorrecto=0;
    var respuesta1="tierra";
    var respuesta2="ballena";
    var respuesta3=6;

    if (pregunta1==respuesta1) {
      console.log(pregunta1);
      correcto++;
      //salgan o no las respuestas
      document.getElementById("rco1").innerHTML = pregunta1;
      console.log(correcto);
    } else {
      incorrecto++;
      document.getElementById("rin1").innerHTML = pregunta1;
      console.log(incorrecto);
    }
    if (pregunta2==respuesta2) {
      console.log(pregunta2);
      correcto++;
      document.getElementById("rco2").innerHTML = pregunta2;
      console.log(correcto);
    } else {
      incorrecto++;
      document.getElementById("rin2").innerHTML = pregunta2;
      console.log(incorrecto);
    }
    if (pregunta3==respuesta3) {
      console.log(pregunta3);
      correcto++;
      document.getElementById("rco3").innerHTML = pregunta3;
      console.log(correcto);
    } else {
      incorrecto++;
      document.getElementById("rin3").innerHTML = pregunta3;
      console.log(incorrecto);
    }
    //
    document.getElementById("correcto").innerHTML =  correcto;
    document.getElementById("incorrecto").innerHTML =  incorrecto;
    document.getElementById("resultados").style.display = "block";

  break;
  case "no":
    alert("Hasta la proxima");
    document.getElementById("caja3").style.display = "block";
  break;
  default:
    alert("Debes contestar si o no");

}
