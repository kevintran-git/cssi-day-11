/*
document.querySelector("#googleSignIn").addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
        window.location = "writeNote.html";
    }).catch(error => {
        console.log("login failed ", error);
    })
})

document.querySelector("#emailSignIn").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("is-active");
})

document.querySelector(".modal-background").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("is-active");
})


document.querySelector("#loginButton").addEventListener("click", () => {
    const email = document.querySelector("#emailInput").value;
    const password = document.querySelector("#passwordInput").value;
    alert(email + password);
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location = "writeNote.html";
        })
        .catch((error) => {
            if (error == 'auth/user-not-found') {
                alert("User not found.");
            }
            if (error == 'auth/wrong-password') {
                alert("Your password is invalid.");
            }
            else {
                alert(error);
            }
        });
})

document.querySelector(".has-text-grey").addEventListener("click", () => {
    document.querySelector("#passwordConfirmInput").classList.remove("is-hidden");
    document.querySelector("#loginButton").innerHTML = "Create New Account";
    document.querySelector(".has-text-grey").classList.add("is-hidden");
})*/