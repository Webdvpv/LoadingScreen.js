"use strict";
/*
//===== LOADING SCREEN =====\\
Idea: Uğur Cengiz ~ ugurcengiz@mail.com.tr ~ https://ugurcengiz.com
Author: Volkan Coşkun ~ webdvpv@gmail.com ~ https://volkancoskun.herokuapp.com
Github: https://github.com/Webdvpv/LoadingScreen.js
*/
var wrapper;
var head = document.head;
function inject_css(settings) {
    head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"".concat(settings.css.path + settings.css.name, ".css\" />"));
}
function loadingscreen(placement, settings) {
    /* PLACING MAIN ELEMENT (REQUIRED) */
    if (placement != undefined) {
        if (placement[1] == "start")
            document.querySelector(placement[0]).insertAdjacentHTML("afterbegin", "<div class=\"wrapper\"></div>");
        else if (placement[1] == "end")
            document.querySelector(placement[0]).insertAdjacentHTML("beforeend", "<div class=\"wrapper\"></div>");
        else
            console.error("Second value of Placement should be like: ['start'] or ['end']");
        if (placement[0] == undefined || placement[0] == "")
            console.error("First value of Placement should be like: ['body'] or ['.selector'] or ['#selector']");
    }
    else
        console.error("Missing 'placement' Array");
    /* PLACING MAIN ELEMENT (REQUIRED) END */
    /* SETTINGS OBJECT (REQUIRED)*/
    if (settings != undefined) {
        wrapper = document.querySelector(".wrapper");
        /* IMPORT CSS FILE (OPTIONAL) */
        if (settings.css != undefined) {
            if (Object.keys(settings.css).length != 0 && settings.css.name != undefined && settings.css.name != "" && settings.css.path != undefined && settings.css.path != "")
                inject_css(settings);
            else
                console.error("CSS path and name must be defined!");
        }
        else
            console.warn("You must add the stylesheet manually");
        /* IMPORT CSS FILE (OPTIONAL) END */
        /* IMAGE OBJECT */
        if (settings.image != undefined) {
            if (Object.keys(settings.image).length != 0 && settings.image.name != undefined && settings.image.name != "" && settings.image.path != undefined && settings.image.path != "") {
                wrapper.innerHTML = "<img src=\"".concat(settings.image.path + settings.image.name, "\" alt=\"").concat(settings.image.alt != undefined || settings.image.alt != "" ? settings.image.alt : "", "\">");
            }
            else
                console.error("Name and path must be defined!");
        }
        else
            console.error("Define image object!");
        /* IMAGE END */
        /* ANIMATION OBJECT (OPTIONAL)*/
        if (settings.animation != undefined) {
            setTimeout(function () {
                if (settings.animation.name != undefined && settings.animation.name != "")
                    wrapper.classList.add(settings.animation.name);
                else {
                    wrapper.classList.add("fadeToggle");
                }
            }, settings.animation.close != undefined || settings.animation.close != null ? settings.animation.close : 2000);
        }
        else {
            setTimeout(function () {
                wrapper.classList.add("fadeToggle");
            }, 2000);
        }
        /* ANIMATION END */
    }
    else
        console.error("Settings object cannot be empty. Set your settings.");
    /* SETTINGS END */
}
//# sourceMappingURL=loadingScreen.js.map