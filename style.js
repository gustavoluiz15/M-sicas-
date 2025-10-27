/* Variáveis de Cores */
:root {
    --color-primary: #FF8C00; /* Laranja Vívido */
    --color-secondary: #000000; /* Preto */
    --color-background: #FFFFFF; /* Branco */
    --color-text-light: #FFFFFF;
    --color-text-dark: #000000;
}

/* Reset Básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    background-color: var(--color-background);
    color: var(--color-text-dark);
    line-height: 1.6;
}

/* Header (Cabeçalho) */
.header {
    background-color: var(--color-secondary);
    color: var(--color-text-light);
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
    font-size: 2.5em;
    color: var(--color-primary); /* Destaque em Laranja */
}

/* Conteúdo Principal */
.content {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.content h2 {
    margin-bottom: 20px;
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
    display: inline-block;
    padding-bottom: 5px;
}

/* Grid de Artistas e Card Arredondado */
.artist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.artist-card {
    background-color: #f8f8f8;
    border: 2px solid var(--color-secondary);
    /* Borda e cantos arredondados - SEM PONTAS */
    border-radius: 20px; 
    padding: 20px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.artist-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    border-color: var(--color-primary);
}

.profile-pic {
    width: 120px;
    height: 120px;
    /* Imagens de perfil redondas */
    border-radius: 50%; 
    object-fit: cover;
    margin-bottom: 15px;
    border: 4px solid var(--color-primary);
}

.artist-card h3 {
    margin-bottom: 5px;
    color: var(--color-secondary);
}

.artist-card p {
    color: #666;
    font-style: italic;
    margin-bottom: 15px;
}

/* Placeholder para o Player */
.spotify-player-placeholder {
    background-color: var(--color-secondary);
    color: var(--color-text-light);
    padding: 10px;
    /* Cantos arredondados */
    border-radius: 10px; 
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
}

/* Footer (Rodapé) */
.footer {
    background-color: var(--color-secondary);
    color: var(--color-text-light);
    text-align: center;
    padding: 15px 0;
    margin-top: 30px;
}

.footer a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bold;
}

.footer a:hover {
    text-decoration: underline;
}
