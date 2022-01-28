const langW = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
const aboutv = document.querySelector(".about");
const educationv = document.querySelector(".education");
const skilsv = document.querySelector(".skils");
const galleryv = document.querySelector(".gallery");

link.forEach(el => {
    el.addEventListener('click' , () => {
        const attr = el.getAttribute('language');

        
        aboutv.textContent = data[attr].about;
        educationv.textContent = data[attr].education;
        skilsv.textContent = data[attr].skils;
        galleryv.textContent = data[attr].gallery;
    })
})

var data = {
    "armenia": {
        "about": "Մեր Մասին",
        "education": "Կրթություն",
        "skils": "Հմտություններ",
        "gallery": "Նկարներ",
    },

    "russia": {
        "about": "о нас",
        "education": "образование",
        "skils": "навыки",
        "gallery": "галерея",
    },

    "america": {
        "about": "about",
        "education": "education",
        "skils": "skills",
        "gallery": "gallery",
    },
}