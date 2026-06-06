const hamburger = document.getElementById("hamburger-wrapper");
const hamburger_nav = document.getElementById("hamburger-nav-wrapper");
const hamburger_icon = document.getElementById("hamburger");

function fade(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 5);
}

function unfade(element) {
    var op = 0.1;
    element.style.display = 'flex';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 5);
}

function displayNavigationMenu() {
    if (hamburger_nav.style.display == "none") {
        // hamburger_nav.style.display = "flex";
        unfade(hamburger_nav);
        hamburger_icon.src = "asset/x_icon.png";
    } else {
        // hamburger_nav.style.display = "none";
        fade(hamburger_nav);
        hamburger_icon.src = "asset/hamburger.png";
    }
}

hamburger.addEventListener("click", displayNavigationMenu);