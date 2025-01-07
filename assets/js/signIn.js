$(document).ready(function() {
    // Show modal and blur background
    $('#user-icon').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        $('#modal').css ('display', 'block');
        $('body').addClass('blur');
    });

    // Close modal
    $('#close-modal').on('click', function() {
        $('#modal').css('display', 'none');
        $('body').removeClass('blur');
    });

    // Close modal when clicking outside of the modal content
    $(window).on('click', function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').css('display', 'none');
            $('body').removeClass('blur');
        }
    });
});