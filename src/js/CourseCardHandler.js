export const CourseCardHandler = {
    create: (title, img) => {
        const body = document.body;
        //creando los contenedores
        let containerCourses = document.querySelector("#containerCourse");
        const courses = document.createElement("div");
        const imageContainer = document.createElement("div");
        const subtitleContainer = document.createElement("div");

        //creando los elementos que va a ir dentro de los contenedores
        const iconCourse = document.createElement("i");
        const imgCourse = document.createElement("img");
        const paragraphCourse = document.createElement("p");
        const buttonCourse = document.createElement("button");

        //poniendo la condicion al contenedor de los cursos
        if (!containerCourses) {
            containerCourses = document.createElement("div");
            containerCourses.id = "containerCourse";
            containerCourses.classList.add("grid", "grid-cols-4", "gap-8", "pt-12", "ml-10");
            body.appendChild(containerCourses);
        };

        //dandole las propiedades a los elementos


        //dandole los estilos a como se va a mostrar el contenido de cada curso
        courses.classList.add("max-w-96", "bg-[#d7d7d7]", "flex", "flex-col", "justify-center", "items-center", "p-6", "rounded-xl");
        paragraphCourse.classList.add("text-center");
        imgCourse.classList.add("w-80");
        imageContainer.classList.add("relative");
        iconCourse.classList.add("bi", "bi-three-dots-vertical", "absolute", "top-4", "right-2", "text-2xl", "text-white", "bg-gray-500", "p-2", "rounded-sm");
        buttonCourse.classList.add("py-3", "w-80", "bg-orange-600", "text-white", "rounded-xl", "text-center", "ml-7", "mt-8");
        buttonCourse.textContent = "Go To Course";
        subtitleContainer.classList.add("py-4", "flex", "flex-col", "items-center");

        paragraphCourse.textContent = title;
        imgCourse.src = img;

        //agregando los elementos a los contenedores correspondientes
        imageContainer.appendChild(iconCourse);
        imageContainer.appendChild(imgCourse);

        subtitleContainer.appendChild(paragraphCourse);
        subtitleContainer.appendChild(buttonCourse);

        courses.appendChild(imageContainer);
        courses.appendChild(subtitleContainer);
        containerCourses.appendChild(courses);
    }
}

