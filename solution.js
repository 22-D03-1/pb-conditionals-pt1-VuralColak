//Grundlagen der Programmierung: Konditionale

// Diese Übungen sollen dich mit der Verwendung von Bedingungen und Operatoren vertraut machen. Verwende "if"-Anweisungen, um die folgenden Übungen auszuführen. Gib deine Ergebnisse auf der Konsole aus.


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 1 : ");
// Überprüfe, ob zwei gegebene ganzzahlige Werte im Bereich von 50 bis 99 liegen (dies schließt sowohl 50 als auch 99 ein). Drucke true aus, wenn einer der beiden Werte in dem Bereich liegt.

const anzahl1a = 44;
const anzahl1b = 71;

if (anzahl1a >= 50 && anzahl1a <= 99) {
    console.log("anzahl1a : true");
} else console.log("anzahl1a : false");

if (anzahl1b >= 50 && anzahl1b <= 99) {
    console.log("anzahl1b : true");
} else console.log("anzahl1b : false");

if ((anzahl1a >= 50 && anzahl1a <= 99) && (anzahl1b >= 50 && anzahl1b <= 99)) {
    console.log("Beide Anzahlen : true");
} else console.log("Beide Anzahlen : false");


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 2 : ");
// Prüfe, ob drei gegebene ganzzahlige Werte im Bereich 50 bis 99 (einschließlich) liegen. Drucke true, wenn einer oder mehrere von ihnen im Bereich liegen.

const anzahl2a = 44;
const anzahl2b = 71;
const anzahl2c = 83;

if ((anzahl2a >= 50 && anzahl2a <= 99) || (anzahl2b >= 50 && anzahl2b <= 99) || (anzahl2c >= 50 && anzahl2c <= 99)) {
    console.log("Alle drei ist true");
} else console.log("Alle Drei ist false");


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 3 : ");
// Deklariere die Variablen a, b und c und gib ihnen Zahlenwerte. Prüfe, welche der drei Variablen den größten Wert hat und gib ihn auf der Konsole aus. Ändere dann die Werte der Variablen, um zu sehen, ob deine Bedingung noch funktioniert.


const anzahl3a = 44;
const anzahl3b = 71;
const anzahl3c = 83;

//Erste Weg:

// if ((anzahl3a > anzahl3b) && (anzahl3a > anzahl3c)){
//     console.log("Größte Zahl ist " + anzahl3a);
// } else if ((anzahl3b > anzahl3a) && (anzahl3b > anzahl3c)){
//     console.log("Größte Zahl ist " + anzahl3b);
// } else console.log("Größte Zahl ist " + anzahl3c);

//Zweite Weg:

const biggestInt = Math.max(anzahl3a, anzahl3b, anzahl3c);

if (biggestInt === anzahl3a){
    console.log("3", anzahl3a);
} else if (biggestInt === anzahl3b){
    console.log("3", anzahl3b);
} else (biggestInt === anzahl3c)
    console.log("3", anzahl3c);

//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 4 : ");
// Erstelle eine neue Zeichenkette, indem du "Py" vor eine gegebene Zeichenkette setzt. Wenn die gegebene Zeichenkette mit "Py" beginnt, gib die ursprüngliche Zeichenkette aus.

// erste Weg:
// const str4 = "thon";
// const strWithPy = "Py";

// if (str4.includes(strWithPy)){
//     console.log(str4);
// } else console.log(str4 + strWithPy);

//zweite Weg:

const str4b = "Python";
const positionVonPy = str4b.indexOf("Py");




//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 5 : ");
// Berechne die Summe der beiden Ganzzahlen. Wenn die Summe im Bereich von 50 bis 80 liegt, drucke 65 aus, ansonsten drucke 80 aus.

const anzahl5a = 44;
const anzahl5b = 71;

const insgesamt5 = anzahl5a + anzahl5b;

