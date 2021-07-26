document.querySelector(".button").addEventListener("click", () => {
    console.log("clicked!");
    console.log(CryptoJS.SHA3("hello").toString());
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user;
        console.log("login success", user);
        window.location = "writeNote.html"
    }).catch(error => {
        console.log("login failed ", error);
    })
})