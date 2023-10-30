const show = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                translate: ['200px 0', 0]
            }
            entry.target.animate(keyframes, 600);

            obs.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(show);

//監視対象
const images = document.querySelectorAll('.img');
images.forEach(img => {
    observer.observe(img);
})