const artistas = [
  {
    nome: "Ariana Grande",
    genero: "Pop / R&B",
    descricao: "Faixas e hits em destaque",
    imagem: "https://i.imgur.com/xF2rJwW.jpg",
    spotify: "https://open.spotify.com/embed/artist/66CXWjxzNUsdJxJ2JdwvnR"
  },
  {
    nome: "Lana Del Rey",
    genero: "Indie / Dream pop",
    descricao: "Atmosfera cinematográfica",
    imagem: "https://i.imgur.com/Z2XZBhz.jpg",
    spotify: "https://open.spotify.com/embed/artist/00FQb4jTyendYWaN8pK0wa"
  },
  {
    nome: "Taylor Swift",
    genero: "Pop / Country",
    descricao: "Discografia icônica",
    imagem: "https://i.imgur.com/ZgQW93I.jpg",
    spotify: "https://open.spotify.com/embed/artist/06HL4z0CvFAxyc27GXpf02"
  },
  {
    nome: "Billie Eilish",
    genero: "Alternative pop",
    descricao: "Som intimista e experimental",
    imagem: "https://i.imgur.com/tY2Lk3E.jpg",
    spotify: "https://open.spotify.com/embed/artist/6qqNVTkY8uBg9cP3Jd7DAH"
  },
  {
    nome: "The Weeknd",
    genero: "Pop / Synthwave / R&B",
    descricao: "Produção impecável e som noturno",
    imagem: "https://i.imgur.com/qn1sFqG.jpg",
    spotify: "https://open.spotify.com/embed/artist/1Xyo4u8uXC1ZmMpatF05PJ"
  },
  {
    nome: "Doja Cat",
    genero: "Pop / Rap",
    descricao: "Estilo provocante e batidas cativantes",
    imagem: "https://i.imgur.com/YAEsmkL.jpg",
    spotify: "https://open.spotify.com/embed/artist/5cj0lLjcoR7YOSnhnX0Po5"
  }
];

const container = document.getElementById("artistas");

artistas.forEach(artista => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${artista.imagem}" alt="${artista.nome}">
    <div class="card-content">
      <h2>${artista.nome}</h2>
      <p>${artista.genero} — ${artista.descricao}</p>
      <iframe src="${artista.spotify}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  `;
  container.appendChild(card);
});
