"use strict"

/*
//===== LOADING SCREEN =====\\
Idea: Uğur Cengiz ~ ugurcengiz@mail.com.tr ~ https://ugurcengiz.com
Author: Volkan Coşkun ~ webdvpv@gmail.com ~ https://volkancoskun.herokuapp.com
*/

interface Setter {
    placement: string[]
    style: string[]
    image: object
    animation: object
}

function inject_css(settings: Setter) {
    const head = document.head;

    head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${settings.css.path + settings.css.name}.css" />`);
}

function initialize_sequence(placement: Setter, settings: Setter) {
    /* IMPORT CSS FILE */
    inject_css(settings)

    /* PLACING MAIN ELEMENT */
    if (placement !== undefined) {
        if (placement[1] == "start") document.querySelector(placement[0]).insertAdjacentHTML("afterbegin", `<div class="loadingScreen"></div>`);
        else if (placement[1] == "end") document.querySelector(placement[0]).insertAdjacentHTML("beforeend", `<div class="loadingScreen"></div>`);
    }

    /* ADD STYLE TO THE MAIN ELEMENT */
    let loadingScreen = document.querySelector(".loadingScreen");

    for (let i = 0; i < settings.style.length; i++) loadingScreen.style.cssText += `${settings.style[i]}`

    /* IMAGE */
    loadingScreen.innerHTML = `<img src="${settings.image.path + settings.image.name}" alt="${settings.image.alt}">`

    /* ANIMATION */
    setTimeout(() => {
        loadingScreen.classList.add(settings.animation.name);
    }, settings.animation.close);
}