'use strict';

const numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log('Вы начинающий зритель :)');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы опытный зритель ;)');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы продвинутый киноман!');
} else {
    console.log('Произошла ошибка');
}

for (let i = 0; i < numberOfFilms; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ''),
          b = prompt("На сколько оцените его от 1 до 10?", '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0 && b < 11) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        i--;
        console.log('error');
    }
}


console.log(personalMovieDB);