const fs = require("fs");
const { read, write } = require("../IO/IO");

async function buyproduct(username, productname) {
    let usersdata = await read("./users.txt");
    let productsdata = await read("./products.txt");

    // Parse data (assuming JSON in txt files)
    // usersdata = JSON.parse(usersdata);
    // productsdata = JSON.parse(productsdata);

    // Find user
    let isUserValid = usersdata.find((u) => u.username === username);

    // Find product
    let isProductValid = productsdata.find((p) => p.name === productname);

    if (!isUserValid) {
        console.log(`User "${username}" not found`);
        return;
    }

    if (!isProductValid) {
        console.log(`Product "${productname}" not found`);
        return;
    }

    // Create combined record
    let order = {
        user: isUserValid,
        product: isProductValid,
        time: new Date().toISOString()
    };

    // Append to order history
    await write("./orderHistory.txt", JSON.stringify(order) + "\n");
    console.log("Order placed successfully.");
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    rl.question("Enter product name: ", (product) => {
        buyproduct(name.trim(), product.trim());
        rl.close(); 
    });
});
