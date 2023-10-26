// Localizar a URL da API
const url = "https://fakestoreapi.com/products";

// Localizar o elemento do contêiner principal e o campo de pesquisa
const container = document.getElementById("container-main");
const input = document.getElementById("search");

// Função para renderizar os produtos no contêiner principal
function renderProducts(data) {
  // Limpar o contêiner principal antes de renderizar os produtos
  while (container.firstChild) {
    container.firstChild.remove();
  }

  // Iterar por cada produto e criar os elementos HTML para cada um
  data.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("container-produtos");

    const imageElement = document.createElement("img");
    const cateElemente = document.createElement("h3");

    imageElement.src = product.image;
    cateElemente.textContent = product.title;

    div.appendChild(cateElemente);
    div.appendChild(imageElement);

    container.appendChild(div);
  });
}

// Função para obter os dados da API e renderizar os produtos
async function getPosts() {
  try {
    // Fazer a solicitação à API
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao obter os dados da API.");
    }
    const data = await response.json();

    // Variável para armazenar os dados filtrados
    let filteredData = data;

    // Adicionar um ouvinte de evento de input ao campo de pesquisa
    input.addEventListener("input", (e) => {
      // Obter o termo de pesquisa em minúsculas
      const searchTerm = e.target.value.toLowerCase();

      // Filtrar os dados com base no termo de pesquisa
      filteredData = data.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm);
      });

      // Renderizar os produtos filtrados
      renderProducts(filteredData);
    });

    // Renderizar todos os produtos inicialmente
    renderProducts(data);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

// Chamar a função para obter os dados da API e renderizar os produtos
getPosts();
