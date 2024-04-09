const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
pepsi[0] = 40;
pepsi[2] = 'brown';
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [4000, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
};

