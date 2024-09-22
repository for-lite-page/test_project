document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Отключение правой кнопки мыши
});

document.addEventListener('keydown', function(e) {
    // Блокировка контекстного меню
    if (e.shiftKey && e.keyCode === 121) { // Shift + F10 (keyCode 121)
        e.preventDefault();
    }

    if (e.keyCode === 93) { // Клавиша Menu (keyCode 93)
        e.preventDefault();
    }

    // Блокировка инструментов разработчика
    if (e.keyCode === 123) { // F12 (keyCode 123)
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { // Ctrl + Shift + I (keyCode 73)
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) { // Ctrl + Shift + J (keyCode 74)
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) { // Ctrl + Shift + C (keyCode 67)
        e.preventDefault();
    }

    // Блокировка просмотра исходного кода страницы
    if (e.ctrlKey && e.keyCode === 85) { // Ctrl + U (keyCode 85)
        e.preventDefault();
    }

    // Блокировка сохранения страницы
    if (e.ctrlKey && e.keyCode === 83) { // Ctrl + S (keyCode 83)
        e.preventDefault();
    }
});
