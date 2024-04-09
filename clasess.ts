class Vehicle {
  // public drive(): void {
  //   console.log(`chugga chugga`);
  // }

  constructor(public color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }

  public get getColor(): string {
    return this.color;
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.getColor);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log(`vroom`);
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();
// vehicle.honk();
// car.honk();
