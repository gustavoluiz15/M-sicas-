// script.js
// Agora os perfis já aparecem abertos (embed visível).

const artists = [
  {
    name: "Ariana Grande",
    id: "66CXWjxzNUsdJxJ2JdwvnR",
    bio: "Pop / R&B — faixas e hits em destaque",
    initials: "AG"
  },
  {
    name: "Lana Del Rey",
    id: "00FQb4jTyendYWaN8pK0wa",
    bio: "Indie / Dream pop — atmosfera cinematográfica",
    initials: "LD"
  },
  {
    name: "Taylor Swift",
    id: "06HL4z0CvFAxyc27GXpf02",
    bio: "Pop / Country — discografia icônica",
    initials: "TS"
  },
  {
    name: "Billie Eilish",
    id: "6qqNVTkY8uBg9cP3Jd7DAH",
    bio: "Alternative pop — som intimista",
    initials: "BE"
  },
  {
    name: "The Weeknd",
    id: "1Xyo4u8uXC1ZmMpatF05PJ",
    bio: "R&B / Pop — grooves sombrios",
    initials: "TW"
  }
];

const container = document.querySelector(".artists-grid");

function createArtistCard(artist) {
  const card = document.createElement("article");
  card.className = "card";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = artist.initials;

  const body = document.createElement("div");
  body.className = "card-body";

  const name = document.createElement("h4");
  name.className = "artist-name";
  name.textContent = artist.name;

  const meta = document.createElement("div");
  meta.className = "artist-meta";
  meta.textContent = artist.bio;

  // embed direto (sem botão)
  const embedWrap = document.createElement("div");
  embedWrap.className = "embed-wrap";

  const iframe = document.createElement("iframe");
  iframe.src = `https://open.spotify.com/embed/artist/${artist.id}`;
  iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  iframe.loading = "lazy";

  embedWrap.appendChild(iframe);

  body.appendChild(name);
  body.appendChild(meta);
  body.appendChild(embedWrap);

  card.appendChild(avatar);
  card.appendChild(body);

  return card;
}

artists.forEach(a => container.appendChild(createArtistCard(a)));

document.getElementById("year").textContent = new Date().getFullYear();

