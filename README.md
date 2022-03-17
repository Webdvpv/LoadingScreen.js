# Loading Screen

It's a very simple **Loading Screen Script** to use 😎

>**Idea**: Ugur Cengiz ◆ <ugurcengiz@mail.com.tr> ◆ [Website](https://ugurcengiz.com)
>>**Author**: Volkan Coskun ◆ <webdvpv@gmail.com> ◆ [Website](https://volkancoskun.herokuapp.com)




## Installation

For now it can only be used by integrating images. Just run the function below:

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

## Usage

>>>>**For manual usage! :** You need to this element if you will do this manual: `<div class="loadingScreen"></div>` 
Just place it anywhere.

---
**Syntax**

```
initialize_sequence([], {…})
```
```
initialize_sequence({…})
```
---

**Parameters (Optional)**

- First parameter<string>: `"selector` or `tag name"`
- Second parameter<string>: `"start"` or `"end"`

**CSS (Optional):** If you want to add your style file yourself, you can remove this field. Otherwise this style file will automatically be the last element of the **head tag**.
 
For example:
```
css: {
   path: "root folder/style folder/",
   name: "myStylesheet"
}
```

**Image (Optional):** If you want to add an image, please add the function parameters as Array. You can leave the alt text blank or remove it.
```
image: {
   path: "root folder/image folder/",
   name: "myImage.anyimgformat",
   alt: "Custom Alternative Text"
}
```


**Animation (Optional):** The animation takes its name from loadingScreen.css. You can change this. Default value is **"fadeToggle"**.

```
animation: {name: "fadeToggle or what you want", close: 2000}
```


## License
[MIT](https://choosealicense.com/licenses/mit/)