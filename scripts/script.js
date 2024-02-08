// document.getElementById("contactLink").addEventListener( "click", function(event) {
//     event.preventDefault();

//     var contact = {
//         displayName: "Rafael Abreu",
//         phoneNumber: [{value: "+16479424044", type: "mobile"}],
//         email: [{value: "rafaelg@nextologies.com", type: "work"}]
//     };

//     if (navigator.contacts && navigator.contacts.save) {
//         navigator.contacts.save(contact, onSuccess, onError);
//         } else {
//             alert("Your device does not support saving contacts.");
//     }
// });

// function onSuccess() {
//     alert("Contact saved!");
// }

// function  onError() {
//     alert("Failed to save the contact!");
// }


const vCardCreator = require( 'vcard-creator' );

const vCard = vCardCreator.create({
    firstName: "Rafael",
    lastName: "Abreu",
    email: "rafaelg@nextologies.com",
    phone: "+16479424044",
    address: {
        street: "120 Amber Street",
        city: "Markham",
        region: "Ontario",
        postalCode: "M3R 1A2",
        country: "Canada"
    },
    note: "MCR Supervisor | L2"
});

const vCardText = vCardCreator.toString(vCard);

var link = document.getElementById("contactLink");

link.addEventListener( "click", function() {
   alert("Contact saved!");
});



const year = new Date().getFullYear();

document.getElementById("year").innerText = year;