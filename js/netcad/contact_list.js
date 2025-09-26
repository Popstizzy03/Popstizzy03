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

let running = true;

// Main program loop
while (running) {
    let choice = prompt("What would you like to do? (first/last/all/new/quit)");
    
    if (choice === "quit") {
        running = false;
        console.log("Goodbye! 🥲👋");
    } 
    else if (choice === "first") {
        // Display first contact
        if (contacts.length > 0) {
            console.log("First contact:");
            console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        } else {
            console.log("No contacts available.");
        }
    } 
    else if (choice === "last") {
        // Display last contact
        if (contacts.length > 0) {
            let lastIndex = contacts.length - 1;
            console.log("Last contact:");
            console.log(`${contacts[lastIndex].name} / ${contacts[lastIndex].phone} / ${contacts[lastIndex].email}`);
        } else {
            console.log("No contacts available.");
        }
    } 
    else if (choice === "all") {
        // Display all contacts using a loop
        if (contacts.length > 0) {
            console.log("All contacts:");
            for (let i = 0; i < contacts.length; i++) {
                console.log(`Contact ${i + 1}: ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
            }
        } else {
            console.log("No contacts available.");
        }
    } 
    else if (choice === "new") {
        // Add new contact
        let newName = prompt("Enter the name of the new contact:");
        let newPhone = prompt("Enter the phone number of the new contact:");
        let newEmail = prompt("Enter the email address of the new contact:");
        
        if (newName && newPhone && newEmail) {
            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });
            console.log("New contact added successfully!");
        } else {
            console.log("Contact not added. Please provide all required information.");
        }
    } 
    else {
        console.log("Invalid choice. Please enter: first, last, all, new, or quit");
    }
    
    console.log(""); // Empty line for better readability
}
