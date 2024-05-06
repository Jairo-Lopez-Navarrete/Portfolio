/*let icon = getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
}*/

const isDarkMode = localStorage.getItem("darkMode") === "true";

// Stel de donkere modus in op basis van de opgeslagen waarde
if (isDarkMode) {
    document.body.classList.add("dark-theme");
}

// Selecteer de dark mode knop
const icon = document.getElementById("icon");

// Wissel tussen donkere en lichte modus bij het klikken op de knop
icon.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    // Bewaar de huidige staat van de donkere modus in de localStorage
    const isDarkModeEnabled = document.body.classList.contains("dark-theme");
    localStorage.setItem("darkMode", isDarkModeEnabled);
});

/*function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
}
 */

/*const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
})
 */

/*let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('change', ()=> {
    document.body.classList.toggle('dark');
});

 */