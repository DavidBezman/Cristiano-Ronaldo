function verifierFormulaire() {
    let nombre = document.getElementById("nom").value;
    let msg = document.getElementById("message");
    if (nombre === "") {
        msg.textContent = "Erreur : Vous devez écrire votre nom !";
        msg.style.color = "red";
        return false;
    }
    msg.textContent = "Merci " + nombre + ", votre vote a été enregistré !";
    msg.style.color = "green";
    return false;
}

