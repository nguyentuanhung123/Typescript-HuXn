interface Vehicle {
    start(): void
    stop(): void
}

class Car implements Vehicle {
    start(): void {
        console.log('Car is starting...');  
    }
    stop(): void {
        console.log('Car is stopped');  
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();