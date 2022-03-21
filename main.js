console.log(typeof("салат"));
// Предположение: String
// Фактический: String

console.log(typeof(9));
// Предположение: number
// Фактический: number

console.log(typeof(1.2));
// Предположение: number
// Фактический: number

console.log(typeof(NaN));
// Предположение: number
// Фактический: number

console.log(typeof("Hello World"));
// Предположение: String
// Фактический: String

console.log(typeof(true));
// Предположение: boolean
// Фактический: boolean

console.log(typeof(2 != 1));
// Предположение: boolean
// Фактический: boolean

console.log("сыр" + "ы");
// Предположение: сыры
// Фактический: сыры

console.log("сыр" - "ы");
// Предположение: NaN
// Фактический: NaN

console.log("2" + "4");
// Предположение: 24
// Фактический: 24

console.log("2" - "4");
// Предположение: -2
// Фактический: -2

console.log("Сэм" + 5);
// Предположение: Сэм5
// Фактический: Сэм5

console.log("Сэм" - 5);
// Предположение: NaN
// Фактический: NaN

console.log(99 * "шары");
// Предположение: NaN
// Фактический: NaN

let a;
let b;
let P;
let S;
let k;

a = 2;
b = 3;
P = a*2 + b*2;
S = a*b;
k = P/S;
console.log(`${a} ${b}`);
console.log(P);
console.log(S);
console.log(k);

let C1 = 25;
let F1 = C1*1.8 + 32;

let F2 = 66.2;
let C2 = (F2-32)/1.8;

console.log (`${C1}\xB0C соответсвует ${F1}\xB0F`);
console.log (`${F2}\xB0F соответсвует ${C2}\xB0C`);


let year = prompt('Какой сейчас год?', 2022);
let massage = ((year % 4 == 0) && (year % 100 != 0)) ? 'Високосный год' : 'Обычный год';
alert(massage);


let number1 = prompt('Введите первое число');
let number2 = prompt('Введите второе число');

if ((number1 == 10) || (number2 == 10) || ((Number(number1) + Number(number2)) == 10))
{
    alert('true');
}
else
{
    alert('false');
}

//овечки выводятся не в строчку
let sheep_counter = prompt('Введите количество овечек?');
let sheep_string = '';

for(let i = 1; i <= sheep_counter; i++)
{
sheep_string = sheep_string + String(i) + ' овечка.... ';
}
console.log(sheep_string);


for(let i = 0; i <= 15; i++ )
{
    if (i % 2 == 0)
    {
        console.log(`"${i} четное"`);
    }
    else
    {
        console.log(`"${i} нечетное"`);
    }
}


for(let i = 0; i <= 12; i++ )
{
    if(i % 2 == 0)  console.log('#'.repeat(i));
    if(i % 2 != 0)  console.log('*'.repeat(i));
}

let chislo1 = prompt('Введите число 1');
let chislo2 = prompt('Введите число 2');
let chislo3 = prompt('Введите число 3');

let array = [chislo1, chislo2, chislo3];

console.log(array);

console.log(array. sort(function(a, b){return a - b}));


let chisl1 = prompt('Введите число 1');
let chisl2 = prompt('Введите число 2');
let chisl3 = prompt('Введите число 3');
let chisl4 = prompt('Введите число 4');
let chisl5 = prompt('Введите число 5');

let array_max = [Number(chisl1), Number(chisl2), Number(chisl3), Number(chisl4), Number(chisl5),];
console.log(Math.max.apply(null, array_max));
