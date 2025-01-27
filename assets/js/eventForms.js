// Show the payment form when "Next" is clicked
document.getElementById('nextToPayment').addEventListener('click', function() {
    document.getElementById('personal-info').style.display = 'none';
    document.getElementById('payment-info').style.display = 'block';
});

// Go back to the personal information form
document.getElementById('backToPersonal').addEventListener('click', function() {
    document.getElementById('payment-info').style.display = 'none';
    document.getElementById('personal-info').style.display = 'block';
});

// Show confirmation step and display summary
document.getElementById('nextToConfirmation').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventType = document.getElementById('eventType').value;
    const eventDate = document.getElementById('eventDate').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Get card details if card payment is selected
    let cardDetails = '';
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        // Identify card type
        const cardType = identifyCardType(cardNumber);
        cardDetails = `<p><strong>Card Type:</strong> ${cardType}</p>`;
    }

    const summary = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Type of Event:</strong> ${eventType}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        ${cardDetails}
    `;
    document.getElementById('summary').innerHTML = summary;

    document.getElementById('payment-info').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
});

// Go back to the payment form from confirmation
document.getElementById('backToPayment').addEventListener('click', function() {
    document.getElementById('confirmation').style.display = 'none';
    document.getElementById('payment-info').style.display = 'block';
});

// Handle form submission
document.getElementById('submitForm').addEventListener('click', function() {
    alert('Form submitted successfully!');
});

// Show/hide card payment fields based on selected payment method
document.getElementById('paymentMethod').addEventListener('change', function() {
    const selectedMethod = this.value;
    const cardPaymentFields = document.getElementById('cardPaymentFields');
    const gcashMayaFields = document.getElementById('gcashMayaFields');

    if (selectedMethod === 'card') {
        cardPaymentFields.style.display = 'block';
        gcashMayaFields.style.display = 'none';
    } else {
        cardPaymentFields.style.display = 'none';
        gcashMayaFields.style.display = 'block';
    }
});

// Format card number input
document.getElementById('cardNumber').addEventListener('input', function(e) {
    const value = e.target.value.replace(/\D/g, '').substring(0, 16); // Remove non-digits and limit to 16 digits
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim(); // Format as 4 groups of 4 digits
    e.target.value = formattedValue;

    // Update card type icon
    const cardTypeIcon = document.getElementById('cardTypeIcon');
    if (value.startsWith('4')) {
        cardTypeIcon.innerHTML = '<i class="fab fa-cc-visa"></i>'; // Visa icon
    } else if (value.startsWith('5')) {
        cardTypeIcon.innerHTML = '<i class="fab fa-cc-mastercard"></i>'; // MasterCard icon
    } else {
        cardTypeIcon.innerHTML = '<i class="fas fa-credit-card"></i>'; // Default icon
    }
});

// Format expiration date input
document.getElementById('expirationDate').addEventListener('input', function(e) {
    const value = e.target.value.replace(/\D/g, '').substring(0, 4); // Remove non-digits and limit to 4 digits
    if (value.length >= 3) {
        e.target.value = value.slice(0, 2) + '/' + value.slice(2); // Format as MM/YY
    } else {
        e.target.value = value; // Just show MM or MM/
    }
});

// Function to identify card type
function identifyCardType(cardNumber) {
    const firstDigit = cardNumber.charAt(0);
    if (firstDigit === '4') {
        return 'Visa';
    } else if (firstDigit === '5') {
        return 'MasterCard';
    } else {
        return 'Unknown';
    }
}