let submit = document.getElementById("submit");
let form = document.getElementById("form");

form.addEventListener('submit' , function myfunction(event) {
    alert("Submitted")
    event.preventDefault();
})

submit.addEventListener('click' , function myfunction() {
    event.preventDefault();
    this.style.backgroundColor = "red"
    this.style.color = "yellow"
})