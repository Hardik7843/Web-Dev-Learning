# `dom2.html`
# Explanation
### First Snippet:

`document.getElementsByTagName("li")` returns a collection (HTMLCollection) of all `<li>` elements in the document.
Attempting to set `li.innerHTML` on a collection will not work because `innerHTML` is a property of individual elements, not collections.

### Second Snippet:

`document.querySelector("li")`
returns the first `<li>` element it finds in the document.
Setting `li.innerHTML` on this single element works as expected, allowing you to modify its content.

# `dom3.html`
## Manipulation of Attributes
### Getting Attributes
```
let img = document.getElementById('displayedImage');
// Getter methos 
let name = img.getAttribute("src");
```

### Changing Attributes
```
img.setAttribute("src" , `${imageName}.png`);
```

## Changing Inline CSS with JS
```
let h1 = document.getElementById("h1")
h1.style.color = "green"
```

#### Note : Properties in CSS are written as `background-color`  where the same property in javascript is written as `backgroundColor`. Also Javascript changes Inline CSS not the external css.

