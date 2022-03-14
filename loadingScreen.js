"use strict";
function inject_css(settings) {
    var head = document.head;
    head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"".concat(settings.css.path + settings.css.name, ".css\" />"));
}
function initialize_sequence(placement, settings) {
    /* IMPORT CSS FILE */
    inject_css(settings);
    /* PLACING MAIN ELEMENT */
    if (placement !== undefined) {
        if (placement[1] == "start")
            document.querySelector(placement[0]).insertAdjacentHTML("afterbegin", "<div class=\"loadingScreen\"></div>");
        else if (placement[1] == "end")
            document.querySelector(placement[0]).insertAdjacentHTML("beforeend", "<div class=\"loadingScreen\"></div>");
    }
    /* ADD STYLE TO THE MAIN ELEMENT */
    var loadingScreen = document.querySelector(".loadingScreen");
    for (var i = 0; i < settings.style.length; i++)
        loadingScreen.style.cssText += "".concat(settings.style[i]);
    /* IMAGE */
    loadingScreen.innerHTML = "<img src=\"".concat(settings.image.path + settings.image.name, "\" alt=\"").concat(settings.image.alt, "\">");
    /* ANIMATION */
    setTimeout(function () {
        loadingScreen.classList.add(settings.animation.name);
    }, settings.animation.close);
}
