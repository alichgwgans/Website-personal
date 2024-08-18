// script.js
function showMessage() {
    alert('Kamu telah mengklik teks ini!');
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('clickable-text').addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah default action (navigasi)
        showMessage();
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const audio = new Audio('lagu.mp3'); // Ganti 'lagu.mp3' dengan path lagu yang ingin diputar

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause Lagu';
        } else {
            audio.pause();
            playButton.textContent = 'Mainkan Lagu';
        }
    });
});
const audio = new Audio('love.mp3');

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const playButton = document.getElementById('playButton');
    
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause Lagu';
        } else {
            audio.pause();
            playButton.textContent = 'Mainkan Lagu';
        }
    });
});

