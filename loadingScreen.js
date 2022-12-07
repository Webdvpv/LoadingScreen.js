"use strict";
/*
//===== LOADING SCREEN =====\\
Idea: Uğur Cengiz ~ ugurcengiz@mail.com.tr ~ https://ugurcengiz.com
Author: Volkan Coşkun ~ webdvpv@gmail.com ~ https://volkancoskun.herokuapp.com
Github: https://github.com/Webdvpv/LoadingScreen.js
*/
var wrapper, hrefs;
var head = document.head;
var images = document.querySelectorAll("img");
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
        // if (settings.animation != undefined) {
        //     setTimeout(() => {
        //         if (settings.animation.name != undefined && settings.animation.name != "") {
        //             if (settings.animation.toggleMode != undefined && settings.animation.toggleMode === true) window.sessionStorage.setItem('session_settings.animation.name', settings.animation.name)
        //             else wrapper.classList.add(`${settings.animation.name}`)
        //         }
        //         else {
        //             wrapper.classList.add("fadeToggle")
        //         }
        //     }, settings.animation.close != undefined || settings.animation.close != null ? settings.animation.close : 2000)
        // } else {
        //     setTimeout(() => {
        //         wrapper.classList.add("fadeToggle")
        //     }, 2000)
        // }
        /* ANIMATION END */
        Promise.all(Array.from(document.images).map(function (img) {
            if (img.complete)
                return Promise.resolve(img.naturalHeight !== 0);
            return new Promise(function (resolve) {
                img.addEventListener('load', function () { return resolve(true); });
                img.addEventListener('error', function () { return resolve(false); });
            });
        })).then(function (results) {
            // if (results.every(res => res)) {}
            // else {}
            wrapper.classList.add("fadeToggle");
            setTimeout(function () {
                wrapper.classList.add("d-none");
            }, 500);
        });
        // var interval = setInterval(function () {
        // }, 200)
    }
    else
        console.error("Settings object cannot be empty. Set your settings.");
    /* SETTINGS END */
}
function setLoadingScreenStatus(visibilityStatus) {
    if (window.sessionStorage.getItem("session_settings.animation.name") != undefined) {
        var currentSettingAnimationName = window.sessionStorage.getItem('session_settings.animation.name');
        if (visibilityStatus === false) {
            window.document.querySelector('.wrapper').classList.add(currentSettingAnimationName);
        }
        if (visibilityStatus === true) {
            window.document.querySelector('.wrapper').classList.remove(currentSettingAnimationName);
        }
    }
}
