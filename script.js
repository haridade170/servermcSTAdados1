document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        'url(base.webp)',
        'url(base2.webp)',
        'url(base3.webp)',
        'url(baser.webp)'
    ];

    // Escolhe um background aleatório
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    // Define o background aleatório
    document.body.style.backgroundImage = randomBackground;
});

