function singupUser(event) {
    event.preventDefault(); // 🚨 stops page reload

    console.log("Singup button clicked");

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Email:", email);
    console.log("Password:", password);

    fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => res.text())
    .then(data => {
        console.log("Response:", data);
        alert(data);
    })
    .catch(err => {
        console.error("Error:", err);
    });
}