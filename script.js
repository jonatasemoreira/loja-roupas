const url = "https://fakestoreapi.com/products";
const container = document.getElementById("container-main");
const input = document.getElementById("search");

async function getPost() {
  const response = await fetch(url);
  const data = await response.json();
  let filteredData = data;

  input.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filteredData = data.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm);
    });

    renderProducts(filteredData);
  });

  renderProducts(data);

  return data;
}

function renderProducts(data) {
  container.innerHTML = "";

  data.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("container-produtos");

    const imageElement = document.createElement("img");
    const cateElemente = document.createElement("h3");
    const precoElemento = document.createElement("p");

    imageElement.src = product.image;
    cateElemente.textContent = product.title;
    precoElemento.textContent = product.price;

    div.appendChild(cateElemente);
    div.appendChild(precoElemento);
    div.appendChild(imageElement);

    container.appendChild(div);
  });
}

getPost();