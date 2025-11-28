const counter = document.getElementById("counter");
const button = document.getElementById("btn");


let count = 0;


button.addEventListener("click", () => {
    count++;
    counter.value = count;
});
