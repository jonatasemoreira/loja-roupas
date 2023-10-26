const url = "https://fakestoreapi.com/products";
const container = document.getElementById("container-main");

async function getPost() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  data.forEach(character => {
      
    const div = document.createElement("div");
    div.classList.add("container-produtos");

    const imageElement = document.createElement("img");
    const cateElemente = document.createElement("h3");
    const precoElemento = document.createElement("p");
    //const  = document.createElement("");

    imageElement.src = character.image;
    cateElemente.textContent = character.title;
    precoElemento.textContent = character.price;

    div.appendChild(cateElemente);
    div.appendChild(precoElemento);
    div.appendChild(imageElement);

    container.appendChild(div);
  });

  return data;
}

getPost();