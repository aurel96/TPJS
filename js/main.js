
import { GetFILM } from "./class.js";

let form = document.querySelector('#form')
let nameFilm = document.querySelector('#name')
let btn = document.querySelector('#btn')
let err = document.querySelector('#erreur')
let res = document.querySelector('#nbrR')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(nameFilm.value == "" ) {
        res.innerHTML = ""
    } else {
        let getAllFilm = new GetFILM()
        getAllFilm.getAllFilmName(nameFilm.value)
        nameFilm.value = ""
    }
})