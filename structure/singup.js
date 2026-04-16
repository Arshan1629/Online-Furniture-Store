function signupUser(event) {
    event.preventDefault(); // 🚀 VERY IMPORTANT (stops page reload)

    console.log("Signup button clicked");

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

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
    .then(response => response.text())
    .then(data => {
        console.log("Response:", data);
        alert(data);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong!");
    });
}