// Базовые математические операторы//
// 1)
console.log(1 - 3);
// 2)
console.log(3 + 5);
// 3)
console.log(2 * 5);
// 4)
console.log(9 / 3);
// 5)
console.log(9 % 2);
// 6)
console.log(4 ** (1 / 2));

// console.log('----------------------------------------------');


// Таски на циклы//

// Вывод чисел от 25 до 0 (порядок уменьшения)
// 1)
let i = 25;
while (i > 0) {
    console.log(i);
    i--;
}

// 2)
let a = 25;
do {
    console.log(a);
    a--;
} while (a > 0);

// 3)
for (let b = 25; b > 0; b--) {
    console.log(b);
}


// console.log('----------------------------------------------');


// Вывод чисел от 10 до 50, которые кратны 5
// 1)
let c = 10;
while (c < 50) {
    if (c % 5) continue;
    c++;

}
console.log(c);
// 2)
let e = 10;
do {
    e % 5;
    e++;
} while (e < 50);

// 3)
for (let i = 2; i <= 50; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}

// Найти сумму чисел в пределах от 1 до 100

// 1)
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 2)
let sum2 = 0;
let f = 1;
while (f <= 100) {
    f++;

    console.log(sum2 += f);
}

// 3)
let sum3 = 0;
let s = 1;
do {
    console.log(sum3 += s);
    s++;
} while (s <= 100);

// Предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

// 1)
while (true) {
    let value = +prompt('2 + 2 * 2')
    if (value == 6) break;
    else {
        alert(value);
    }
}
alert(value);

// 2)
do {
    let value2 = +prompt('2 + 2 * 2');
    if (value2 == 6) break;
    else {
        alert(value2);
    }
} while (true);
alert(value2);

// 3)
for (i = 0; ;) {
    let value3 = prompt('2 + 2 * 2');
    if (i == 6) break;
    else {
        alert(value3);
    }
}
alert(value3);

// console.log('----------------------------------------------');

// Создать объект, добавить в него свойства, вывести свойства объекта, удалить свойство объекта, переопределить значения свойств объекта

// 1)

let user = {
    firstName: 'John',
    surName: 'Lebovskiy',
    age: 36
}
user.firstName;

// 2)

delete user.age;

// 3)

user.firstName = 'Dude';

// / console.log('----------------------------------------------');

// Создать валидацию возраста пользователя от 18+ лет, разными способами

// 1)
let age = prompt("Сколько Вам лет?");

let welcome = (age < 18) ?
    () => alert("Привет!") :
    () => alert("Здравствуйте!");

welcome();

// 2)

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

// / console.log('----------------------------------------------');

// Работа с массивами-> создать массив , добавить в него свойства разных типов, вывести объект, перебрать массив и вывести отдельно разные типы из массива,
// добавить новые свойства массива в начало и конец массива, удалить 2 и 3 индекс из массива, заменить 5-6 индекс массива новыми значениями.

// 1)
let arr = [
    'Яблоко',
    {
        name: 'Alex',
        age: 30,
    },
    true,
    function () {
        console.log('Привет');
    }
];

console.log(arr[1]);

for (let i = 0; i < arr.length; i++) {
    console.log(i);
};

arr.push('John');
arr.unshift({
    name: 'Peter',
    age: 25,
});

arr.splice(2, 2);

arr.splice(4, 2, "Sara", "David");

// / console.log('----------------------------------------------');

// 1)
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

let array = [4, -2, 5, 19, -130, 0, 10];
min = array[0];
max = min;
for (i = 1; i < array.length; ++i) {
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
}
console.log(min);
console.log(max);

// 2)
// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let newArr = [12, 15, 20, 25, 59, 79];
let reduceValue = newArr.reduce((prev, item) => prev + item, 0);

let result = reduceValue / newArr.length;
console.log(result);

// 3)
// Выведите на экран случайное целое число от 1 до 100.

console.log(Math.floor(Math.random() * 101));

// 4)
// Заполните массив 10-ю случайными целыми числами

let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Math.round(Math.random() * 100);
}
console.log(arr);