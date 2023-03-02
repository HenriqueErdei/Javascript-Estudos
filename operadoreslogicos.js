

let pao = true
let queijo = true

// AND ( e )

console.log( pao && queijo);

// OR ( ou )

console.log( pao || queijo);

// NOT ! negação negando !!!

console.log(!pao);


// cafe bom caso o pao e queijo seja true caso nao tiver um dos dois é ruim
const cafedamanha = pao && queijo ? 'Café TOP' : 'Café RUIM'
console.log(cafedamanha);

// maior de 18

let age = 19
const cardrive = age >= 18 ? 'Pode Dirigir.' : 'Não pode Dirigir.'
console.log(cardrive); 