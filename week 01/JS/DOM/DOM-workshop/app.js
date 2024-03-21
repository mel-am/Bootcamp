const body = document.querySelector("body");
console.log(body);


//const h1 = document.querySelector("h1");

//h1.textContent = "Hello world!";

const image = document.querySelector("img");

image.src = "/JS/DOM/DOM-workshop/images/bird.jpg";

//const body = document.querySelector("body");
const li = document.createElement("ul");
li.textContent = "Purple!";
body.append(li);

const h1 = document.querySelector("h1");
h1.remove();




//const h1 = document.createElement("h1");
h1.textContent = "This is a heading!";
body.appendChild(h1);

