(function() {
    var settings = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 100,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1
    };

    var isScrolling = false;
    var scrollTimeout;
    var root = document.documentElement;

    function handleScroll(target, deltaX, deltaY) {
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(function() {
                applyScroll(target, deltaX, deltaY);
                isScrolling = false;
            });
        }
    }

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
            isScrolling = false;
        }, settings.animationTime);
    }

    function onTouchMove(e) {
        if (e.targetTouches.length > 1) return;

        var touch = e.targetTouches[0];
        var deltaX = touch.clientX - (touch.clientX || 0);
        var deltaY = touch.clientY - (touch.clientY || 0);

        touch.clientX = touch.clientX; // Update last touch position
        touch.clientY = touch.clientY;

        var target = getScrollableElement(e.target);

        if (target) {
            handleScroll(target, deltaX, deltaY);
            e.preventDefault();
        }
    }

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

    window.addEventListener('touchmove', onTouchMove, { passive: false });

    window.SmoothScrollMobile = {
        destroy: function() {
            window.removeEventListener('touchmove', onTouchMove);
        }
    };
})();
