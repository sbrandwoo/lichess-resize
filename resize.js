function resize(el) {
    var size = Math.floor(el.clientWidth / 8) * 8;
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.paddingBottom = '0px';
}

window.addEventListener('load', event => {
    setTimeout(() => {
        document.querySelectorAll('.main-board').forEach(el => resize(el));
        document.querySelectorAll('.cg-board').forEach(el => resize(el));

        window.dispatchEvent(new Event('resize'));
    }, 100);
});
