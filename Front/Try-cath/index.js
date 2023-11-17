const nombres = ["Juan", "María", "Luis", "Ana", "Pedro"];
const container = document.getElementById("arreglo");


function recorrer(){
    try
    {
        console.log("HOla");
    nombres.forEach((cosas,indice) => {
        console.log(cosas,indice);
        const nom = document.createElement("div");
        const nomdata = `
            <h2> ${cosas}  <p> Indice ${indice} </p> </h2>
           
        `;
        console.log(nomdata);
        nom.innerHTML = nomdata;
        container.appendChild(nom);
    });
}catch(e){
    console.log(e.message);
}
}

recorrer();




