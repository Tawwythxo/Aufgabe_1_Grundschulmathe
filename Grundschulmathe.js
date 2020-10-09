alert("Grundschulmathe");

//Variablen
var zufallszahl1;
var zufallszahl2;
var ergebnis;
var min=1;
var max=20;
var punktzahl=0;
var schleifenanzahl = 5;

//---------------------------------------------------
//Funktionen:
//Benutzerabfrage Addition
function abfrageAdd () {

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

//Benutzerabfrage Multiplikation
function abfrageMul () {

	//Zufallszahlen
	zufallszahl1 = Math.floor(Math.random() * (max - min + 1)) + min;
	zufallszahl2 = Math.floor(Math.random() * (max - min + 1)) + min;
	
	//Ergebnis der Multiplikation
	ergebnis = zufallszahl1 * zufallszahl2;

	var eingabe = prompt(`Wieviel ist ${zufallszahl1} * ${zufallszahl2}?`, "");

	//Eingabe umwandeln in Zahlenvariable
	var stringUmwandeln = parseInt(eingabe);

	//Ausgabe + Punktzahl erhöhen 
	if (stringUmwandeln === ergebnis) {
		punktzahl++;
		return alert(`Richtig (${punktzahl}/${schleifenanzahl*3})`);
	} else {
		punktzahl;
		return alert(`Falsch (${punktzahl}/${schleifenanzahl*3})`);
	}
}

//Benutzerabfrage Division
function abfrageDiv () {

	//Zufallszahlen
	zufallszahl1 = Math.floor(Math.random() * (max - min + 1)) + min;
	zufallszahl2 = Math.floor(Math.random() * (max - min + 1)) + min;
	
	//Auf rest überprüfen
	var rest = zufallszahl1 % zufallszahl2;

	//Wenn Rest vorhanden, nochmal generieren
	if (rest !== 0)
	{
		while (rest !== 0) {
			zufallszahl1 = Math.floor(Math.random() * (max - min + 1)) + min;
			zufallszahl2 = Math.floor(Math.random() * (max - min + 1)) + min;
			//Auf rest überprüfen
			rest = zufallszahl1 % zufallszahl2;
		}
	}
	
	//Ergebnis der Division
	ergebnis = zufallszahl1 / zufallszahl2;

	var eingabe = prompt(`Wieviel ist ${zufallszahl1} / ${zufallszahl2}?`, "");

	//Eingabe umwandeln in Zahlenvariable
	var stringUmwandeln = parseInt(eingabe);

	//Ausgabe + Punktzahl erhöhen 
	if (stringUmwandeln === ergebnis) {
		punktzahl++;
		return alert(`Richtig (${punktzahl}/${schleifenanzahl*4})`);
	} else {
		punktzahl;
		return alert(`Falsch (${punktzahl}/${schleifenanzahl*4})`);
	}
}


//---------------------------------------------------
//Aufrufen der Funktionen und Aufgaben
//Aufgabe Addition
for (var i=1; i <=schleifenanzahl; i++) {
	abfrageAdd();
}

//Aufgabe Subtraktion
if (punktzahl >= 4) {
	alert("Willkommen, du bist nun in Level 2.");

	for (var i=1; i <=schleifenanzahl; i++) {
		abfrageSub();
	}
}

//Aufgabe Multiplikation
if (punktzahl >= 8) {
	alert("Willkommen, du bist nun in Level 3.");

	for (var i=1; i <=schleifenanzahl; i++) {
		abfrageMul();
	}
}

//Aufgabe Division
if (punktzahl >= 12) {
	alert("Willkommen, du bist nun in Level 4.");

	for (var i=1; i <=schleifenanzahl; i++) {
		abfrageDiv();
	}
}


//---------------------------------------------------
//Abschlusstext
if(punktzahl >= 10) {
	alert("Herzlichen Glückwunsch. Du bist nun ein Mathe-Genie.");
} else {
	alert("Hmmm, vielleicht solltest du bissle mehr üben. Nur ein kleiner Ratschlag.");
}


