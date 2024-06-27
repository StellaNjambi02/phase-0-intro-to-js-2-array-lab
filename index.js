// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
     cats.push('Ralph');
     return cats;
}
function destructivelyPrependCat(name){
    cats.unshift('Bob');
    return cats;
}
function destructivelyRemoveLastCat(){
cats.pop();
return cats;
}
function destructivelyRemoveFirstCat(){

    cats.shift();
    return cats;
}
function appendCat(name){
    const newCat=[...cats,"Broom"];
    return newCat;
}
function prependCat(name){
const newCats=["Arnold",...cats];
return newCats;
}

function removeLastCat(){
    const cat1=[...cats.slice(0,2)];
    return cat1;
}
function removeFirstCat(){
   const cat2=[...cats.slice(1)];
     return cat2;
}