alert("Grundschulmathe");

//Variablen
var ergebnis;
var min=1;
var max=20;
var punktzahl=0;
var schleifenanzahl = 5;


//Benutzerabfrage
function abfrage () {

	//Zufallszahlen
	var zufallszahl1 = Math.floor(Math.random() * (max - min + 1)) + min;
	var zufallszahl2 = Math.floor(Math.random() * (max - min + 1)) + min;

	//Ergebnis der Addition
	ergebnis = zufallszahl1 + zufallszahl2;

	var eingabe = prompt(`Wieviel ist ${zufallszahl1} + ${zufallszahl2}?`, "");

	//Eingabe umwandeln in Zahlenvariable
	var stringUmwandeln = parseInt(eingabe);

	//Ausgabe + Punktzahl erhöhen 
	if (stringUmwandeln === ergebnis) {
		punktzahl++;
		return alert(`Richtig (${punktzahl}/${schleifenanzahl})`);
	} else {
		punktzahl;
		return alert(`Falsch (${punktzahl}/${schleifenanzahl})`);
	}
}

for (var i=1; i <=schleifenanzahl; i++) {
	abfrage();
}


