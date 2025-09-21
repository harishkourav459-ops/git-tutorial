const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
document.querySelectorAll('.fruits li').forEach(li => {
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fruitToadd = document.getElementById('fruit-to-add');
    if (fruitToadd.value.trim() == '') return;


    const newli = document.createElement('li');
    newli.classList.add('fruit');
    newli.textContent = fruitToadd.value;
    newli.innerHTML = fruitToadd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>';
    fruits.appendChild(newli);


});


// Implement the code as in video but with one extra 'Edit' button in 'li'
fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruittodelete = event.target.parentElement;
        fruits.removeChild(fruittodelete);
    }
});

