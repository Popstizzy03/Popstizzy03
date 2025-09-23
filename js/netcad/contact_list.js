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
    email: "libero@convallis.edu"
}];

// Get user choice
let choice = prompt("What would you like to do? (first/last/new)");

// Process user choice
if (choice === "first") {
    // Show first contact
    if (contacts.length > 0) {
        console.log(`First contact: ${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    } else {
        console.log("No contacts available.");
    }
} else if (choice === "last") {
    // Show last contact
    if (contacts.length > 0) {
        let lastIndex = contacts.length - 1;
        console.log(`Last contact: ${contacts[lastIndex].name} / ${contacts[lastIndex].phone} / ${contacts[lastIndex].email}`);
    } else {
        console.log("No contacts available.");
    }
} else if (choice === "new") {
    // Add new contact
    let newName = prompt("Enter the name of the new contact:");
    let newPhone = prompt("Enter the phone number of the new contact:");
    let newEmail = prompt("Enter the email address of the new contact:");
    
    // Check if all data is provided (non-empty strings)
    if (newName && newPhone && newEmail) {
        contacts.push({
            name: newName,
            phone: newPhone,
            email: newEmail
        });
        console.log("New contact added successfully!");
        
        // Show the updated last contact
        let lastIndex = contacts.length - 1;
        console.log(`Last contact: ${contacts[lastIndex].name} / ${contacts[lastIndex].phone} / ${contacts[lastIndex].email}`);
    } else {
        console.log("Contact not added. Please provide all required information (name, phone, and email).");
    }
} else {
    console.log("Invalid choice. Please enter 'first', 'last', or 'new'.");
}
