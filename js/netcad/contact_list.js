let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Hellen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let running = true;

// Main program loop
while (running) {
    let choice = prompt("What would you like to do? (first/last/all/new/quit)");

    if (choice === "quit") {
        running = false;
        console.log("Goodbye! 👋🥲");
    }
    else if (choice === "first") {
        // Display first contact
        if (contacts.length > 0) {}
    }
}
