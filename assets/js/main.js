document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#productCarouselTaiyaki');
    var carousel = new bootstrap.Carousel(myCarousel);
});

// Hamburger menu functionality
document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.remove('active');
});

// PRODUCT MODAL
const productModal = document.getElementById('productModal');
productModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget; // Button that triggered the modal
    const productName = button .getAttribute('data-product-name');
    const productPrice = button.getAttribute('data-product-price');
    const productDescription = button.getAttribute('data-product-description');
    const productImage = button.getAttribute('data-product-image');

    // Update the modal's content
    const modalTitle = productModal.querySelector('.modal-title');
    const modalPrice = productModal.querySelector('#modalProductPrice');
    const modalDescription = productModal.querySelector('#modalProductDescription');
    const modalImage = productModal.querySelector('#modalProductImage');

    modalTitle.textContent = productName;
    modalPrice.textContent = productPrice;
    modalDescription.textContent = productDescription;
    modalImage.src = productImage;
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}