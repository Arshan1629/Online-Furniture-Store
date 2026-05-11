document
    .getElementById("loginForm")
    .addEventListener("submit", loginUser);

function loginUser(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    fetch("http://localhost:8080/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email,
            password: password
        })

    })

    .then(response => response.text())

    .then(data => {

        alert(data);

        if (data === "Login Successful") {

            window.location.href = "index.html";

        }

    })

    .catch(error => {

        console.error("Error:", error);

        alert("Something went wrong!");

    });
}