// NetCad Academy Excercises
/*
* How it works:
* The program uses prompt() three times to get the name, phone number, and email address from the user
* It creates a new contact object with the user-provided data
* Uses push() to add the new contact to the end of the contacts array
* Calculates the index of the last contact
* Displays both the first and last contacts from the updated list
*/
let contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
}, {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libreo@convallis.edu"
}];

// Get new contact data from user
let newName = prompt("Enter the name of the nre contact:");
let newPhone = prompt("Enter the phone number of the new contact:");
let newEmail = prompt("Enter the new Address of the new Contact:");

// Add the contact to the end of the list
contacts.push({
  name: newName,
  phone: newPhone,
  email: newEmail
});

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
