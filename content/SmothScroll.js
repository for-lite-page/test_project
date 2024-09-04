(function() {
    const settings = {
        animationDuration: 300, // Продолжительность анимации в миллисекундах
        stepSize: 400, // Размер шага прокрутки
    };

    let isScrolling = false;
    let startX, startY, startTime;

    // Функция плавной прокрутки
    function smoothScroll(target, deltaX, deltaY) {
        if (isScrolling) return;

        isScrolling = true;

        const startScrollTop = target.scrollTop;
        const startScrollLeft = target.scrollLeft;
        const startTime = performance.now();
        const duration = settings.animationDuration;

        function animateScroll(currentTime) {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Нормализованный прогресс (от 0 до 1)
            const easing = easeOutQuad(progress);

            target.scrollTop = startScrollTop - deltaY * easing; // Изменение знака для правильного направления
            target.scrollLeft = startScrollLeft - deltaX * easing; // Изменение знака для правильного направления

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                isScrolling = false;
            }
        }

        requestAnimationFrame(animateScroll);
    }

    // Функция easing для плавного замедления (ease-out)
    function easeOutQuad(t) {
        return t * (2 - t);
    }

    // Обработчик событий touchmove
    function onTouchMove(e) {
        if (e.targetTouches.length > 1) return; // Игнорируем множественные касания

        const touch = e.targetTouches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        startX = touch.clientX;
        startY = touch.clientY;

        const target = getScrollableElement(e.target);

        if (target) {
            smoothScroll(target, deltaX, deltaY);
            e.preventDefault(); // Предотвращение дефолтного поведения
        }
    }

    // Поиск скроллируемого элемента
    function getScrollableElement(el) {
        while (el && el !== document.body) {
            const style = getComputedStyle(el);
            if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
                return el;
            }
            el = el.parentElement;
        }
        return document.scrollingElement || document.documentElement;
    }

    // Инициализация
    function init() {
        window.addEventListener('touchstart', (e) => {
            if (e.targetTouches.length > 1) return; // Игнорируем множественные касания
            const touch = e.targetTouches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            startTime = performance.now();
        }, { passive: false });

        window.addEventListener('touchmove', onTouchMove, { passive: false });
    }

    // Запуск и уничтожение
    window.SmoothScrollMobile = {
        init: init,
        destroy: function() {
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchstart', onTouchMove);
        }
    };

    // Инициализация скрипта
    init();
})();
