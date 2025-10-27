document.addEventListener('DOMContentLoaded', () => {

    // Dados dos artistas e seus respectivos IDs de EMBED do Spotify
    // Você PRECISA substituir os placeholders (ID_SPOTIFY_...) pelos IDs reais.
    // Para obter um embed, vá no Spotify, clique em "..." no artista/música/álbum,
    // vá em "Compartilhar" e depois "Incorporar perfil/música/álbum".
    const artists = [
        {
            name: "Ariana Grande",
            profile_embed_id: "spotify:artist:66CXWjxzNUsdJxJ2JdwvnH", // Exemplo de URI do perfil
            song_embed_id: "spotify:track:12bB2S9s6y62o3w90y35bC" // Exemplo de URI de uma música (7 rings)
        },
        {
            name: "Lana Del Rey",
            profile_embed_id: "spotify:artist:00FQb4jTyendY0xgD52Qd", // Exemplo de URI do perfil
            song_embed_id: "spotify:track:40GqC6tE0g2x1CqK9jUeD" // Exemplo de URI de uma música (Summertime Sadness)
        },
        {
            name: "Taylor Swift",
            profile_embed_id: "spotify:artist:06HL4zK9dI9qIBA", // Exemplo de URI do perfil
            song_embed_id: "spotify:track:1wQJb05o8j843K5179HwYF" // Exemplo de URI de uma música (Cruel Summer)
        },
        {
            name: "The Weeknd",
            profile_embed_id: "spotify:artist:1XfNwae", // Exemplo de URI do perfil
            song_embed_id: "spotify:track:5E5p0fGgJ8B4CgXQ3J3m8D" // Exemplo de URI de uma música (Blinding Lights)
        }
    ];

    const artistGrid = document.getElementById('artist-profiles');

    artists.forEach(artist => {
        // Cria o elemento principal do cartão do artista
        const card = document.createElement('article');
        card.classList.add('artist-card');

        // Cria o cabeçalho do cartão
        const header = document.createElement('div');
        header.classList.add('artist-header');
        header.innerHTML = `<h3>${artist.name}</h3>`;
        card.appendChild(header);

        // Cria o corpo do cartão
        const body = document.createElement('div');
        body.classList.add('artist-body');

        // 1. Embed do Perfil do Artista
        body.innerHTML += `
            <h4>Perfil no Spotify</h4>
            <div class="spotify-embed">
                <iframe 
                    style="border-radius:12px" 
                    src="https://open.spotify.com/embed/${artist.profile_embed_id.replace('spotify:', '')}?utm_source=generator&theme=0" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
        `;

        // 2. Embed de uma Música do Artista
        body.innerHTML += `
            <h4>Música em Destaque</h4>
            <div class="spotify-embed">
                <iframe 
                    style="border-radius:12px" 
                    src="https://open.spotify.com/embed/track/${artist.song_embed_id.replace('spotify:track:', '')}?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
        `;

        card.appendChild(body);
        artistGrid.appendChild(card);
    });
});
