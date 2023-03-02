let temperature = 41
let alta = temperature >= 37;
let moderada = temperature < 37 && temperature >= 35;

if(alta) {
    console.log('Febre Alta!')
} else if (moderada){
    console.log('Febre moderada!')
} else {
    console.log('Não está com Febre!')
}


