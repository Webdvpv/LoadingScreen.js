"use strict"

/*
//===== LOADING SCREEN =====\\
Idea: Uğur Cengiz ~ ugurcengiz@mail.com.tr ~ https://ugurcengiz.com
Author: Volkan Coşkun ~ webdvpv@gmail.com ~ https://volkancoskun.herokuapp.com
*/

let loadingScreen;

document.addEventListener("DOMContentLoaded", function () {
    loadingScreen = document.querySelector(".loadingScreen");
})

function inject_css(settings) {
    const head = document.head;

    if (settings != undefined) head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${settings.css.path + settings.css.name}.css" />`);
}

function initialize_sequence(placement, settings) {
    if (settings != undefined) {
        /* IMPORT CSS FILE */
        if (settings.css != undefined) inject_css(settings)

        /* PLACING MAIN ELEMENT */
        if (placement !== undefined) {
            if (placement[1] == "start") document.querySelector(placement[0]).insertAdjacentHTML("afterbegin", `<div class="loadingScreen"></div>`);
            else if (placement[1] == "end") document.querySelector(placement[0]).insertAdjacentHTML("beforeend", `<div class="loadingScreen"></div>`);
        }

        /* IMAGE */
        if (placement !== undefined && settings.image != undefined) loadingScreen.innerHTML = `<img src="${settings.image.path + settings.image.name}" alt="${settings.image.alt != undefined || settings.image.alt != "" ? settings.image.alt : ""}">`

        /* ANIMATION */
        if (settings.animation != undefined) {
            setTimeout(() => {
                if (settings.animation.name != undefined && settings.animation.name != "") {
                    loadingScreen.classList.add(settings.animation.name);
                } else {
                    loadingScreen.classList.add("fadeToggle");
                }
            }, settings.animation.close != undefined || settings.animation.close != null ? settings.animation.close : 2000);
        } else {
            setTimeout(() => {
                loadingScreen.classList.add("fadeToggle");
            }, 2000);
        }
    } else {
        setTimeout(() => {
            loadingScreen.classList.add("fadeToggle");
        }, 2000);
    }
}