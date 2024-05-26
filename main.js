document.addEventListener('DOMContentLoaded', (event) => {
    const gdf = document.querySelectorAll('input[name="godofwar"]');
    const audio = document.getElementById('audio-controls');

    gdf.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                switch(index) {
                    case 0:
                        audio.setAttribute('src', 'god-war-2-music.mp3');
                        break;
                    case 1:
                        audio.setAttribute('src', 'god-of-war-2-music.mp3');
                        break;
                    case 2:
                        audio.setAttribute('src', 'god-of-war-3-music.mp3');
                        break;
                }
                // Certifique-se de que o elemento de áudio possa ser reproduzido
                audio.play().catch(error => {
                    console.error("Failed to play audio:", error);
                });
            }
        });
    });
});