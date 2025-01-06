document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.remove('active');
});