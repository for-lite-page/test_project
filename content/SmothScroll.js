//Momentum Scrolling
const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;

const wrapper = document.querySelector(".container"),
    target = document.getElementsByTagName("body")[0];


let easing = "cubic-bezier(0.23, 0.5, 0.32, 0.5)",
    duration = "0.4s",
    lastScrollY = window.scrollY,
    pos = 0;

const init = () => {
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

    loop();
};

const onScroll = scrollY => {
    pos = -(scrollY || document.documentElement.scrollTop);
    wrapper.style.transform = "translateY(" + pos + "px)";
};

const loop = () => {
    let scrollY = window.scrollY;

    if (lastScrollY === scrollY) {
        requestAnimationFrame(loop);
        return;
    } else {
        lastScrollY = scrollY;
        onScroll(scrollY);
        requestAnimationFrame(loop);
    }
};

init();
