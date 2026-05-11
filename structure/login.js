function loginUser(){

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

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

    .then(res => res.text())

    .then(data => {

        alert(data);

    })

    .catch(error => {

        console.error("Error:", error);

    });

}