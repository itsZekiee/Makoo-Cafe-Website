// Account Sign In & Up Modal
document.addEventListener("DOMContentLoaded", function() {
    const userModal = document.getElementById('userModal');
    const userIcon = document.getElementById('fa-user');
    const closeModal = document.getElementById('closeModal');
    const closeModalFooter = document.getElementById('closeModalFooter');

    userIcon.addEventListener('click', function() {
        userModal.style.display = 'block'; 
    });

    closeModal.addEventListener('click', function() {
        userModal.style.display = 'none'; 
    });

    closeModalFooter.addEventListener('click', function() {
        userModal.style.display = 'none'; 
    });

    window.addEventListener('click', function(event) {
        if (event.target === userModal) {
            userModal.style.display = 'none'; 
        }
    });
});

// Pop Up - Product Modal
const productModal = document.getElementById('productModal');
if (productModal) {
    productModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget; 
        const productName = button.getAttribute('data-product-name');
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
}

// Pop Up - Warning Modal
document.addEventListener("DOMContentLoaded", function() {
    const shoppingCart = document.querySelectorAll('.fa-shopping-cart')
    const heartIcons = document.querySelectorAll('.fa-heart');
    const primaryButtons = document.querySelectorAll('.btn-primary');
    const secondaryButtons = document.querySelectorAll('.btn-secondary');

    function showWarningModal() {
        const warningModal = new bootstrap.Modal(document.getElementById('warningModal'));
        warningModal.show();
    }

    shoppingCart.forEach(icon => {
        icon.addEventListener('click', showWarningModal);
    });

    heartIcons.forEach(icon => {
        icon.addEventListener('click', showWarningModal);
    });

    primaryButtons.forEach(button => {
        button.addEventListener('click', showWarningModal);
    });

    secondaryButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
});