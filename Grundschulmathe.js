alert("Grundschulmathe");

//Variablen
var zufallszahl1;
var zufallszahl2;
var ergebnis;
var min=1;
var max=20;
var punktzahl=0;
var schleifenanzahl = 5;

//Aufgabe Multiplikation
//Benutzerabfrage Multiplikation
function abfrage () {

	//Zufallszahlen
	zufallszahl1 = Math.floor(Math.random() * (max - min + 1)) + min;
	zufallszahl2 = Math.floor(Math.random() * (max - min + 1)) + min;

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


//Aufgabe Subtraktion
//Benutzerabfrage Subtraktion

function abfrageSub () {

	//Zufallszahlen
	zufallszahl1 = Math.floor(Math.random() * (max - min + 1)) + min;
	zufallszahl2 = Math.floor(Math.random() * (max - min + 1)) + min;
	
	//Kein negatives Ergebnis: Zufallszahl 1 muss größer sein als Zufallszahl 2 => Nochmal Zufallszahlen generieren
	if ((zufallszahl1 < zufallszahl2))
	{
		while (zufallszahl1 < zufallszahl2 && zufallszahl2 > zufallszahl1) {
			zufallszahl1 = Math.floor(Math.random() * (max - min + 1)) + min;
			zufallszahl2 = Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	
	//Ergebnis der Subtraktion
	ergebnis = zufallszahl1 - zufallszahl2;

	var eingabe = prompt(`Wieviel ist ${zufallszahl1} - ${zufallszahl2}?`, "");

	//Eingabe umwandeln in Zahlenvariable
	var stringUmwandeln = parseInt(eingabe);

	//Ausgabe + Punktzahl erhöhen 
	if (stringUmwandeln === ergebnis) {
		punktzahl++;
		return alert(`Richtig (${punktzahl}/${schleifenanzahl*2})`);
	} else {
		punktzahl;
		return alert(`Falsch (${punktzahl}/${schleifenanzahl*2})`);
	}
}

if (punktzahl >= 4) {
	alert("Willkommen, du bist nun in Level 2.");

	for (var i=1; i <=schleifenanzahl; i++) {
		abfrageSub();
	}
}

