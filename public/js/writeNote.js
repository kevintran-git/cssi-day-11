let googleUser = null;

window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            googleUser = user;
            document.querySelector("#helloTitle").innerHTML = `Hello, ${googleUser.displayName}!`
        } else {
            console.log("not logged in!");
        }
    });
}

const createNoteButton = document.querySelector("#createNoteButton");
createNoteButton.addEventListener("click", () => {
    const payload = {
        title: document.querySelector("#noteTitle").value,
        text: document.querySelector("#noteText").value,
        created: new Date().getTime()
    }
    firebase.database().ref(`/users/${googleUser.uid}`).push(payload).then(() => {
        alert("Note Submitted.");
        document.querySelector("#noteTitle").value = "";
        document.querySelector("#noteText").value = "";
    }).catch(error => {
        console.log("error writing new note: ", error);
    })
});