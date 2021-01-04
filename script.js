var str = prompt('введите своё имя');
console.log(str);
alert(str);

var str = prompt('введите фамилию');
console.log(str);
alert(str);

var num = +prompt('введите возраст');
alert(num)
console.log(num);

var num = +prompt('подтвердите что вы не робот решив несколько задач: 7+75');
alert(num);
console.log( '7 + 75 =' +  (7+75) );


var num = +prompt('умножте числа: 7 * 7');
alert(num);
console.log( '7 * 7 =' +  (7 * 7) );



var num = +prompt('отделите числа: 50 / 10');
alert(num);
console.log( '50 / 10 =' +  (50/10) );



var num = +prompt('сколько будет остаток от деления: 10 % 8');
alert(num);
console.log( '10 % 8 =' +  (10 % 8));

var num = +prompt('Последний вопрос "прибавьте возраст Мадины к возрасту Севинч. Возраст Мадины: 30-6 Возраст Севинч 20-5" если найдёте правильный ответ вы будете зарегистрированы на наш сайт');
// alert(num);
alert('ВЫ ЗАРЕГИСТРИРОВАНЫ');
var madina = (30-6);
var sevinch = (20-5);
var otvet = ("правильный ответ:")
console.log(otvet + (madina + sevinch));





