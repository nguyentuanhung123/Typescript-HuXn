// Original interface
interface Car {
    brand: string;
    start(): void;
}

// Declaration merging (interface extension)
interface Car {
    model: string;
    stop(): void;
}

// Usage of the extended interface
const myCar: Car = {
    brand: "Toyota",
    model: "Camry",
    start() {
        console.log("Car started");
    },
    stop() {
        console.log("Car stopped");
    }
}

myCar.start();
myCar.stop();
