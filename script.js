function myFunction() {
    const menutoggle = document.querySelector('.toggle');
    const menuactive = document.querySelector('.menu-top-mobile-active');

    if (menuactive.style.display === "block") {
        menuactive.style.display = "none";
        menutoggle.classList.toggle('active');
    }
    else {
        menuactive.style.display = "block";
        menutoggle.classList.toggle('active');
    }
};

menutoggled = document.querySelector('.toggle');
const removmenu = document.querySelector('.menu-top-mobile-active');
function remove() {
    menutoggled.classList.toggle('active');
    removmenu.style.display = "none";
}