const artistas = [
  {
    nome: "Ariana Grande",
    genero: "Pop / R&B",
    descricao: "faixas e hits em destaque",
    spotify: "https://open.spotify.com/embed/artist/66CXWjxzNUsdJxJ2JdwvnR"
  },
  {
    nome: "Lana Del Rey",
    genero: "Indie / Dream pop",
    descricao: "atmosfera cinematográfica",
    spotify: "https://open.spotify.com/embed/artist/00FQb4jTyendYWaN8pK0wa"
  },
  {
    nome: "Taylor Swift",
    genero: "Pop / Country",
    descricao: "discografia icônica",
    spotify: "https://open.spotify.com/embed/artist/06HL4z0CvFAxyc27GXpf02"
  },
  {
    nome: "Billie Eilish",
    genero: "Alternative pop",
    descricao: "som intimista",
    spotify: "https://open.spotify.com/embed/artist/6qqNVTkY8uBg9cP3Jd7DAH"
  },
  {
    nome: "The Weeknd",
    genero: "Pop / R&B",
    descricao: "produção impecável e som noturno",
    spotify: "https://open.spotify.com/embed/artist/1Xyo4u8uXC1ZmMpatF05PJ"
  }
];

const container = document.getElementById("listaArtistas");

artistas.forEach(artista => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${artista.nome}</h2>
    <p>${artista.genero} — ${artista.descricao}</p>
    <iframe src="${artista.spotify}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  `;
  container.appendChild(card);
});
