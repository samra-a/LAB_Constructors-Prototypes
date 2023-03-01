const Dealership = function(name,maxCars){
    this.name = name;
    this.maxCars = maxCars;
    this.stock = [];
}

/**
 * @param {String} name
 * @param {Number} maxCars
 */

//count the number of cars in stock 
Dealership.prototype.countCars = function(){
    return this.stock.length;
}

//Add a car to stock
Dealership.prototype.addACar = function(car){
    this.stock.push(car);
    return this.stock;
}

//Return an array containing each car's manufacturer
Dealership.prototype.findManufacturers = function(){
    return new Set(this.stock.map(c => c.manufacturer),[]);
}
//Find all the cars from a given manufacturer
Dealership.prototype.findByManufacturer = function(maker){
    return (this.stock.filter(c => c.manufacturer===maker));
}

//Find the total value of all the cars in stock
Dealership.prototype.findTotalValue = function(){
    return this.stock.reduce((accum,car) => accum + car.price,0);
}

module.exports={Dealership}