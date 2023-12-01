
//Tomamos referencia del formulario
const form = document.getElementById("form");
form.addEventListener("submit", handleFormSubmit);
const URL = "https://654436675a0b4b04436c25e5.mockapi.io/"; //aquí va la url base de vuestro proyecto de MockAPI



function generateUUID() {
  let uuid = "";
  for (let i = 0; i < 32; i++) {
    uuid += Math.floor(Math.random() * 16).toString(16);
  }
  return uuid;
}

//función de procesamiento del formulario
function handleFormSubmit(e) {
  const movieData = new FormData(form);
  e.preventDefault();
  const uuid = generateUUID();

  const gens = movieData.get("genre").split(", ");


  const newMovie = {
    id: uuid,
    title: movieData.get("title"),
    year: movieData.get("year"),
    director: movieData.get("director"),
    duration: movieData.get("duration"),
    poster: movieData.get("poster"),
    genre: gens,
    rate: movieData.get("rate"),
  };
  addOne(newMovie);
}
function addOne(movie) {
  fetch(URL + `movies`, {
    method: "post",
    headers: {"contect-type": "applicacion/json"},
    body: JSON.stringify(movie),
  }).then(res => {
    if (res.ok) alert("OK");
  });
}
//método POST para crear una película en el backend
