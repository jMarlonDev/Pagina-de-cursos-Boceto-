//importando el archivo de JS del ComandHandler que va a crear los cursos

import { CourseCardHandler } from './CourseCardHandler.js';

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadCourses();
};

async function loadCourses() {
    const courseData = "/data/courses.json";
    const courses = await getJSON(courseData);
    courses.arrayCourses.forEach((course) => {
        CourseCardHandler.create(
            course.title,
            course.img,
        );
    });
};

async function getJSON(url) {
    const result = await fetch(url);
    const json = await result.json();
    return json;
};


//selecionando lo elementos de la navegacion
const body = document.body;
const navCourses = document.querySelector("#navCourses");
const containerElements = document.querySelector("#containerElements");
const divElements = document.querySelector("#divElements");
const home = document.querySelector("#home");
const anchorHome = document.querySelector("#anchorHome");
const redirectionElements = document.querySelectorAll("a");

//selecionando los elementos de el contenedor principal que va a contener a los cursos
const containerCourses = document.querySelector("#containerCourse");


//agregando los estilos a el  menu de navegación de courses
body.classList.add("font-jetbrains", "font-bold");
navCourses.classList.add("mt-14", "border-b-2", "border-b-purple-900", "pb-10");
containerElements.classList.add("flex", "flex-row", "justify-around");
divElements.classList.add("flex", "gap-28", "items-center");


redirectionElements.forEach((anchor) => {
    anchor.classList.add("text-purple-900", "text-xl");
});

home.classList.add("flex", "items-center", "bg-orange-600", "text-white", "p-5", "pl-20", "rounded-full", "w-56", "text-xl");
anchorHome.classList.remove("text-purple-900");
anchorHome.classList.add("text-white");
anchorHome.addEventListener("click", () => {
    anchorHome.href = "../../index.html";

});

