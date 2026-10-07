document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll("main section");

    function mostrarTela(id) {

        sections.forEach(function (section) {
            section.style.display = "none";
        });

        const tela = document.getElementById(id);

        if (tela) {
            tela.style.display = "flex";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const id = link.getAttribute("href").substring(1);

            mostrarTela(id);
        });
    });

    mostrarTela("inicio");
});
