
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        if (document.title === "home") {
            // document.getElementById("home").checked = true;
            document.getElementById("home_button").style.color = "#fff";
            document.getElementById("home_button").style.opacity = 1;
        } else if (document.title === "support") {
            // document.getElementById("support").checked = true;
            document.getElementById("support_button").style.color = "#fff";
            document.getElementById("support_button").style.opacity = 1;
        }
    }, 80);

});


document.querySelectorAll('.buttons label').forEach(label => {
    label.addEventListener('click', function() {
        const href = this.getAttribute('data-href');
        if (href) {
            window.location.href = href;
        }
    });
});


const starsContainer = document.querySelector('.stars');

// Генерируем звезды с разными размерами и рандомными координатами
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 2}px`; // Размер звезды от 1 до 3 пикселей
    star.style.height = star.style.width;
    star.style.background = '#fff';
    star.style.position = 'absolute';
    star.style.left = `${Math.random() * 100}%`; // Рандомная координата по горизонтали
    star.style.top = `${Math.random() * 100}%`; // Рандомная координата по вертикали
    starsContainer.appendChild(star);

    // Добавляем анимацию мерцания
    star.style.animation = `twinkling ${Math.random() * 3 + 1}s infinite`;

    if (document.title === "home") {
        console.log("is home page")
    } else {
        // Добавляем анимацию планового передвижения
        const moveX = Math.random() < 0.5 ? -1 : 1;
        const moveY = Math.random() < 0.5 ? -1 : 1;
        const duration = Math.random() * 30 + 10; // Увеличиваем длительность перемещения
        const keyframes = `
      @keyframes move${i} {
        0% { transform: translate(0, 0); }
        50% { transform: translate(${moveX * Math.random() * 20}px, ${moveY * Math.random() * 20}px); }
        100% { transform: translate(0, 0); }
      }
    `;
        document.styleSheets[0].insertRule(keyframes, document.styleSheets[0].cssRules.length);

        star.style.animation += `, move${i} ${duration}s ease-in-out infinite`;
        star.style.animationDirection = `${moveX > 0 ? 'normal' : 'reverse'} ${moveY > 0 ? 'normal' : 'reverse'}`;
    }

}