const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;

const wrapper = document.querySelector(".container"),
    target = document.getElementsByTagName("body")[0];

let easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Более отзывчивая функция
    duration = "0.2s", // Уменьшенная длительность
    lastScrollY = window.scrollY,
    pos = 0;

const smooth = () => {
    target.style.height = wrapper.offsetHeight + "px";
    target.style.overflow = "auto";

    wrapper.style.transition = "transform " + duration + " " + easing;
    wrapper.style.position = "fixed";
    wrapper.style.justifyContent = "center";
    wrapper.style.top = "0";
    wrapper.style.left = "0";
    wrapper.style.width = "100%";
    wrapper.style.padding = "0";
    wrapper.style.zIndex = "2";
    wrapper.style.display = "flex";
    wrapper.style.backfaceVisibility = "hidden";
    wrapper.style.willChange = "transform"; // Добавляем will-change для оптимизации

    loop();
};

const onScroll = scrollY => {
    pos = -(scrollY || document.documentElement.scrollTop);
    wrapper.style.transform = "translateY(" + pos + "px)";
};

const loop = () => {
    let scrollY = window.scrollY;

    if (lastScrollY !== scrollY) {
        lastScrollY = scrollY;
        onScroll(scrollY);
    }
    requestAnimationFrame(loop);
};

smooth();
