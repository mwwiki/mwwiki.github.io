document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebarBtn = document.querySelector(".toggle-btn");
    const sidebar = document.querySelector(".sidebar");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    toggleSidebarBtn.addEventListener("click", toggleSidebar);
    
    const menuTitle = document.querySelector('.menu-title');
    const basicGuideTitle = document.querySelector('.sidebar-header:nth-child(2)');

    menuTitle.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    basicGuideTitle.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    sidebar.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        const content = document.querySelector(".content");
        content.classList.toggle("collapsed");
    });
});
