const {Dealership} = require('./dealership');
const {Car} = require('./car');

const hans = new Car("VW",500,"1.4L");
const merc = new Car("Mercedes",40000,"6L");
const bmw = new Car("BMW",45000,"3.5L");

const vw = new Dealership("Vauxwagen Dealership",3);

//console.log(vw);
console.log(hans);
// console.log(vw.countCars());
// console.log(vw.addACar(hans));
// console.log(vw.addACar(merc));
// console.log(vw.addACar(merc));
// console.log(vw.addACar(bmw));
// console.log(vw.countCars());
// console.log(vw.findManufacturers());
// console.log(vw.findByManufacturer("VW"));
// console.log(vw.findTotalValue());
