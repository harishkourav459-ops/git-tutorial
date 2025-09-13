const basketHe = document.querySelector('#basket-heading');
basketHe.style.color = 'brown';

const fruit = document.querySelectorAll('.fruit');
for (let i = 0; i < fruit.length; i++){

    fruit[i].style.background = 'gray';
    fruit[i].style.padding = '10px';
    fruit[i].style.margin = '10px';
    fruit[i].style.borderRadius = '5px';

}

const fruits = document.querySelectorAll('.fruit:nth-child(even)');

for (let i = 0; i < fruits.length; i++){
    fruits[i].style.backgroundColor = 'brown';
    fruits[i].style.color = 'white';
}