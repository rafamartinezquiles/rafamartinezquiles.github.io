document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;

        fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${encodeURIComponent(email)}`
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });
});