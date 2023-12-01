//Aquí renderizaremos los datos que lleguen del backend
const moviesContainer = document.getElementById("moviesContainer");
form.addEventListener("submit", handleFormSubmit);
const URL = "https://654436675a0b4b04436c25e5.mockapi.io/"; //aquí va la url base de vuestro proyecto de MockAPI
//Método GET
function getAll() {
  fetch(URL + "movies")
    .then(res => res.json())
    .then(movies => renderMovies(movies));
}
getAll();

//detectamos el click en los botones "Delete" y levantamos el id del recurso, que previamente
//adherimos al propio botón con el atributo data (así sabemos el id del recurso a borrar 😉)
document.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const idbotoon = e.target.id
    const id = e.target.dataset.id;
    const actualCard = e.target.closest("article");
    switch(idbotoon)
    {
      case "btnDelete": 
         deleteOne(id, actualCard);
         break;

      case "btnEdit":
        openModal();
        console.log(actualCard);
        const img = actualCard.querySelector("img");
        const ttl = actualCard.querySelector("h2");
        const children = actualCard.querySelectorAll("p");
        const resultados = [];
        for (const child of children) {
          const texto = child.textContent;
          resultados.push(texto);
          console.log(texto);

        }
        const idinput = document.getElementById("id");
        idinput.value = id;
        const inputtitle = document.getElementById("title");
        inputtitle.value = ttl.innerText;
        const inputimg = document.getElementById("poster");
        inputimg.value = img.getAttribute("src");
        const inputyear = document.getElementById("year");
        inputyear.value = resultados[0];
        const inputdirector = document.getElementById("director");
        inputdirector.value = resultados[1];
        const inputgenre = document.getElementById("genre");
        inputgenre.value = resultados[2];
        const inputrate = document.getElementById("rate");
        inputrate.value = resultados[3];
         break;
    }
   /* 
    */
  }
});



/* Método DELETE
 * @param {id} id del recurso a borrar
 * @param {actualCard} elemento del DOM que contiene el recurso a borrar
 */

function deleteOne(id, actualCard) {
  fetch(URL + `movies/${id}`, {
    method: "delete",
  }).then(res => {
    if (res.ok) actualCard.remove();
  });
}

/*
 * @param {movies} array de elementos a renderizar
 */
function renderMovies(movies) {
  for (const movie of movies) {
    const movieCard = document.createElement("article");
    movie;
    const movieData = `    
    <img src="${movie.poster}" alt="${movie.title}"/>
    <h2>${movie.title}</h2>
    <p>${movie.year}</p>
    <spam>Directed by<p> ${movie.director}</p></spam>
    <p>${movie.genre.join(", ")}</p>
    <spam>rating: <p> ${movie.rate}</p></spam>
    <button data-id="${movie.id}" id="btnDelete">Delete</button>
    <button data-id="${movie.id}" id="btnEdit">Edit</button>
    `;
    movieCard.innerHTML = movieData;
    moviesContainer.appendChild(movieCard);
  }
}

//método POST


function openModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

function handleFormSubmit(e) {
  const movieData = new FormData(form);
  const id = document.getElementById("id");
  e.preventDefault();


  const gens = movieData.get("genre").split(", ");

  const newMovie = {
    id:id.value,
    title: movieData.get("title"),
    year: movieData.get("year"),
    director: movieData.get("director"),
    poster: movieData.get("poster"),
    genre: gens,
    rate: movieData.get("rate"),
  };
  console.log(newMovie);
  modificaMovie(newMovie);
  closeModal();
 
  
}

function modificaMovie(movie) {
  fetch(URL + `movies/${movie.id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(movie),
  }).then(res => {
    res.ok ? alert("Movie Updated") : alert("Error");
    recargarpagina();
  });
}
function recargarpagina()
{
  location.reload(true);
}