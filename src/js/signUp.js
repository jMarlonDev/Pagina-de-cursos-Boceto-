
//elementos de la navegacion
const navSignUp = document.querySelector("#navSignUp");
const navElements = document.querySelector("#navElements");
const links = navElements.querySelectorAll("a");
const body = document.body;
//elementos del formulario
const containerForm = document.querySelector("#containerForm");
const form = document.querySelector("#form");
const containerName = document.querySelector("#containerName");
const personalData = document.querySelector("#personalData");
const dateBirthday = document.querySelector("#birthday");
const legendPersonaldData = document.querySelector("#legendPersonalData");
const legendAuthentication = document.querySelector("#legendAuthentication");
const elementsLabel = document.querySelectorAll("label");
const elementsInput = document.querySelectorAll("input");
const personalDataName = document.querySelector("#personalDataName");
const personaLastName = document.querySelector("#personaLastName");
const divEmail = document.querySelector("#divEmail");
const divPasswords = document.querySelector("#divPasswords");
const titleAccount = document.querySelector("#titleAccount");
const iconTitle = document.querySelector("i");
const btnSignUp = document.getElementById("btnSignUp");

//obteniendo el valor de todos los campos del formulario 
//obteniendo el valor del input del nombre
const nameInput = document.querySelector("#nameInput");
//expresion regular para validar el nombre
const namePattern = /^[A-ZÀ-Ÿ][a-zà-ÿ\s'-]{0,39}$/;

//obteniendo el valor del input de apellido
const lastNameInput = document.querySelector("#lastNameInput");
const lastNamePattern = /^[A-ZÀ-Ÿ][a-zà-ÿ\s'-]{0,39}$/;

//obteniendo el valor del input de email
const emailInput = document.querySelector("#emailInput");
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

//obteniendo el valor de los inputs de la constraseña
const passwordInput = document.querySelector("#passwordInput");
const confirmPassword = document.querySelector("#confirmPassword");
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

// agregando los estilos a la navegacion
navSignUp.classList.add("p-12", "border-b-4", "border-b-purple-900");
navElements.classList.add("flex", "justify-around", "items-center");
links.forEach((link) => {
    link.classList.add("text-purple-900", "text-xl");
});

//agregando los estilos para el formulario
form.classList.add("bg-white", "border-4", "border-black", "h-auto", "pt-14", "mb-10", "flex", "flex-col", "items-center");
containerForm.classList.add("flex", "justify-center", "bg-purple-200");
containerName.classList.add("flex", "flex-col");
personalData.classList.add("flex", "gap-24", "mt-4", "justify-around");
dateBirthday.classList.add("flex", "items-center", "gap-8", "mt-10", "flex-col");
legendPersonaldData.classList.add("text-center", "text-xl", "text-orange-700", "pb-4");
personalDataName.classList.add("flex", "flex-col", "gap-2", "items-center");
personaLastName.classList.add("flex", "flex-col", "gap-2", "items-center");
legendAuthentication.classList.add("text-center", "pt-8", "text-xl", "text-orange-700", "pb-10");
divEmail.classList.add("flex", "flex-col", "items-center", "gap-2", "pb-10")
divPasswords.classList.add("flex", "gap-14", "pb-7", "justify-around");
titleAccount.classList.add("bg-purple-200", "text-purple-900");
iconTitle.classList.add("flex", "justify-center", "gap-4", "text-2xl", "items-center", "p-12");
btnSignUp.classList.add("bg-purple-900", "w-80", "items-center", "p-3", "rounded-xl", "mb-6", "mt-6", "text-xl", "text-white");


elementsLabel.forEach((label) => {
    label.classList.add("text-purple-900", "text-xl");
});

elementsInput.forEach((input) => {
    input.classList.add("p-2", "border-2", "border-purple-900", "rounded-xl");
});


// ----- Creación del contenedor de sistema de notificaciones notificaciones 
//contenedor principal de las notificaciones
const containerNotifications = document.querySelector("#notificationsContainer");
containerNotifications.classList.add("fixed", "translate-x-full", "left-56", "top-[39%]", "-translate-y-1/2", "space-y-8", "w-[826px]", "overflow-hidden");

const notificationHandler = {
    add: (title, description) => {
        const divNotification = notificationHandler.create(title, description);
        containerNotifications.appendChild(divNotification);
    },

    create: (title, description) => {
        const divNotification = document.createElement("div");
        divNotification.classList.add("w-[43%]");
        const titleContent = document.createElement("div");
        const contentDescription = document.createElement("div");
        const titleNoti = document.createElement("p");
        const descriptionNoti = document.createElement("p");
        const iconSadFace = document.createElement("i");
        const iconClose = document.createElement("i");

        titleNoti.textContent = title;
        descriptionNoti.textContent = description;

        divNotification.classList.add("w-2/5");
        titleNoti.classList.add("text-xl", "text-white");
        titleContent.classList.add("flex", "items-center", "justify-between", "p-2", "bg-red-700", "rounded-t-xl");
        iconSadFace.classList.add("bi", "bi-emoji-frown-fill", "text-2xl", "text-white");
        iconClose.classList.add("bi", "bi-x-circle-fill", "text-2xl", "text-white");
        contentDescription.classList.add("bg-red-100", "rounded-b-xl", "p-2");

        titleContent.appendChild(iconSadFace);
        titleContent.appendChild(titleNoti);
        titleContent.appendChild(iconClose);
        contentDescription.appendChild(descriptionNoti);
        divNotification.appendChild(titleContent);
        divNotification.appendChild(contentDescription);

        iconClose.addEventListener("click", () => {
            containerNotifications.removeChild(divNotification);

        });
        return divNotification;
    },
};


//funcion para crear un mensaje de que la cuenta ya se creo correctamente
function createMessage(nameValue) {
    if (nameInput && lastNameInput && emailInput && passwordInput) {
        setTimeout(() => {
            titleAccount.classList.add("hidden");
            //containerForm.classList.add("bg-purple-200");
            form.classList.add("mt-40");
            form.innerHTML = `
            <div class="mt-14">
                <div class="flex flex-col justify-center items-center">
                    <h4 class="text-center text-gray-600 text-xl">Registered account</h4>
                    <img src="../../assets/verificado.png" alt="icono de " class="max-w-44">
                </div>
                <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=00DF29&center=true&random=false&width=800&lines=Felicidades,+${encodeURIComponent(nameValue)}!+Tu+cuenta+ha+sido+creada+correctamente"
                alt="titulo typing" class="mt-8">
                </br>
                <div class="flex justify-center items-center mb-11">    
                    <a class="bg-purple-500 max-w-64 text-center p-6 rounded-xl text-white text-xl" href="../../index.html">Go to home page</a>
                <div>
            </div >
            `;
        }, 1200);
    }
}


//validando los campos del formulario 
btnSignUp.addEventListener("click", event => {
    event.preventDefault();
    const nameValue = nameInput.value;
    const lastNameValue = lastNameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPassword.value;
    let isValidForm = true;


    if (namePattern.test(nameValue)) {
        nameInput.classList.remove("border-red-500");
        nameInput.classList.add("border-purple-900");
    } else {
        nameInput.classList.add("border-red-500");
        nameInput.classList.remove("border-purple-900");
        notificationHandler.add("Nombre", "El nombre está incorrecto: no puede contener números, ni signos, debe tener la primera letra mayuscula y solo 40 caracteres");
        isValidForm = false;
    };

    if (lastNamePattern.test(lastNameValue)) {
        lastNameInput.classList.remove("border-red-500");
        lastNameInput.classList.add("border-purple-900");

    } else {
        lastNameInput.classList.add("border-red-500");
        lastNameInput.classList.remove("border-purple-900");
        notificationHandler.add("Apellido", "El apellido esta incorrecto: no puede contener numeros, ni signos especiales, con alcance maximo de 40 caracteres");
        isValidForm = false;

    };

    if (emailPattern.test(emailValue)) {
        emailInput.classList.remove("border-red-500");
        emailInput.classList.add("border-purple-900");

    } else {
        emailInput.classList.add("border-red-500");
        emailInput.classList.remove("border-purple-900");
        notificationHandler.add("Correo Electronico", "El email esta incorrecto: debe tener (.com ó .co ), debe tener un ( @ ) y no puede estar vació");
        isValidForm = false;
    };

    if (passwordValue === "" || confirmPasswordValue === "") {
        passwordInput.classList.remove("border-purple-900");
        confirmPassword.classList.remove("border-purple-900");
        passwordInput.classList.add("border-red-500");
        confirmPassword.classList.add("border-red-500");
        notificationHandler.add("Password", "La contraseña esta incorrecta: No puede estar el campo vació y deben ser iguales, no puede contener signos especiales, solo letras y numeros");
        isValidForm = false;
    }
    else if (passwordValue !== confirmPasswordValue) {
        passwordInput.classList.remove("border-purple-900");
        confirmPassword.classList.remove("border-purple-900");
        passwordInput.classList.add("border-red-500");
        confirmPassword.classList.add("border-red-500");
        notificationHandler.add("Password", "La contraseña esta incorrecta: No puede estar el campo vació y deben ser iguales, no puede contener signos especiales, solo letras y numeros");
        isValidForm = false;
    } else {
        passwordInput.classList.remove("border-red-500");
        confirmPassword.classList.remove("border-red-500");
        passwordInput.classList.add("border-purple-900");
        confirmPassword.classList.add("border-purple-900");
        //notificationHandler.add("Password", "La contraseña esta incorrecta: No puede estar el campo vació, no puede contener signos especiales, solo letras y numeros");
    };

    if (isValidForm) {
        createMessage(nameValue);
        form.reset();
    }

    btnSignUp.classList.add("animate__animated", "animate__tada");
});









