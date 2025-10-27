// script.js
// Dados básicos dos artistas — cada objeto tem id de artista do Spotify para usar no embed.
// Observação: os embeds do Spotify podem pedir login para reproduzir faixas completas.
// IDs usados são os IDs do Spotify (já colocados aqui). Se quiser trocar tracks específicas,
// substitua embedArtist pela URL de embed de track ou playlist:
// ex: https://open.spotify.com/embed/track/{TRACK_ID}

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

// helper: cria um cartão para cada artista com embed do Spotify
function createArtistCard(artist){
  const card = document.createElement("article");
  card.className = "card";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = artist.initials || initialsFromName(artist.name);

  const body = document.createElement("div");
  body.className = "card-body";

  const name = document.createElement("h4");
  name.className = "artist-name";
  name.textContent = artist.name;

  const meta = document.createElement("div");
  meta.className = "artist-meta";
  meta.textContent = artist.bio;

  // controls
  const controls = document.createElement("div");
  controls.className = "card-controls";

  const playBtn = document.createElement("button");
  playBtn.className = "mini-btn primary";
  playBtn.textContent = "Tocar no site";

  const openBtn = document.createElement("button");
  openBtn.className = "mini-btn";
  openBtn.textContent = "Abrir no Spotify";

  controls.appendChild(playBtn);
  controls.appendChild(openBtn);

  // embed container (inicialmente escondido até clicar em "Tocar no site")
  const embedWrap = document.createElement("div");
  embedWrap.className = "embed-wrap";
  embedWrap.style.display = "none";

  // iframe do Spotify (embed de artista)
  const iframe = document.createElement("iframe");
  iframe.src = `https://open.spotify.com/embed/artist/${artist.id}`;
  iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  iframe.loading = "lazy";

  embedWrap.appendChild(iframe);

  // ações dos botões
  playBtn.addEventListener("click", () => {
    // alterna exibição do embed
    if (embedWrap.style.display === "none") {
      embedWrap.style.display = "block";
      playBtn.textContent = "Esconder player";
      // scroll suave para o player
      setTimeout(() => embedWrap.scrollIntoView({behavior:"smooth", block:"center"}), 150);
    } else {
      embedWrap.style.display = "none";
      playBtn.textContent = "Tocar no site";
    }
  });

  openBtn.addEventListener("click", () => {
    window.open(`https://open.spotify.com/artist/${artist.id}`, "_blank");
  });

  body.appendChild(name);
  body.appendChild(meta);
  body.appendChild(controls);
  body.appendChild(embedWrap);

  card.appendChild(avatar);
  card.appendChild(body);

  return card;
}

function initialsFromName(name){
  return name.split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase();
}

// renderiza todos
artists.forEach(a => container.appendChild(createArtistCard(a)));

// footer year
document.getElementById("year").textContent = new Date().getFullYear();

