const carMakers = ['ford', 'toyota', 'chevy'];
const emptyArray: string[] = [];

const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];
const carsByMake: string[][] = [];

// Help with inferences when extracting values
const anotherCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});
