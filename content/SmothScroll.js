(function() {
    var settings = {
        frameRate: 150,            // Частота кадров для анимации
        animationTime: 400,        // Время анимации в миллисекундах
        stepSize: 100,             // Размер шага прокрутки
        pulseAlgorithm: true,      // Использовать алгоритм импульса
        pulseScale: 4,             // Масштаб импульса
        pulseNormalize: 1          // Нормализация импульса
    };

    var isScrolling = false;
    var scrollTimeout;
    var scrollEvents = [];
    var root = document.documentElement;

    // Обработчик прокрутки
    function handleScroll(target, deltaX, deltaY) {
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(function() {
                applyScroll(target, deltaX, deltaY);
                isScrolling = false;
            });
        }
    }

    // Функция применения прокрутки
    function applyScroll(target, deltaX, deltaY) {
        var maxScrollTop = target.scrollHeight - target.clientHeight;
        var maxScrollLeft = target.scrollWidth - target.clientWidth;

        var scrollTop = Math.max(0, Math.min(maxScrollTop, target.scrollTop + deltaY));
        var scrollLeft = Math.max(0, Math.min(maxScrollLeft, target.scrollLeft + deltaX));

        target.scrollTo({
            top: scrollTop,
            left: scrollLeft,
            behavior: 'smooth'
        });

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            scrollEvents = [];
        }, settings.animationTime);
    }

    // Обработчик событий touchmove (тач-событий)
    function onTouchMove(e) {
        if (e.targetTouches.length > 1) return; // Игнорировать множественные касания

        var touch = e.targetTouches[0];
        var deltaX = -touch.clientX;
        var deltaY = -touch.clientY;

        var target = getScrollableElement(e.target);

        if (target) {
            handleScroll(target, deltaX, deltaY);
            e.preventDefault();  // Предотвращение дефолтного поведения
        }
    }

    // Поиск скроллируемого элемента
    function getScrollableElement(el) {
        while (el && el !== document.body) {
            var style = getComputedStyle(el);
            if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
                return el;
            }
            el = el.parentElement;
        }
        return document.scrollingElement || document.documentElement;
    }

    // Привязка событий touchmove
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    // Определение методов для контроля над плагином
    window.SmoothScrollMobile = {
        destroy: function() {
            window.removeEventListener('touchmove', onTouchMove);
        }
    };
})();