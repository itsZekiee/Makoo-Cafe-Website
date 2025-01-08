// Account Sign In - Up
document.addEventListener("DOMContentLoaded", function() {
    const userModal = document.getElementById('userModal');
    const userIcon = document.getElementById('fa-user');
    const closeModal = document.getElementById('closeModal');
    const closeModalFooter = document.getElementById('closeModalFooter');

    userIcon.addEventListener('click', function() {
        userModal.style.display = 'block'; // Show the modal
    });

    closeModal.addEventListener('click', function() {
        userModal.style.display = 'none'; // Hide the modal
    });

    closeModalFooter.addEventListener('click', function() {
        userModal.style.display = 'none'; // Hide the modal
    });

    window.addEventListener('click', function(event) {
        if (event.target === userModal) {
            userModal.style.display = 'none'; // Hide the modal
        }
    });
});

// Product Modal Pop up
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