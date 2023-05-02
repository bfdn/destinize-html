document.querySelector(".menuOpen").addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.toggle("hidden");
    document.querySelector(".mobile-menu").classList.toggle("flex");
});



const child = document.querySelectorAll(".child");

child.forEach((item) => {
    item.addEventListener("click", (e) => {
        let childMenu = e.target.nextSibling.nextSibling;
        childMenu.classList.toggle("hidden")
        childMenu.classList.toggle("flex")
        childMenu.classList.toggle("animate__animated")
        childMenu.classList.toggle("animate__slideInLeft")
    })
})





