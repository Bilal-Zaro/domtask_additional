// Q1
// const fruits = [
//     { name: "Apple", img: "./images/Apple.png" },
//     { name: "Banana", img: "./images/Banana.jpg" },
//     { name: "Cherry", img: "./images/Cherry.jpg" },
//     { name: "Grapes", img: "./images/Grapes.jpg" },
//     { name: "Orange", img: "./images/Orange.jpg" },
// ];

// const fruitsList = document.querySelector("#fruits-list");
// const style = document.createElement("style");

// style.innerHTML = `
//     body {
//       display: flex;
//       justify-content: center;
//     }
//     ul {
//       list-style: none;
//       padding: 0;
//     }
//     li {
//       margin: 10px 0;
//       display: flex;
//       align-items: center;
//     }
//     .img {
//       width: 50px;
//       height: 50px;
//       margin-right: 10px;
//     }
//   `;

// document.head.appendChild(style);

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];

//     const listItem = document.createElement("li");

//     const image = document.createElement("img");
//     image.src = fruit.img;
//     image.alt = fruit.name;

//     image.classList.add("img");

//     listItem.innerText = fruit.name;

//     listItem.prepend(image);

//     fruitsList.appendChild(listItem);
// }

// Q2
// function findIndex(array, number) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       return i;
//     }
//   }
//   return -1;
// }

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// console.log(findIndex(arr, 50));
// console.log(findIndex(arr, 100));
let fruits = ["apple","banana","cherry","grabes","orange"];
let imgsrc =["images/apple.png","images/banana.jpg","images/cherry.jpg","images/grabes.jpg","images/orange.jpg"];
const ul = document.getElementById("fruits-list");
for(let i =0;i<fruits.length;i++){
  const li =document.createElement("li")
const img = document.createElement("img");
const text = document.createElement("p");
text.textContent=fruits[i];
img.src=imgsrc[i];

li.appendChild(text);
li.appendChild(img);
ul.appendChild(li);
}
//q2//
function findnumber(arr,number)
{
for(let i=0;i<arr.length;i++){
  if(arr[i]==number){
    return i;
  }
return -1;
}}
let arr=[1,2,3,4,5,6,7];
let num =0;
console.log(findnumber(arr,num));