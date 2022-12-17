let countEl = document.getElementById("count-el");
let delEl = document.getElementById("del-el")
let saveEl = document.getElementById("save-el")
const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")

let count = 0;

increment.addEventListener("click", function increment() {
    count += 1;
    countEl.innerText = count;
})
decrement.addEventListener("click", function increment() {
    if(count <= 0){
        count === 0;
    }else{
        count -= 1;
    }
    countEl.innerText = count;
})

function reset() {
    countEl.textContent = 0;
    count = 0;
}
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    count = 0;
}

