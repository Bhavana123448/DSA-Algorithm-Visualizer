let array = [];

function generateArray() {

array = [];
let container = document.getElementById("array");
container.innerHTML = "";

for (let i = 0; i < 20; i++) {

let value = Math.floor(Math.random() * 200);
array.push(value);

let bar = document.createElement("div");
bar.style.height = value + "px";
bar.classList.add("bar");

container.appendChild(bar);
}
}

async function bubbleSort() {

let bars = document.getElementsByClassName("bar");

for (let i = 0; i < array.length; i++) {

for (let j = 0; j < array.length - i - 1; j++) {

if (array[j] > array[j + 1]) {

let temp = array[j];
array[j] = array[j + 1];
array[j + 1] = temp;

bars[j].style.height = array[j] + "px";
bars[j + 1].style.height = array[j + 1] + "px";

await new Promise(resolve => setTimeout(resolve, 100));
}
}
}
}

async function selectionSort() {

let bars = document.getElementsByClassName("bar");

for (let i = 0; i < array.length; i++) {

let min = i;

for (let j = i + 1; j < array.length; j++) {

if (array[j] < array[min]) {
min = j;
}
}

let temp = array[i];
array[i] = array[min];
array[min] = temp;

bars[i].style.height = array[i] + "px";
bars[min].style.height = array[min] + "px";

await new Promise(resolve => setTimeout(resolve, 100));
}
}