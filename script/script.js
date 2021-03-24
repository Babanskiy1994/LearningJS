'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt("Сколько фильмов ты посмотрел?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов ты посмотрел?", '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < personalMovieDB.count; i++) {
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
    },
    detecePersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            console.log('Вы начинающий зритель :)');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы опытный зритель ;)');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы продвинутый киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
     },
     toggleVisibleMyDB: function(){
         if (personalMovieDB.privat){
            personalMovieDB.privat = false;
         } else {
            personalMovieDB.privat = true;
         }
     },
     writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимы жанр под номером ${i}`);

            if (genre == '' || genre == null){
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    }
};