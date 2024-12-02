const textElement = document.getElementById('animated-text');
const originalText = textElement.innerText;

function animateText() {
    textElement.classList.remove('show'); // Yazıyı gizle

    setTimeout(() => {
        textElement.innerText = originalText; // Yazıyı geri getir
        textElement.classList.add('show'); // Yazıyı göster
    }, 500); // 0.5 saniye bekle
}

// Animasyonu başlat
setInterval(() => {
    animateText();
}, 4000); // 4 saniyede bir animasyonu başlat
