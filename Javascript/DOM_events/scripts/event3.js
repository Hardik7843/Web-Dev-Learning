let btn = document.getElementById("button")

function GetRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red} , ${green} , ${blue})`

    return color
}

function OnClick() {
    let h1 = document.getElementById("h1");
    let colorbox = document.getElementById("colorbox")
    let randomColor = GetRandomColor()
    h1.innerText = randomColor
    console.log((randomColor));
    colorbox.style.backgroundColor = randomColor;
}

btn.onclick = OnClick;

