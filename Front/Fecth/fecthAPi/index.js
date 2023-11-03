const productsList = document.getElementById("productlist");
const btn = document.querySelectorAll("button");
const randomProductContainer = document.getElementById(
  "randomproduct"
);
btn[0].addEventListener("click", getAll);
btn[1].addEventListener("click", getOne);

const URL = "https://fakestoreapi.com/products/";
function getAll() {
  fetch(URL, {
    method: "get",
  })
    .then(res => res.json())
    .then(products => render(products));
}

function getOne() {
  const randomID = Math.floor(Math.random() * 20 + 1);
  fetch(URL + randomID, {
    method: "get",
  })
    .then(res => res.json())
    .then(product => renderOne(product));
}
function render(arr) {
  clearProductsList();
  for (item of arr) {
    const ListItem = document.createElement("li");
    ListItem.textContent = `${item.title} - $${item.price}`;
    productsList.appendChild(ListItem);
  }
}
function renderOne(pepote) {
  randomProductContainer.textContent = `${pepote.title} - $${pepote.price}`;
}

function clearProductsList() {
  productsList.querySelectorAll("*").forEach(child => child.remove());
}