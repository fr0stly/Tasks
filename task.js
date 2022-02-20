// Базовые математические операторы//

// 1)
let min = (a, b) => a - b;
console.log(min(3, 1));
// 2)
let sum = (a, b) => a + b;
console.log(sum(3, 5));
// 3)
let mult = (a, b) => a * b;
console.log(mult(2, 5));
// 4)
let deg = (a, b) => a / b;
console.log(deg(9, 3));
// 5)
let rem = (a, b) => a % b;
console.log(rem(9, 2));
// 6)
let ext = (a, b, c) => a ** (b / c);
console.log(ext(4, 1, 2));


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


// Вывод чисел от 10 до 50, которые кратны 5

// 1)
let i = 10;
while (i <= 50) {
    if ((i % 5) == 0) {
        console.log(i);
    }
    i++;
};

// 2)
let i = 10;
do {
    if ((i % 5 == 0)) {
        console.log(i);
    }
    i++;
} while (i <= 50);

// 3)
for (let i = 10; i <= 50; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
};

// Найти сумму чисел в пределах от 1 до 100

// 1)
let sum = 0;
for (let i = 1; i <= 100; i++) {
    console.log(sum += i);
};

// 2)
let sum = 0;
let i = 1;
while (i <= 100) {
    i++;
    console.log(sum += i);
};

// 3)
let sum = 0;
let i = 1;
do {
    console.log(sum += i);
    i++;
} while (i <= 100);

// Предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

// 1)
while (true) {
    let value = +prompt('2 + 2 * 2')
    if (value == 6) break;
}

// 2)
do {
    let value2 = +prompt('2 + 2 * 2');
    if (value2 == 6) break;
} while (true);

// 3)
for (i = 0; true;) {
    let value3 = +prompt('2 + 2 * 2');
    if (value3 == 6) break;
}

// Создать объект, добавить в него свойства, вывести свойства объекта, удалить свойство объекта, переопределить значения свойств объекта

// 1)

let user = {
    firstName: 'John',
    surName: 'Lebovskiy',
    age: 36
}
console.log(user);
console.log(user.firstName);
console.log(user.age);

// 2)

delete user.age;
console.log(user);

// 3)

user.firstName = 'Dude';
console.log(user);

// Создать валидацию возраста пользователя от 18+ лет, разными способами

// 1)
let age = prompt("Введите свой возраст");

let welcome = (age < 18) ?
    () => alert("Доступ закрыт") :
    () => alert("Доступ разрешен: Здравствуйте!");
welcome();

// 2)
let age = prompt("Введите свой возраст");
if (checkAge(age)) {
}

function checkAge(age) {
    if (age >= 18) {
        return alert("Получите свой заказ");
    }
    else {
        return alert("Родители разрешили?");
    }
}

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
        console.log('Hello')
    },
    [1, 5, 7, 9, 12, 16],
];

console.log(arr[1]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

arr.push('John');
arr.unshift({
    name: 'Peter',
    age: 25,
});
console.log(arr);

arr.splice(2, 2);
console.log(arr);


arr.splice(5, 2, "Sara", "David");
console.log(arr);

// 1)
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

let array = [4, -2, 5, 19, -130, 0, 10];
min = array[0];
max = min;
for (i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
}
console.log(min);
console.log(max);

// 2)
// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let arr = [12, 15, 20, 25, 59, 79];
let reduceValue = arr.reduce((prev, item) => prev + item, 0);

let result = reduceValue / arr.length;
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