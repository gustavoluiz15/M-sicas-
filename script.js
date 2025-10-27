// Perfis fixos com imagens (sem players)
const artists = [
  {
    name: "Ariana Grande",
    bio: "Pop / R&B — voz poderosa e presença marcante.",
    image: "https://i.scdn.co/image/ab6761610000e5ebfeb14b32b94a8c823c57e972"
  },
  {
    name: "Lana Del Rey",
    bio: "Indie / Dream Pop — som nostálgico e cinematográfico.",
    image: "https://i.scdn.co/image/ab6761610000e5ebd5f8dcb0ad96a4e23ad7d9d3"
  },
  {
    name: "Taylor Swift",
    bio: "Pop / Country — compositora e artista multigeracional.",
    image: "https://i.scdn.co/image/ab6761610000e5ebd7f0a3b94f7e5f3dd7cde1f3"
  },
  {
    name: "Billie Eilish",
    bio: "Alternative Pop — som intimista e experimental.",
    image: "https://i.scdn.co/image/ab6761610000e5eb0b23a2b90fffb3f0b0bda8c3"
  },
  {
    name: "The Weeknd",
    bio: "R&B / Pop — estilo sombrio e envolvente.",
    image: "https://i.scdn.co/image/ab6761610000e5ebc83e80e64ad0f6bfcaa4d0c3"
  }
];

const container = document.querySelector(".artists-grid");

artists.forEach(a => {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.src = a.image;
  img.alt = a.name;

  const name = document.createElement("h4");
  name.textContent = a.name;

  const bio = document.createElement("p");
  bio.textContent = a.bio;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(bio);

  container.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
