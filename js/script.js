const scrollBtn = document.getElementById('scrollBtn');
const contentSection = document.getElementById('content');

if (scrollBtn && contentSection) {
    scrollBtn.addEventListener('click', () => {
        contentSection.scrollIntoView({ behavior: 'smooth' });
    });
}

const filterBtns = document.querySelectorAll('.filter-btn');
const posts = document.querySelectorAll('.post-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        posts.forEach(post => {
            const category = post.getAttribute('data-category');
            

            if (filterValue === 'all' || category === filterValue) {
                post.classList.remove('hidden');
            } else {
                post.classList.add('hidden');
            }
        });
    });
});
