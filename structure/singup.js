function singupUser() {
    console.log("Signup button clicked");

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Email:", email);
    console.log("Password:", password);

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
    .then(res => res.text())
    .then(data => {
        console.log("Response:", data);
        alert(data);
    })
    .catch(err => {
        console.error("Error:", err);
        alert("Something went wrong!");
    });
}