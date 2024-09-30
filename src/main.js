//ej 1
let people = ["Lucia", "Ricardo", "Rocio"];


people.forEach(person => {
    console.log("Hi, " + person);
})

//ej 2
let numbers = [1,2,3,4,5];
let squaree = [];

for (let i = 0; i < numbers.length; i++) {
    squaree.push(numbers[i] **2);
}

console.log(squaree);

//ej 2 arrow
numbers = [1,2,3,4,5];
let elevado = [];

let square = () => {
    numbers.forEach(number => {
        elevado.push(number **2);
    })
    console.log(elevado);
};

square();

//ej 3 part1
let numberEj3 = [-1,2,3,-4,5];
let nuevoEj3Part1 = [];

function positivosA() {
    numberEj3.forEach(number => {
        nuevoEj3Part1.push(Math.abs(number));
    })
    console.log(nuevoEj3Part1);
}

positivosA();

//ej3 part2

let nuevoEj3Part2 = [];

let positivosB = () => {
    numberEj3.forEach(number => {
        nuevoEj3Part2.push(Math.abs(number));
    })
    console.log(nuevoEj3Part2);
}

positivosB();

//ej 4

let nuevoEj4 = [5, 10, 15];


let average = () => {
    let suma = 0;
    let media;

    nuevoEj4.forEach(number => {
        suma += number;
    })
    media = suma/nuevoEj4.length;
    console.log(media);
}

average();

//ej 5

let numbersEj5 = [1,2,3,4,5];

let grande = () => {
    let min = -1;
    let mayor;
    numbersEj5.forEach(number => {
        if (number > min) {
            mayor = number;
            min = number;
        }
    })
    console.log(mayor);
}

grande();