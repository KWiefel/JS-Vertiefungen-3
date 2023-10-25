"use strict";

// =========================== Functions-Vertiefung-Level-1_1 ======================

// Lernziel: Syntax und Verwendung von Arrow-Functions
// Arrow Functions ermöglichen Funktionen in einer kürzeren Syntax zu schreiben.
// Schreibe - wie du es bisher gewohnt bist - die Funktion intro1() und gib bitte nur "Hello Function" in der Konsole aus.
// Nun sollst du den Code mit Hilfe der Arrow Function verkürzen
// Schaue dir die Beispiele unter Hinweise an.

function intro1() {
  console.log("Hello Function");
}
intro1();

const intro2 = () => {
  console.log("Hello Arrowfunction");
};
intro2();

const intro3 = () => console.log("Hello Arrowfunction Short");
intro3();

// =========================== Functions-Vertiefung-Level-1_2 ======================

// In dieser Aufgabe geht es darum, zu üben, wie aus den alt bekannten Funktion sogenannte Arrow Functions werden
// Schreibe eine Funktion, die "Hallo" in deinem HTML anzeigt.
// Schreibe eine Funktion, die die Summe von zwei Zahlen in deinem Browser (console oder HTML) anzeigt. (x=2; y=3)
// Schreibe eine Funktion, die die Multiplikation von zwei Zahlen als Alert ausgibt. (x=2; y=3)
// Schreibe eine Funktion, die einen Parameter nimmt und den Typ dieses Elements in deinem Browser (console oder HTML) anzeigt.
// Teste: i=true; j=”hi”; k=1; l={name:”John”}; a=[0,1]
// Konvertiere schließlich alle Funktionen in die neue Arrow Functions-Schreibweise.

function hello() {
  document.write("Hallo <br>");
}
hello();

// arrow Schreibweise
const helloArrow = () => document.write("Hallo <br>");
helloArrow();

function calculate() {
  document.write(2 + 3 + "<br>");
}
calculate();

// arrow Schreibweise
const calculateArrow = () => document.write(2 + 3 + "<br>");
calculateArrow();

function alertNew() {
  const x = 2;
  const y = 3;
  return x * y;
}
// window.alert(alertNew());

// arrow Schreibweise
const alertNewArrow = () => {
  const x = 2;
  const y = 3;
  return x * y;
};
// window.alert(alertNew());

const i = true;
const j = "hi";
const k = 1;
const l = { name: "John" };
const a = [0, 1];

function type(argument) {
  console.log(typeof argument);
}
type(i);
type(j);
type(k);
type(l);
type(a);

// arrow Schreibweise
const typeArrow = (argument) => console.log(typeof argument);
type(i);
type(j);
type(k);
type(l);
type(a);

// =========================== Functions-Vertiefung-Level-1_4 ======================

// Deklariere die Funktion hero() mit drei Parametern heroName, heroPower und heroEnemy. Im Funktionskörper {} sollst du dann Folgendes machen
// Deklariere drei Variablen name, power und enemy.
// Weise den Variablen dann diese Werte zu
// a. Mein:e Lieblingsheld:in ist: xyz
// b. Er/sie hat die Fähigkeit: xyz
// Sein/ihr größte/r Gegner:in ist: xyz.
// Füge die passenden Parameter in die Variablen ein.
// Gib name + power + enemy in der Konsole aus.
// Ruf deine Funktion auf.
// Übergib Argumente für deine:n Lieblingsheld:in und gib diese in der Konsole aus.

function hero(heroName, heroPower, heroEnemy) {
  let name = "Mein Lieblingsheld ist: " + heroName;
  let power = "Er hat die Fähigkeit: " + heroPower;
  let enemy = "Sein größter Gegner ist: " + heroEnemy;

  console.log(name, power, enemy);
}
hero("Spiderman", "eine Spinne zu sein", "der grüne Typ");
