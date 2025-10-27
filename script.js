document.addEventListener('DOMContentLoaded', () => {

    // Dados dos artistas com os IDs CORRETOS do Spotify.
    // Você pode substituir estes IDs (o que vem depois de /artist/ ou /track/) 
    // por outras músicas/artistas que desejar.
    const artists = [
        {
            name: "Ariana Grande",
            profile_type: "artist",
            profile_id: "66CXWjxzNUsdJxJ2JdwvnH",
            song_type: "track",
            song_id: "1wQJb05o8j843K5179HwYF" // Ex: 7 rings
        },
        {
            name: "Lana Del Rey",
            profile_type: "artist",
            profile_id: "00FQb4jTyendY0xgD52Qd",
            song_type: "track",
            song_id: "40GqC6tE0g2x1CqK9jUeD" // Ex: Summertime Sadness
        },
        {
            name: "Taylor Swift",
            profile_type: "artist",
            profile_id: "06HL4zK9dI9qIBA",
            song_type: "track",
            song_id: "2QjK2eT7pA1R7b82qQ6tT4" // Ex: Anti-Hero
        },
        {
            name: "Outro Artista",
            profile_type: "artist",
            profile_id: "1XfNwae", // Ex: The Weeknd
            song_type: "track",
            song_id: "5E5p0fGgJ8B4CgXQ3J3m8D" // Ex: Blinding Lights
        }
    ];

    const artistGrid = document.getElementById('artist-profiles');

    artists.forEach(artist => {
        const card = document.createElement('article');
        card.classList.add('artist-card');

        const header = document.createElement('div');
        header.classList.add('artist-header');
        header.innerHTML = `<h3>${artist.name}</h3>`;
        card.appendChild(header);

        const body = document.createElement('div');
        body.classList.add('artist-body');

        // URL CORRIGIDA: Usa a estrutura oficial do Spotify. O "&theme=0" força o player a ser escuro.
        
        // 1. Embed do Perfil do Artista
        const profileEmbedSrc = `https://open.spotify.com/embed/${artist.profile_type}/${artist.profile_id}?utm_source=generator&theme=0`;
        body.innerHTML += `
            <h4>Perfil no Spotify</h4>
            <div class="spotify-embed">
                <iframe 
                    style="border-radius:12px" 
                    src="${profileEmbedSrc}" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
        `;

        // 2. Embed de uma Música do Artista (Preview de 30 segundos)
        const songEmbedSrc = `https://open.spotify.com/embed/${artist.song_type}/${artist.song_id}?utm_source=generator&theme=0`;
        body.innerHTML += `
            <h4>Música em Destaque (Preview)</h4>
            <div class="spotify-embed">
                <iframe 
                    style="border-radius:12px" 
                    src="${songEmbedSrc}" 
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
