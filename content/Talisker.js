document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Отключение правой кнопки мыши
});

document.addEventListener('keydown', function(e) {
    // Блокировка контекстного меню
    if (e.shiftKey && e.key === 'F10') {
        e.preventDefault();
    }

    if (e.keyCode === 93 || e.key === 'ContextMenu') {
        e.preventDefault();
    }

    // Блокировка инструментов разработчика
    if (e.key === 'F12') {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
    }

    // Блокировка просмотра исходного кода страницы
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
    }

    // Блокировка сохранения страницы
    if (e.ctrlKey && e.key === 'S') {
        e.preventDefault();
    }

});
