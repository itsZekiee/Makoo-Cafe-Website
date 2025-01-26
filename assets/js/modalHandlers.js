let isWarningModalVisible = false; // Track the visibility of the warning modal

// Account Sign In & Up Modal
document.addEventListener("DOMContentLoaded", function() {
    const userModal = document.getElementById('userModal');
    const userIcon = document.getElementById('fa-user');
    const closeModal = document.getElementById('closeModal');

    userIcon.addEventListener('click', function() {
        userModal.style.display = 'block'; 
    });

    closeModal.addEventListener('click', function() {
        userModal.style.display = 'none'; 
    });

    window.addEventListener('click', function(event) {
        if (event.target === userModal) {
            userModal.style.display = 'none'; 
        }
    });
});

// Warning Modal
document.addEventListener("DOMContentLoaded", function() {
    const shoppingCart = document.querySelectorAll('.fa-shopping-cart');
    const heartIcons = document.querySelectorAll('.fa-heart');
    const primaryButtons = document.querySelectorAll('.btn-primary');
    const secondaryButtons = document.querySelectorAll('.btn-secondary');

    function showWarningModal() {
        const warningModal = new bootstrap.Modal(document.getElementById('warning__customModal'));

        // Check if the product modal is currently visible
        const productModal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
        if (productModal) {
            productModal.hide(); // Hide the product modal if it's open
        }

        warningModal.show();
        isWarningModalVisible = true; // Set the flag to true when the warning modal is shown

        // Add an event listener to reset the flag when the modal is hidden
        warningModal._element.addEventListener('hidden.bs.modal', function () {
            isWarningModalVisible = false; // Reset the flag when the modal is closed
        });
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
        button.addEventListener('click', showWarningModal);
    });
});

// Product Modal
const productModal = document.getElementById('productModal');
if (productModal) {
    productModal.addEventListener('show.bs.modal', event => {
        // Check if the warning modal is visible
        if (isWarningModalVisible) {
            event.preventDefault(); // Prevent the product modal from showing
            return; // Exit the function
        }

        const button = event.relatedTarget; 
        const productName = button.getAttribute('data-product-name');
        const productPrice = button.getAttribute('data-product-price');
        const productDescription = button.getAttribute('data-product-description');
        const productImage = button.getAttribute('data-product-image');

        // Update the modal's content
        const modalTitle = productModal.querySelector('#modalProductName');
        const modalPrice = productModal.querySelector('#modalProductPrice');
        const modalDescription = productModal.querySelector('#modalProductDescription');
        const modalImage = productModal.querySelector('#modalProductImage');

        modalTitle.textContent = productName;
        modalPrice.textContent = productPrice;
        modalDescription.textContent = productDescription;
        modalImage.src = productImage;
    });
}