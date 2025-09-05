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

while (true) {
    let choice = prompt("Enter choice: first, last, new, quit");

    if (choice == "first") {
        alert(`First contact: ${contacts[0].name}`);
    } else if (choice == "last") {
        let last = contacts.length - 1;
        alert(`Last contact: ${contacts[last].name}`);
    } else if (choice == "new") {
        let name = prompt("Enter name") || "";
        let phone = prompt("Enter phone") || "";
        let email = prompt("Enter email") || "";

        if (name && phone && email) {
            contacts.push({ name, phone, email });
            alert("Contact added!");
        } else {
            alert("Value is missing");
        }
    } else if (choice == "quit") {
        break;  // exits the loop
    } else {
        alert("Invalid choice");
    }
}