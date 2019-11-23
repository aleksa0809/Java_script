var img = document.querySelector("img");
img.addEventListener("click", toggleSunMoon);

function toggleSunMoon(event) {
    var src = img.src;
    if (/sun.jpg/.test(src)) img.src = "moon.jpg";
    else img.src = "sun.jpg";
}