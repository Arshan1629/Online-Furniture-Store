document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    const password = inputs[1].value;
    const confirmPassword = inputs[2].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Sign up successful!");
});