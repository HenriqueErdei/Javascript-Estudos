

//array

console.log ([
    'Audi',
    'BMW',
    'Honda'
]);

console.log('Message')

console.log([
    10,
    20,
    30,
    40,
    50,
])

//message console

console.log('Message')

//const nao muda constante

const clima = ('Quente')
console.log(clima);

//let e var são variaveis 

let tempo = ('Lento')
tempo = ('Rapido')
console.log('tempo');

//variaveis no log em texto com let ou const em scope {}

{
    let name, age, ishuman
    
            name= 'Henry',
            age= 22,
            ishuman= true,

    
    //concatenando
            console.log('O ' + name + ' tem ' + age + ' anos. ')

    //interpolando 
            console.log(´O ${name} tem ${age} anos.´)
}


//objeto


    const person = {
        name:'Henry',
        age: 22,
        isadmin: true,
    }

    console.og(person);

// array com objetos e consulta dentro do objeto

{
    const animals = [

        {
            name:'cat',
            age:3,
        },
        
        {
            name: 'monkey',
            age: 3
        },

        {
            name:'Lion',
            age:5,
        }
    ]

    console.log(animals);
    console.log(animals[2].name);
}

// array com strings e consulta 

{
    const animals = [
        'Lion',
        'Monkey',
        'Cat',
        'Dog',
    ]

    console.log(animals);
    console.log(animals[3]);
}

//