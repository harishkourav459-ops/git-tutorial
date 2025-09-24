// Step 1: Description input DOM se add karna (before button)
const form = document.querySelector('form');
const descInput = document.createElement('input');
descInput.type = "text";
descInput.id = "description";
descInput.placeholder = "Enter fruit description";
// Insert before Add button
form.insertBefore(descInput, form.querySelector('button'));


// Step 2: Fruit add hone par description bhi show karna
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fruitName = document.getElementById('fruit').value;
  const fruitDesc = document.getElementById('description').value;

  if (fruitName === "") return;

  const li = document.createElement('li');
  li.style.display = "flex";
  li.style.flexDirection = "column"; // description neeche show ho

  // Name span
  const span = document.createElement('span');
  span.textContent = fruitName;

  // Description italic me
  const p = document.createElement('p');
  p.textContent = fruitDesc;
  p.style.fontStyle = "italic";

  // Delete button
  const btn = document.createElement('button');
  btn.textContent = "X";
  btn.style.marginTop = "5px";
  btn.addEventListener('click', () => li.remove());

  // List item me sab append karo
  li.appendChild(span);
  li.appendChild(p);
  li.appendChild(btn);
  document.getElementById('fruits').appendChild(li);

  // Inputs clear karo
  document.getElementById('fruit').value = "";
  document.getElementById('description').value = "";
});


// Step 3: Filter functionality (name + description dono pe)
const filter = document.getElementById('filter');
filter.addEventListener('keyup', function () {
  const filterValue = filter.value.toLowerCase();
  const items = document.querySelectorAll('#fruits li');

  items.forEach(item => {
    const name = item.querySelector('span').textContent.toLowerCase();
    const desc = item.querySelector('p').textContent.toLowerCase();

    if (name.indexOf(filterValue) > -1 || desc.indexOf(filterValue) > -1) {
      item.style.display = "flex"; // show
    } else {
      item.style.display = "none"; // hide
    }
  });
});