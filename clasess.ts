class Vehicle {
  // public drive(): void {
  //   console.log(`chugga chugga`);
  // }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log(`vroom`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle();
const car = new Car();
car.startDrivingProcess();
vehicle.honk();
car.honk();
