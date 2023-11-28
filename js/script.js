function palindroma(string){
    return string === string.split("").reverse().join("");
}

let word = prompt("Inserisci una parola");

if(palindroma(word)) alert("La parola è palindroma");
else alert("La parola non è palindroma");