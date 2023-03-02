

let techs = ["html", "css", "js"]


// add item no fim
techs.push("nodejs");
//add item no começo
techs.unshift("Python");
//remover fim
techs.pop();
//remover começo
techs.shift();
//pegar somente alguns elementos do array
console.log(techs.slice(1,2));
//remover 1 ou mais itens em qualquer posição do array
techs.splice(1,1);
//encontrar a posição em um elemento  no array

let index = techs.indexOf('css');
console.log(index);

console.log(techs);