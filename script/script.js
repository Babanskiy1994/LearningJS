'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detecePersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        console.log('Вы начинающий зритель :)');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы опытный зритель ;)');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы продвинутый киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

detecePersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
       console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGanres() {
    for (let i = 1; i <= personalMovieDB.count; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`);
    }
}

writeYourGanres();