if (insgesamt5 >= 50 && insgesamt5 <= 80){
    console.log("insgesamt : " + 65);
} else console.log("insgesamt : " + 65);


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 6 : ");
// Überprüfe, ob die Summe der beiden ganzen Zahlen 8 ist oder ob ihre Differenz 8 ist. Wenn eines von beiden zutrifft, drucke true.

const anzahl6a = 5;
const anzahl6b = 3;

const sum6 = anzahl6a + anzahl6b;
const sub6 = anzahl6a - anzahl6b;

if (sum6 === 8 && sub6 === 8){
    console.log("True");
} else console.log("False");


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 7 : ");
// Prüfe, ob eine von zwei ganzen Zahlen 15 ist oder ob ihre Summe 15 ist. Wenn einer der beiden Fälle zutrifft, drucke true.

const anzahl7a = 9;
const anzahl7b = 15;

const sum7 = anzahl7a + anzahl7b;

if ((anzahl7a === 15 || anzahl7b === 15) && sum7 === 15){
    console.log("True");
} else console.log("False");



//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 8 : ");
// Prüfe, ob eine von zwei ganzen Zahlen ein Vielfaches von 7 oder 11 ist. Wenn ja, drucke true.

const anzahl8a = 13;
const anzahl8b = 22;

const mal8a7 = anzahl8a % 7;
const mal8a11 = anzahl8a % 11;
const mal8b7 = anzahl8b % 7;
const mal8b11 = anzahl8b % 11;

if ((mal8a7 === 0 || mal8a11 === 0) || (mal8b7 === 0 || mal8b11 === 0)){
    console.log("True");
} else console.log("False");


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 9 : ");
// Berechne die Summe der beiden gegebenen ganzen Zahlen. Wenn die beiden Werte gleich sind, drucke das Dreifache ihrer Summe aus.

const anzahl9a = 13;
const anzahl9b = 13;

if (anzahl9a === anzahl9b){
    console.log((anzahl9a + anzahl9b) * 3);
} else console.log(anzahl9a + anzahl9b);


//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 10 : ");
// Berechne die Differenz zwischen einer bestimmten Zahl und 19. Drucke die doppelte Differenz, wenn die angegebene Zahl größer als 19 ist.

const anzahl10a = 21;
const sub10 = anzahl10a - 19;

if (anzahl10a > 19){
    console.log(sub10 * 2);
} else console.log(sub10);

//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 11 : ");
// BONUSHERAUSFORDERUNG: Erstelle eine Variable für firstName und age und gib jeder Variable einen Wert. Erstelle eine if/else-Anweisung, um zu prüfen, ob das Alter der Person kleiner als 13 ist. Wenn ja, drucke "firstName ist ein Kind". Wenn das Alter gleich oder größer als 13 und kleiner als 20 ist, drucke "firstName ist ein Teenager". Wenn das Alter der Person gleich oder größer als 20 und kleiner als 30 ist, drucke "firstName ist ein junger Erwachsener". Wenn keine dieser Bedingungen zutrifft, drucke "firstName ist ein Erwachsener".


const firstName11 = "Mandy";
const age11 = 27;

if (age11 < 13){
    console.log(firstName11 + " is a child");
} else if (age11 >=13 && age11 < 20){
    console.log(firstName11 + " is a teenager");
} else if (age11 >= 20 && age11 < 30){
    console.log(firstName11 + " is a young adult");
} else console.log(firstName11 + " is a adult");



//////////////////////////////////////////////
console.log("-----------------------------------------------------------------");
console.log("Aufgabe 12 : ");
// BONUSHERAUSFORDERUNG: Probiere deine Ergebnisse aus, d.h. überprüfe, ob sie dynamisch auf verschiedene Eingaben reagieren; gibt es eine effizientere Methode, deinen Code zu schreiben? usw.

console.log("Die Codes wurden überprüft, sie funktionieren alle, wenn unterschiedliche Werte angegeben werden.")