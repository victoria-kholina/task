window.onscroll = function() { fixedOnScroll(document.getElementById("sidebar"), 160) };

function fixedOnScroll(elem, pos) {
    let fixedElem  = elem.offsetTop +pos;
    window.pageYOffset > fixedElem ? elem.classList.add("fixed-elem") :   elem.classList.remove("fixed-elem");
}