const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(Number(answer)));
    });
}

async function calculator() {
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    const choice = await ask("Choose an operation (1-4): ");

    const a = await ask("Enter first number: ");
    const b = await ask("Enter second number: ");

    let result;

    switch (choice) {
        case 1:
            result = a + b;
            break;
        case 2:
            result = a - b;
            break;
        case 3:
            result = a * b;
            break;
        case 4:
            result = a / b;
            break;
        default:
            console.log("Invalid choice");
            rl.close();
            return;
    }

    console.log("Result:", result);
    rl.close();
}

calculator();
