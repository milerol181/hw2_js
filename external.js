
'use strict';

var numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "0");

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2 ; ++i){
let maxSize = 50;
var nameFilm = prompt("Один из последних просмотренных фильмов?");
var markFilm = prompt("Оценка фильма?", "0");

    if (nameFilm != null && markFilm != null && nameFilm != "" && markFilm && nameFilm != "" && nameFilm.length < maxSize ) {
        personalMovieDB.movies[nameFilm] = markFilm;
    } else {
        --i;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фиольмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 50) {
    console.log("Вы киноман");
} 
    else {
        console.log("Ошибка");
    }

writeYourGenres();
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
for (var i = 1; i < 4 ; ++i){
    var favGenres = prompt(`Ваш любимый жанр под номером: ${i}`,"");
    personalMovieDB.genres[i - 1] = favGenres;
    }
}

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
