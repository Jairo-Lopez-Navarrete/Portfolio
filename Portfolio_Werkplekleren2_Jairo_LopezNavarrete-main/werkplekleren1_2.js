const icon = document.getElementById("icon");
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Stel de donkere modus in op basis van de opgeslagen waarde
if (isDarkMode) {
    document.body.classList.add("dark-theme");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

// Wissel tussen donkere en lichte modus bij het klikken op de knop
icon.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    // Bewaar de huidige staat van de donkere modus in de localStorage
    const isDarkModeEnabled = document.body.classList.contains("dark-theme");
    localStorage.setItem("darkMode", isDarkModeEnabled);

    // Verander het pictogram tussen maan en zon
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});





const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('showText')
        }
        else{
            entry.target.classList.remove('showText');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddenText');
hiddenElements.forEach((element) => observer.observe(element));

//bewegende text
