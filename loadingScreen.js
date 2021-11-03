/*
//===== LOADING SCREEN =====\\
Idea: Uğur Cengiz ~ ugurcengiz@mail.com.tr ~ https://ugurcengiz.com
Author: Volkan Coşkun ~ webdvpv@gmail.com ~ https://volkancoskun.tk
*/

document.addEventListener("DOMContentLoaded", function () {
    /**
     * @param useCustom Eğer true ise settings.run fonksiyonunun parametreleri aktif olur.
     * @param defaultTemplate Defines default template
     * @param customTemplate Defines custom template
     * @param defaultPlace By default, it is placed at the beginning of the body tag.
     * @param customPlace Specifies where to insert the element.
     * @param closingTime Sets the element's closing time.
     * @param run Executes the script. Automatically executes itself as default.
     * @param cssFile Defines path and name of main style file.
     */
    const settings = {
        useCustom: false,
        loadingScreen: {
            defaultTemplate: `<div class="loadingScreen">Loading...</div>`,
            defaultPlace: document.querySelector("body"),
            closingTime: 1000
        },
        screenTimeOut: function () {
            setTimeout(() => {
                document.querySelector(".loadingScreen").classList.add("fadeToggle");
            }, this.loadingScreen.closingTime);
        },
        run: function (customPlace, customTemplate) {
            const head = document.head;

            head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${settings.cssFile.path + settings.cssFile.fileName}.css" />`);

            this.screenTimeOut();

            if (!this.useCustom) {
                this.loadingScreen.defaultPlace.insertAdjacentHTML("afterbegin", this.loadingScreen.defaultTemplate);
            } else {
                document.querySelector(customPlace).insertAdjacentHTML("afterbegin", customTemplate);
            }
        },
        cssFile: {
            path: "",
            fileName: "loadingScreen"
        }
    }

    settings.run();
})
