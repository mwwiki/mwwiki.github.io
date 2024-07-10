document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                history.pushState(null, '', `#${id}`);
            }
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
