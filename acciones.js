var entradas = 0;
var procesos = 0;
var condiciones = 0;
var salidas = 0;

function inicio(){
	document.getElementById("entrada").disabled = true;
	document.getElementById("proceso").disabled = true;
	document.getElementById("condicion").disabled = true;
	document.getElementById("salida").disabled = true;
	document.getElementById("fin").disabled = true;
	
	var lienzo = document.getElementById("lienzo");
}

function agregaInicio(){
	document.getElementById("inicio").disabled = true;
	document.getElementById("entrada").disabled = false;
	document.getElementById("proceso").disabled = false;
	document.getElementById("condicion").disabled = false;
	document.getElementById("salida").disabled = false;
	document.getElementById("fin").disabled = false;
	
	figIni = document.createElement("div");
	figIni.innerHTML = "<svg id=\"inicioF\" width=\"99%\" height=\"40\">"
						+ "<ellipse cx=50% cy=20 rx=40 ry=19 "
						+ "stroke=\"black\" stroke-width=2 fill=\"white\"/>"
						+ "<text x=\"50%\" y=\"23\" alignment-baseline=\"middle\" text-anchor=\"middle\">Inicio</text>"
						+ "</svg> ";
	lienzo.appendChild(figIni);
}

function agregaEntrada(){
	texto = prompt("Ingrese texto: ");
	flechaAbajo();
	figEnt = document.createElement("div");
	figEnt.id = "divEntrada"+ (++entrada);
	figEnt.innerHTML = "<svg id=\"entrada"+ entrada +"\" width=\"100px\" height=\"50\">"
						+ "<polygon points=\"20, 1 99, 1 80, 49 1, 49 20, 1\" stroke=\"black\" stroke-width=2 fill=\"white\" />"
						+ "<text x=\"50%\" y=\"28\" alignment-baseline=\"middle\" text-anchor=\"middle\">"+texto+"</text>"
						+ "</svg> ";
	lienzo.appendChild(figEnt);
}

function agregaProceso(){
	texto = prompt("Ingrese texto: ");
	flechaAbajo();
	figEnt = document.createElement("div");
	figEnt.id = "divProceso"+ (++proceso);
	figEnt.innerHTML = "<svg id=\"proceso"+ proceso +"\" width=\"150\" height=\"60\">"
						+ "<rect x=1 y=1 width=148 height=58 stroke=\"black\" stroke-width=2 fill=\"white\"/>"
						+ "<text x=\"50%\" y=\"35\" alignment-baseline=\"middle\" text-anchor=\"middle\">"+texto+"</text>"
						+ "</svg> ";
	lienzo.appendChild(figEnt);
}

function agregaCondicion(){
	texto = prompt("Ingrese texto: ");
	flechaAbajo();
	figEnt = document.createElement("div");
	figEnt.id = "divCondicion"+ (++condiciones);
	figEnt.innerHTML = "<svg id=\"condicion"+ condiciones +"\" width=\"100px\" height=\"90\">"
						+ "<polygon points=\"50, 1 99, 45 50, 89 1, 45 50, 1\" stroke=\"black\" stroke-width=2 fill=\"white\" />"
						+ "<text x=\"50%\" y=\"50\" alignment-baseline=\"middle\" text-anchor=\"middle\">"+texto+"</text>"
						+ "</svg> ";
	lienzo.appendChild(figEnt);
}

function agregaSalida(){
	texto = prompt("Ingrese texto: ");
	flechaAbajo();
	figEnt = document.createElement("div");
	figEnt.id = "divCondicion"+ (++salidas);
	figEnt.innerHTML = "<svg id=\"condicion"+ salidas +"\" width=\"130px\" height=\"70\">"
						+ "<polyline points=\"1, 60 1, 1 129, 1 129, 60\" stroke=\"black\" stroke-width=2 fill=\"white\" />"
						+ "<path d=\"M 1 60 Q 32.5 75  65 60 T 129 60  M 129 60 z\" stroke=\"black\" stroke-width=2 fill=\"white\"/>"
						+ "<text x=\"50%\" y=\"34\" alignment-baseline=\"middle\" text-anchor=\"middle\">"+texto+"</text>"
						+ "</svg> ";
	lienzo.appendChild(figEnt);
}

function agregaFin(){
	inicio();
	figIni = document.createElement("div");
	flechaAbajo();
	figIni.innerHTML = "<svg id=\"finF\" width=\"99%\" height=\"40\">"
						+ "<ellipse cx=50% cy=20 rx=40 ry=19 "
						+ "stroke=\"black\" stroke-width=2 fill=\"white\"/>"
						+ "<text x=\"50%\" y=\"23\" alignment-baseline=\"middle\" text-anchor=\"middle\">Fin</text>"
						+ "</svg> ";
	lienzo.appendChild(figIni);
}

function flechaAbajo(){
	figEnt = document.createElement("div");
	figEnt.innerHTML = "<svg width=\"10\" height=\"20\">"
						+ "<path d=\"M 5 0 L 5 20\" stroke=\"black\" stroke-width=2 fill=\"none\"/>"
						+ "<path d=\"M 1 10 L 5 20 L 9 10\" stroke=\"black\" stroke-width=2 fill=\"none\"/>"
						+ "</svg> ";
	lienzo.appendChild(figEnt);
}