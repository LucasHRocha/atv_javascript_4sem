
//Nome: João Pedro De Araujo Silva       RA: 1680482011017
//Nome: Lucas Henrique Andrade da Rocha  RA: 1680482011001
const emptyList = {s: 0};
const isEmpty = ls => ls.s === 0;
const cons = (x, ls) => { return {h: x, t: ls, s: ls.s + 1}; };
const head = ls => ls.h;
const tail = ls => ls.t;
const size = ls => ls.s;

// criação de objetos 
const objred = {
        next: function(){
            return "green";
        }
    }

const objgreen = {
        next: function(){
            return "yellow";
        }
    }

const objyellow = {
    next: function(){
        return "red";
    }
}
function count(ls,light){ // ele verfica se tem o elemento de acordo com a string passada
    let cont = 0;
    while(!isEmpty(ls)){
        if (head(ls) === light){ // faz as comparações
            cont++;
        }
        ls = tail(ls);
    }
    return cont;
}
function next(ls){
    ls2 = emptyList; // cria 2 lista para poder passar pra ls3 a ordem correta em relação a ls 
    ls3 = emptyList;
    while(!isEmpty(ls)){
        if (head(ls) === "red"){ // chama o metodo de cada objeto selecionado
            ls2 = cons(objred.next(head(ls)),ls2);
        }
        if (head(ls) === "green"){
            ls2 = cons(objgreen.next(head(ls)),ls2);
        }
        if (head(ls) === "yellow") {
            ls2 = cons(objyellow.next(head(ls)),ls2);
        }
        ls = tail(ls);
    }
    while(!isEmpty(ls2)){
        ls3 = cons(head(ls2),ls3)
        ls2 = tail(ls2);
    }
    return ls3;
}
function show(ls){ // ela mostra oq tem na lista 
    while(!isEmpty(ls)){
        console.log(head(ls));
        ls = tail(ls);
    }
}
// as logicas é a seguinte, se cada troca de sinal seja, red pro green ou gren pro yellow e no mesmo intervalo
// assim pensamos que quando o farol é green ele gasta tempo apenas de se deslocar
// quando é red ele gasta 2x esse tempo, pois é o tempo de espera e o tempo de movimento 
// já quando é yellow ele gasta 3x o tempo, espera ficar red, despois green pra depois se mover 
// e pensamos pra um exemplo mais tangivel usar o numero 5s 
function time(ls){
    let x=0;
    while(!isEmpty(ls)){
        if (head(ls) === "green"){
            x += 5;
        }
        if (head(ls) === "red"){
            x += 10;
            ls = next(ls);
        }
        if (head(ls) === "yellow"){
            x += 15;
            ls = next(ls);
            ls = next(ls);
        }
        ls = next(ls);
        ls = tail(ls);
    }
    return x;
}
ls = cons("red",cons("yellow",cons("green",emptyList)));
show(ls);
console.log("quantos red tem");
console.log(count(ls,"red"));
console.log("/////////////");
console.log("o next da lista ls: ")
show(next(ls));
console.log("/////////////");
console.log("o tempo gasto em segundos para essa sequencia");
show(ls);
console.log(time(ls),"s");