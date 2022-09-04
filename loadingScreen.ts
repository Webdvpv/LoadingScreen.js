"use strict"

/*
//===== LOADING SCREEN =====\\
Idea: Uğur Cengiz ~ ugurcengiz@mail.com.tr ~ https://ugurcengiz.com
Author: Volkan Coşkun ~ webdvpv@gmail.com ~ https://volkancoskun.herokuapp.com
Github: https://github.com/Webdvpv/LoadingScreen.js
*/

let wrapper: HTMLElement
const head = document.head

type Keys = {
    name: string,
    path: string,
    alt: string,
    close: number,
    toggleMode: boolean
}

interface Objects {
    css: Keys
    image: Keys
    animation: Keys
}

function inject_css(settings) {
    head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${settings.css.path + settings.css.name}.css" />`)
}

function loadingscreen(placement: Array<string>, settings: Objects) {

    /* PLACING MAIN ELEMENT (REQUIRED) */
    if (placement != undefined) {
        if (placement[1] == "start") document.querySelector(placement[0]).insertAdjacentHTML("afterbegin", `<div class="wrapper"></div>`)
        else if (placement[1] == "end") document.querySelector(placement[0]).insertAdjacentHTML("beforeend", `<div class="wrapper"></div>`)
        else console.error("Second value of Placement should be like: ['start'] or ['end']")

        if (placement[0] == undefined || placement[0] == "") console.error("First value of Placement should be like: ['body'] or ['.selector'] or ['#selector']")
    } else console.error("Missing 'placement' Array")
    /* PLACING MAIN ELEMENT (REQUIRED) END */

    /* SETTINGS OBJECT (REQUIRED)*/
    if (settings != undefined) {
        wrapper = document.querySelector(".wrapper")

        /* IMPORT CSS FILE (OPTIONAL) */
        if (settings.css != undefined) {
            if (Object.keys(settings.css).length != 0 && settings.css.name != undefined && settings.css.name != "" && settings.css.path != undefined && settings.css.path != "") inject_css(settings)
            else console.error("CSS path and name must be defined!")
        }
        else console.warn("You must add the stylesheet manually")
        /* IMPORT CSS FILE (OPTIONAL) END */

        /* IMAGE OBJECT */
        if (settings.image != undefined) {
            if (Object.keys(settings.image).length != 0 && settings.image.name != undefined && settings.image.name != "" && settings.image.path != undefined && settings.image.path != "") {
                wrapper.innerHTML = `<img src="${settings.image.path + settings.image.name}" alt="${settings.image.alt != undefined || settings.image.alt != "" ? settings.image.alt : ""}">`
            } else console.error("Name and path must be defined!")
        } else console.error("Define image object!")
        /* IMAGE END */

        /* ANIMATION OBJECT (OPTIONAL)*/
        if (settings.animation != undefined) {

            setTimeout(() => {
                if (settings.animation.name != undefined && settings.animation.name != "") {

                    if(settings.animation.toggleMode != undefined){
                        if(settings.animation.toggleMode === true){
                            window.sessionStorage.setItem('session_settings.animation.name', settings.animation.name);
                        }else{
                            wrapper.classList.add(`${settings.animation.name}`)
                        }
                    }else{
                        wrapper.classList.add(`${settings.animation.name}`)
                    }

                        if(settings.animation.toggleMode == undefined || settings.animation.toggleMode === false){
                            setTimeout(() => {
                                wrapper.classList.add("d-none")
                            }, settings.animation.close != undefined || settings.animation.close != null ? settings.animation.close : 2000);
                        }

                }
                else {
                    wrapper.classList.add("fadeToggle")
                }
            }, settings.animation.close != undefined || settings.animation.close != null ? settings.animation.close : 2000)

        } else {

            setTimeout(() => {
                wrapper.classList.add("fadeToggle")
            }, 2000)

        }
        /* ANIMATION END */

    }
    else console.error("Settings object cannot be empty. Set your settings.")
    /* SETTINGS END */
}

function setLoadingScreenStatus(visibilityStatus: Boolean){
    if(window.sessionStorage.getItem("session_settings.animation.name") != undefined){
        let currentSettingAnimationName = window.sessionStorage.getItem('session_settings.animation.name');
        if(visibilityStatus === false){
            window.document.querySelector('.wrapper').classList.add(currentSettingAnimationName);
        }

        if(visibilityStatus === true){
            window.document.querySelector('.wrapper').classList.remove(currentSettingAnimationName);
        }
    }
}

/*
Ajax features will come soon. Also you can be contributor of this library.
*/