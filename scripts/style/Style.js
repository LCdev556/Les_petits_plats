function adjustDivWidths() {
    const div2 = document.querySelector(".recipe-section")
    const div1 = document.querySelector(".filter-section")

    const width1 = window.getComputedStyle(div1).width;
    div2.style.width = width1;

    console.log("ah")
};

adjustDivWidths();

window.addEventListener('resize', adjustDivWidths);
