/*
//===== LOADING SCREEN =====\\
Idea: Uğur Cengiz ~ ugurcengiz@mail.com.tr ~ https://ugurcengiz.com
Author: Volkan Coşkun ~ webdvpv@gmail.com ~ https://volkancoskun.tk
*/

const settings = {
    selfStarting: true,
    loadingScreen: {
        defaultPlace: document.querySelector("body"),
        closingTime: 2000,
        animationTime: 500,
        templateList: {
            default: `<div class="loadingScreen">Loading...</div>`,
            gif: {
                0: `<div class="loadingScreen gif-0"><img src="./assets/gifset/0.gif" alt="" /></div>`,
                1: `<div class="loadingScreen gif-1"><img src="./assets/gifset/1.gif" alt="" /></div>`,
                2: `<div class="loadingScreen gif-2"><img src="./assets/gifset/2.gif" alt="" /></div>`,
                3: `<div class="loadingScreen gif-3"><img src="./assets/gifset/3.gif" alt="" /></div>`
            },
            animated: {}
        }
    },
    // Screen closing time
    screenTimeOut: function (animationName/* Any css class for closing animation */, closingAnimationClass) {
        setTimeout(() => {
            // this class must be attached if you using custom template
            document.querySelector(".loadingScreen").classList.add(animationName);
            setTimeout(() => {
                if (closingAnimationClass == "fadeToggle") document.querySelector(".loadingScreen").classList.add("d-none");
            }, this.loadingScreen.animationTime/* millisecond */);
        }, this.loadingScreen.closingTime/* millisecond */);
    },
    /**
    * @param {string} customPlace "" || "selector"
    * @param {string} customTemplate "" || "tag"
    * @param {string} templateName Choose your template in templateList - "" || "gif-name"
    * @param {string} closingAnimationClass Closing animation class (default: fadeToggle)
    * @param {string} fileName Name your css file if you want - "" || "fileName"
    */
    run: function (customPlace, customTemplate, templateName, closingAnimationClass, fileName) {
        const head = document.head;

        head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${settings.cssFile.path + settings.cssFile.fileName == "loadingScreen" ? settings.cssFile.fileName : fileName}.css" />`);

        this.screenTimeOut(closingAnimationClass, closingAnimationClass);

        // Gifs
        if (customPlace == "" && customTemplate == "" && templateName == "default") this.loadingScreen.defaultPlace.insertAdjacentHTML("afterbegin", this.loadingScreen.templateList.default);
        else if (customPlace == "" && customTemplate == "" && templateName == "gif-0") this.loadingScreen.defaultPlace.insertAdjacentHTML("afterbegin", this.loadingScreen.templateList.gif[0]);
        else if (customPlace == "" && customTemplate == "" && templateName == "gif-1") this.loadingScreen.defaultPlace.insertAdjacentHTML("afterbegin", this.loadingScreen.templateList.gif[1]);
        else if (customPlace == "" && customTemplate == "" && templateName == "gif-2") this.loadingScreen.defaultPlace.insertAdjacentHTML("afterbegin", this.loadingScreen.templateList.gif[2]);
        else if (customPlace == "" && customTemplate == "" && templateName == "gif-3") this.loadingScreen.defaultPlace.insertAdjacentHTML("afterbegin", this.loadingScreen.templateList.gif[3]);
        else document.querySelector(customPlace).insertAdjacentHTML("afterbegin", customTemplate);
    },
    cssFile: {
        path: "",
        fileName: "loadingScreen"
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (settings.selfStarting) settings.run("", "", "gif-3", "fadeToggle", "");
    else return;
})

