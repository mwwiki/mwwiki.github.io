document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    let currentSectionId = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 2 &&
            window.scrollY < sectionTop + sectionHeight / 2) {
            currentSectionId = section.id;
        }
    });

    if (currentSectionId) {
        history.replaceState(null, null, `#${currentSectionId}`);
    }
});
