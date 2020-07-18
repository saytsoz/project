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


const numberOfFilms = [];

numberOfFilms[0] = +prompt("Сколько фильмов вы уже посмотрели?", "");

const films = [];
films[1] = prompt("Один из последних просмотренных фильмов?", "");
films[2] = +prompt("На сколько оцените его?", "");

const personalMoveDB = {
    count: numberOfFilms[0],
    movies: {
        name_film: films[1],
        vote_film: films[2],
    },
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMoveDB);


















































