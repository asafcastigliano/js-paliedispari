function palindroma(string){
    return string === string.split("").reverse().join("");
}

function randomNumber (a, b){
    return Math.floor(Math.random() * b) + a;
}

function numPari(a, b){
    return (a+b)%2 == 0;
}

let word = prompt("Inserisci una parola");

if(palindroma(word)) alert("La parola è palindroma");
else alert("La parola non è palindroma");

let num1 = 0;

do{
    num1 = parseInt(prompt("Inserisci un numero"));
} while(num1 > 5 || num1 < 1)

num2 = randomNumber(1, 5);

if(numPari(num1, num2)) alert("La somma tra " + num1 + " e " + num2 + " è di " + (num1+num2) + " è pari");
else alert("La somma tra " + num1 + " e " + num2 + " è di " + (num1+num2) + " è dispari");