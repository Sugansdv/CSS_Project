
const colors = ["red", "green", "blue", "Orange", "Yellow"]
let index = 0;

function changeColor(){
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % 5

}