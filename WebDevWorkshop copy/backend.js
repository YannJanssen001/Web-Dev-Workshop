document.querySelector('.next-button').addEventListener('click', function(event) {
    event.preventDefault(); // This line prevents the form from submitting

    // Redirect to the next page
    window.location.href = 'next_product_feedback2.html';
    return false;
});

document.querySelector('.submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // This line prevents the form from submitting

    var rating = document.querySelector('input[name="rating"]:checked').value;

    if (rating == "") {
        alert("Please select a rating");
        return false;
    }

    // Store the rating in local storage
    localStorage.setItem('rating', rating);

    // Redirect to the next page
    window.location.href = 'next_product_feedback.html';
    return false;
});
