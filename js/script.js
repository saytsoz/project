"use strict";

// type of var
// number
// let number = 4.6;
// console.log(-4/0);
// console.log('string' * 4);

// string
// const persone = "Alex";

// Boolean

// const bool = false;

// console.log(something);

// let  und;

// console.log(und);
// alert(und);


// object 


// const  obj = {
//     name: 'jone',
//     age: 25,
//     isMarried: false, 
// };

// console.log(obj.age);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, false, [], {}];
// console.log(arr[1]);

// const answer = confirm('Are you here?');
// console.log(answer);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));



// !!! все информация от пользователя приходят как строк


// const answers = [];

// answers[0] = prompt('Как тебя зовут', '');
// answers[1] = prompt('Как тебя фамилия', '');
// answers[2] = prompt('Сколькл вам лет', '');

// document.write(answers);

// канкатанация

// const category = 'toys';

// console.log('https://demo.uz/' + category + '/4');
// console.log(`https://demo.uz/${category}/4`);

// let user = 'Ivan';

// alert(`Привет ${user}`);


// console.log('arr' + "- obj");
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// console.log(4*2 == 8);
// console.log(4*2 === '8');
// console.log(2+2*2 !== '6');

// let isChaecked = true,
//     isClosed = true;

// console.log(isChaecked || isClosed);

// 1 - практика

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMoveDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = +prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = +prompt("На сколько оцените его?", "");

// personalMoveDB.movies[a] = b;
// personalMoveDB.movies[c] = d;

// console.log(personalMoveDB);


// Условия

// if(4 == 5){
//     console.log('Error');
// }else if{
//     console.log('Error');
// }else{
//     console.log('OK!')
// }

// const num = 49;

// // (num == '40') ? console.log('OK!') : console.log('Error');

// switch(num){
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 40:
//         console.log('Правильно');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// let num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// }
//  do{
//     console.log(num);
//     num++;
//  }
//  while(num < 55);


// for(let i = 1; i <= 8; i++){
//     if(i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// 2 - практика


// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMoveDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = +prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = +prompt("На сколько оцените его?", "");

// personalMoveDB.movies[a] = b;
// personalMoveDB.movies[c] = d;


// for(let i = 0; i < 2; i++){
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = +prompt("На сколько оцените его?", "");

//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMoveDB.movies[a] = b;
//         console.log(done);
//     }else{
//         console.log('error');
//         i--;
//     }

          
// }

// console.log(personalMoveDB);

// if(personalMoveDB.count < 10){
//     console.log("Просмотрено довольно мало фильмов");
// }else if(personalMoveDB.count >= 10 && personalMoveDB.count <= 30){
//     console.log("Вы классический зритель");
// }else if(personalMoveDB.count > 30){
//     console.log("Вы киноман");
// }else{
//     console.log("Произошла ошибка");
// }


// const farmDb = {
//     sheep: {},
//     cow:{}
// }

// for(let i = 0; i < 2; i++){
    
//     const a = prompt('cinde of sheep', ''),
//           b = prompt('count of sheep', '');
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         farmDb.sheep[a] = b;
//         console.log('done');
//     }else{
//         console.log('Error');
//         i--;
//     }
    
// }


// console.log(farmDb);



// function
// let num = 20;

// function showFirstMessage(text){
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('hello world');
// console.log(num);


// function calc(a, b){
//     return (a + b);
// }

// console.log(calc(4, 5));
// console.log(calc(5, 6));
// console.log(calc(8, 6));

// function ret(){
//     let num = 50;


//     return num;
// }

// const anotherNum = ret();

// console.log(anotherNum);

// const logger = function(){
//     console.log("Hello");
// };

// logger();


// const calculator = (a, b) =>{
//     return a + b;
// };

// console.log(calculator(5, 6));



// методы и своиство строка и чисел

// const str = "test";
// const arr = [1, 2, 3];

// console.log(str.length);
// console.log(arr.length);

function f(b) {
    let a = 12;
    return a + b + 35;
  }
  
  function g(x) {
    let m = 4;
    return f(m * x);
  }
  
  console.log(g(21));















































































































