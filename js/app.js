// Exercise 1 global variables
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let people = [];

// Exercise 3 global variables
const P = new Pokedex.Pokedex();
const pokeOptions = {
    protocol: "http",
    hostname: "127.0.0.1:5500",
    versionPath: "/api/v2",
    cache: true,
    timeout: 60 * 1000,
    cacheImages: true
}


$('document').ready(function () {
    // Exercise 1 setup


    // Exercise 2 setup


    // Exercise 3 setup

});

////////////////////////////////////////////////////////
///////////// Exercise 1 functions /////////////////////
////////////////////////////////////////////////////////

function getFormFields() {

}

function setFormFields(fname, lname, email) {

}

function getRandomPersonData() {

}

function addPerson(first, last, email) {

}

function showPeopleJSON() {

}

function clearPeople() {

}

function ex1setLoading(show) {

}

////////////////////////////////////////////////////////
///////////// Exercise 2 functions /////////////////////
////////////////////////////////////////////////////////
function getGeo() {

}

function ex2setLoading(show) {

}

function setWeather(data) {

}

////////////////////////////////////////////////////////
///////////// Exercise 3 functions /////////////////////
////////////////////////////////////////////////////////
function getPokemon() {

}

function addPokemon(pokemon) {
    
}

function random(min, max) {
    return Math.random() * (Math.abs(min) + max) + min;
}