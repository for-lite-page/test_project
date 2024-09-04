
function showCategory(category) {
    // Получаем все элементы с классом 'item'
    const items = document.querySelectorAll('.item');

    // Проходим по каждому элементу и обновляем отображение в зависимости от категории
    items.forEach(item => {
        const block = item.querySelector('.block');

        // Если блок соответствует категории или если категория 'all', показываем элемент
        if (category === 'all' || block.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    // Обновляем активные кнопки
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Инициализация отображения по умолчанию
document.addEventListener('DOMContentLoaded', () => showCategory('all'));