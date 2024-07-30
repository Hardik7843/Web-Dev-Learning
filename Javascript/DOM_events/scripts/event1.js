let btn = document.getElementById("button");

console.dir(btn);

function OnClick(){
    console.log("Clicked");
}

function OffClick() {
    alert("Button Left");
}

btn.onclick = OnClick;
btn.onclick = OffClick;