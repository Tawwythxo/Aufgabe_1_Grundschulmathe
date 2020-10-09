alert("Grundschulmathe");

//Variablen
var ergebnis;
var min=1;
var max=20;

//Zufallszahlen
var zufallszahl1 = Math.floor(Math.random() * (max - min + 1)) + min;
var zufallszahl2 = Math.floor(Math.random() * (max - min + 1)) + min;

//Ergebnis der Addition
ergebnis = zufallszahl1 + zufallszahl2;

//Benutzerabfrage
function abfrage () {

	var eingabe = prompt(`Wieviel ist ${zufallszahl1} + ${zufallszahl2}?`, "");

	//Eingabe umwandeln in Zahlenvariable
	var stringUmwandeln = parseInt(eingabe);

	//Ausgabe
	if (stringUmwandeln === ergebnis) {
		return alert("Richtig");
	} else {
		return alert("Falsch");
	}
}

abfrage();

