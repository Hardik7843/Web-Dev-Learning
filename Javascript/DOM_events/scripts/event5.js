let div = document.querySelector("div");
let h1 = document.querySelector("h1");
let ul = document.querySelector("ul");
let li = document.querySelector("li");


div.addEventListener("click" , function myfunction(event) {
    
    console.log("div clicked");
})

h1.addEventListener("click" , function myfunction(event) {
    event.stopPropagation();
    console.log("h1 clicked");
})

ul.addEventListener("click" , function myfunction(event) {
    event.stopPropagation();
    console.log("ul clicked");
})

li.addEventListener("click" , function myfunction(event) {
    event.stopPropagation();
    console.log("li clicked");
})