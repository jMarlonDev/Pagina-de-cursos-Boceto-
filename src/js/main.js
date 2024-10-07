const bodyInicio = document.body;
//elementos del nav todo lo que el menu de navegacion principal
const nav = document.querySelector("#nav");
const containerNav = document.querySelector("#containerElementsNav");
const divElementsNav = document.querySelector("#divElements");
const signUp = document.querySelector("#divSignUp");

//elementos ancla que van a redigir a otra pagina que estan dentro de ( divElements )
const anchorCategories = document.querySelector("#categories");
const anchorTeachers = document.querySelector("#teachers");
const anchorSupport = document.querySelector("#support");

//parrafo que esta dentro del div de ( Sign Up ) 
const login = document.querySelector("#login");
//elemento ancla que va a redigirir a la pagina de inicio de seccion
const anchorSignUp = document.querySelector("#anchorSignUp");

// elemento div que contiene el texto principal de la pagina
const mainContent = document.querySelector("#containerTextPrincipal");
const coverElements = document.querySelector("#coverElements");
// elemento de titulo
const mainTitle = document.querySelector("#mainTitle");
const mainComment = document.querySelector("#mainComment");
// elemento que sirve de ancla para redirigir a la pagina de ver los cursos
const exploreCourses = document.querySelector("#botonExplore");
// elemento de la imagen principal que sirve de portada
const mainPicture = document.querySelector("#mainPicture");

//elemento del pie de pagina para organizar las redes sociales
const footer = document.querySelector("#footer");
const socialNetworks = document.querySelector("#socialNetworks");
const credits = document.querySelector("#credits");
const containerNetworks = document.querySelector("#containerNetworks");
const developer = document.querySelector("#developer");
//instagram
const linkInstagram = document.querySelector("#instagram");
//facebook
const linkFacebook = document.querySelector("#facebook");

//Estilos
body.classList.add("font-jetbrains", "font-bold");
nav.classList.add("mt-14");
containerNav.classList.add("flex", "flex-row", "justify-around");
divElementsNav.classList.add("flex", "gap-28", "items-center");
signUp.classList.add("flex", "gap-20", "flex-row-reverse", "items-center");

signUp.appendChild(login);

//agregando los tres elementos ancla a su contenedor (divElements)
divElementsNav.appendChild(anchorCategories);
divElementsNav.appendChild(anchorTeachers);
divElementsNav.appendChild(anchorSupport);
anchorCategories.classList.add("text-purple-900", "text-xl");
anchorTeachers.classList.add("text-purple-900", "text-xl");
anchorSupport.classList.add("text-purple-900", "text-xl");

//agregando los estilos a los elementos del contenerdor ( sign up )
login.classList.add("text-purple-900", "text-xl");
anchorSignUp.classList.add("text-purple-900", "text-xl");

//agregando el estilo al boton para crear una cuenta
anchorSignUp.classList.add("bg-orange-600", "text-white", "p-5", "rounded-full", "w-56", "text-center");
//agregando el enlace para redirigir a la pagina donde se debe crear la cuenta
anchorSignUp.href = "signUp.html";
anchorSignUp.target = "_blank";

//agregando los estilos al texto principal de la pagina
mainContent.classList.add("mt-10", "flex", "items-center");
coverElements.classList.add("ml-20", "flex", "flex-col", "gap-12");
mainTitle.classList.add("text-8xl", "text-purple-900", "mb-6");
mainComment.classList.add("text-gray-600", "text-2xl");
exploreCourses.classList.add("bg-orange-600", "max-w-64", "text-center", "p-6", "rounded-xl", "text-white", "text-xl");
mainPicture.classList.add("flex", "justify-center", "items-center");

// agregando los estilos para el pie de pagina y redigirir a las redes 
footer.classList.add("mt-16", "mb-10")
socialNetworks.classList.add("flex", "gap-14");
credits.classList.add("flex", "gap-x-96", "items-center");
containerNetworks.classList.add("flex", "justify-around");
developer.classList.add("text-purple-900", "text-xl");

//accediendo a mis cuentas de instagram y facebook
linkInstagram.href = "https://www.instagram.com/jmarlon07/";
linkInstagram.target = "_blank";

linkFacebook.href = "https://www.facebook.com/";
linkFacebook.target = "_blank";

exploreCourses.addEventListener("click", () => {
    exploreCourses.href = "../../courses.html";
})

