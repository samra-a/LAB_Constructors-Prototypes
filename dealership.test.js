const {Dealership} = require('./dealership');
const {Car} = require('./car');

let dealer;
let car;

beforeEach(() =>{
    dealer = new Dealership("name",5);
    car = new Car("VW",500,"1.4L");
})

// afterEach(() =>{
//     delete dealer;
//     delete car;
// })

describe('can count cars in dealership',() =>{
    test("can count cars",()=>{
        expected = 0;
        actual = dealer.countCars();
        expect(actual).toBe(expected);
    })
})

describe('testing adding car function',() =>{
    test("can add a car", ()=>{
        dealer.addACar(car);
        expected = 1;
        actual = dealer.countCars();
        expect(actual).toBe(expected);
    })
})

describe('testing if array containing each cars manufacturer can be returned',() =>{
    test("can return array with all manufacturers", ()=>{
        const hans = new Car("VW",500,"1.4L");
        dealer.addACar(hans);
        const merc = new Car("Mercedes",40000,"6L");
        dealer.addACar(merc);
        dealer.addACar(merc);
        const bmw = new Car("BMW",45000,"3.5L");
        dealer.addACar(bmw);

        expected = new Set(["VW", "Mercedes", "BMW"]);
        actual = dealer.findManufacturers();
        //takes in two sets and checks if size is the same 
        //checks if every value of a is in b
        // a = expected
        //b = actual
        //let areSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));
        //check if they are same and store value:
        //let bool = areSetsEqual(expected,actual);
        expect(actual).toStrictEqual(expected);
    })
})

describe('testing findByManufacturer',() =>{
    test("can find VWs", ()=>{
        const hans = new Car("VW",500,"1.4L");
        dealer.addACar(hans);
        dealer.addACar(car);
        const merc = new Car("Mercedes",40000,"6L");
        dealer.addACar(merc);
        dealer.addACar(merc);
        const bmw = new Car("BMW",45000,"3.5L");
        dealer.addACar(bmw);
        
        //let areArraysEqual = (a, b) => a.size === b.size && [...a].every(value => b.includes(value))
        expected = [hans,hans];
        actual = dealer.findByManufacturer("VW");

        expect(actual).toStrictEqual(expected);
    })
})

describe('can sum total value of all cars in stock',() =>{
    test("sum of total cars",()=>{

        const hans = new Car("VW",500,"1.4L");
        dealer.addACar(hans);
        dealer.addACar(car);
        const merc = new Car("Mercedes",40000,"6L");
        dealer.addACar(merc);
        dealer.addACar(merc);
        const bmw = new Car("BMW",45000,"3.5L");
        dealer.addACar(bmw);

        expected = 126000;
        actual = dealer.findTotalValue();
        expect(actual).toBe(expected);
    })
})