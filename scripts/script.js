document.getElementById("contactLink").addEventListener( "click", function(event) {
    event.preventDefault();

    var contact = {
        displayName: "Rafael Abreu",
        phoneNumber: [{value: "+16479424044", type: "mobile"}],
        email: [{value: "rafaelg@nextologies.com", type: "work"}]
    };

    if (navigator.contacts && navigator.contacts.save) {
        navigator.contacts.save(contact, onSuccess, onError);
        } else {
            alert("Your device does not support saving contacts.");
    }
});

function onSuccess() {
    alert("Contact saved!");
}

function  onError() {
    alert("Failed to save the contact!");
}


const year = new Date().getFullYear();

document.getElementById("year").innerText = year;