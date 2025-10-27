const artists = [
  // POP
  {
    name: "Ariana Grande",
    bio: "Pop / R&B — voz poderosa e presença marcante.",
    image: "https://i.scdn.co/image/ab6761610000e5ebfeb14b32b94a8c823c57e972"
  },
  {
    name: "Taylor Swift",
    bio: "Pop / Country — compositora e artista multigeracional.",
    image: "https://i.scdn.co/image/ab6761610000e5ebd7f0a3b94f7e5f3dd7cde1f3"
  },
  {
    name: "Lana Del Rey",
    bio: "Indie / Dream Pop — som nostálgico e cinematográfico.",
    image: "https://i.scdn.co/image/ab6761610000e5ebd5f8dcb0ad96a4e23ad7d9d3"
  },
  // ROCK
  {
    name: "Queen",
    bio: "Rock clássico — ícones do som teatral e poderoso.",
    image: "https://i.scdn.co/image/ab6761610000e5eb80b1da8d9a7e54b2b53e9a4a"
  },
  {
    name: "Arctic Monkeys",
    bio: "Rock alternativo — guitarras afiadas e letras inteligentes.",
    image: "https://i.scdn.co/image/ab6761610000e5eb6cb3e4c85fcb0c1e5fda49a9"
  },
  {
    name: "Foo Fighters",
    bio: "Rock / Grunge — energia pura e refrões épicos.",
    image: "https://i.scdn.co/image/ab6761610000e5eb85a76f44d71ff2e8f92a8b42"
  },
  // MPB
  {
    name: "Caetano Veloso",
    bio: "MPB / Tropicália — poesia e inovação musical brasileira.",
    image: "https://i.scdn.co/image/ab6761610000e5eb5d40e1efbad1c86e9eb7f4d1"
  },
  {
    name: "Gal Costa",
    bio: "MPB / Bossa Nova — uma das maiores vozes do Brasil.",
    image: "https://i.scdn.co/image/ab6761610000e5ebe39a1c9fefc479c98e6f0eb2"
  },
  {
    name: "Gilberto Gil",
    bio: "MPB / Samba — mistura de ritmos e alegria contagiante.",
    image: "https://i.scdn.co/image/ab6761610000e5ebee04a3c0eb4b2f54765c9987"
  },
  // RAP
  {
    name: "Emicida",
    bio: "Rap / Hip Hop — lirismo, consciência e criatividade.",
    image: "https://i.scdn.co/image/ab6761610000e5eb8d6a0cecf73e798dcdaba2c7"
  },
  {
    name: "Criolo",
    bio: "Rap / MPB — mistura de gêneros e letras poéticas.",
    image: "https://i.scdn.co/image/ab6761610000e5eb179b16ed830315a9b07c9f2d"
  },
  {
    name: "Racionais MC's",
    bio: "Rap Nacional — voz das periferias e resistência cultural.",
    image: "https://i.scdn.co/image/ab6761610000e5ebd5d97b5ce3e28b44939eae0d"
  },
  // ELETRÔNICO
  {
    name: "Daft Punk",
    bio: "Eletrônico / House — robôs do som futurista.",
    image: "https://i.scdn.co/image/ab6761610000e5eb6ab0d3a2668e3a0b0a9e3f0b"
  },
  {
    name: "Alok",
    bio: "Eletrônico / EDM — DJ brasileiro de alcance mundial.",
    image: "https://i.scdn.co/image/ab6761610000e5eb4e1cc7df1e8e19fdf02f5d85"
  },
  {
    name: "Calvin Harris",
    bio: "Eletrônico / Pop — produtor e hitmaker internacional.",
    image: "https://i.scdn.co/image/ab6761610000e5ebfb1a8c540dfb21965b1c71ef"
  }
];

const container = document.querySelector(".artists-grid");

artists.forEach(artist => {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.src = artist.image;
  img.alt = artist.name;

  const name = document.createElement("h4");
  name.textContent = artist.name;

  const bio = document.createElement("p");
  bio.textContent = artist.bio;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(bio);

  container.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
