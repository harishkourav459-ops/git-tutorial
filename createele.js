const div = document.getElementsByTagName('div');
const firstdiv = div[0];

const subheading = document.createElement("h3");
subheading.innerText = "Buy high quality organic fruits online";
subheading.style.fontStyle = 'italic';

firstdiv.appendChild(subheading);

const seconddiv = div[1];

const para = document.createElement("p");

para.innerText = "Total fruits:4";

para.id = "fruits-total";

const ul=seconddiv.querySelector("ul");



seconddiv.insertBefore(para, ul);