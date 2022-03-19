# Loading Screen
[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

It's a very simple **Loading Screen Script** to use 😎

>**Idea**: Ugur Cengiz ◆ <ugurcengiz@mail.com.tr> ◆ [Website](https://ugurcengiz.com)
>>**Author**: Volkan Coskun ◆ <webdvpv@gmail.com> ◆ [Website](https://volkancoskun.herokuapp.com)

## Initializing

For now it can only be used by integrating images. You should have a image folder and an image in any format. Just run the function below:

```
initialize_sequence(["body", "start"], {
    css: {
        path: "/",
        name: "loadingScreen"
    },
    image: {
        path: "/assets/gifset/",
        name: "3.gif",
        alt: "Loading Screen"
    },
    animation: {
        name: "fadeToggle",
        close: 2000
    }
})
```

---

## Usage

>**For manual usage! :** You need to this element if you will do this manual: `<div class="loadingScreen"></div>` 
Just place it anywhere.

---
**Syntax**
```
initialize_sequence([], {…})
```

---

**1) First Parameter(Array) of Function (Required)**

- First parameter<string>: `"selector"` or `"tag name"`
- Second parameter<string>: `"start"` or `"end"` : (start or end) of your chosen element

#

**2) Second Parameter(Object) of Function (Required):** Settings object cannot be empty. **Includes css, image and animation objects**:

- **CSS Object (Optional):** If you want to add your style file yourself, you can remove this object. Otherwise this style file will automatically be the last element of the **head tag**.

  - `path` Required
  - `name` Required

```
css: {
   path: "root folder/style folder/",
   name: "myStylesheet"
}
```

#

- **Image Object (Optional):** If you want to add an image, please add the function parameters as Array. You can leave the alt text blank or remove it.

  - `path` Required
  - `name` Required
  - `alt` Optional
 
```
image: {
   path: "root folder/image folder/", // required
   name: "myImage.anyimgformat", // required
   alt: "Custom Alternative Text" // optional
}
```

#

- **Animation Object (Optional):** The animation takes its name from loadingScreen.css. You can change it.

  - `name` default: `"fadeToggle"` (optional)
  - `close` default: `2000` (optional)

```
animation: {
   name: "fadeToggle anotherClass ifYouWish",
   close: 2000
}
```