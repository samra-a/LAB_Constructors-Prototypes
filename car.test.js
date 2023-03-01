const {Car} = require('./car');

const hans = new Car("VW", 500, "1.4L");

describe('can access all propeties in Car object', () =>{
    test("can access manufacturer", () => {
        expected = "VW";
        actual = hans.manufacturer;
        expect(actual).toBe(expected);
    })

    test("can access price", () => {
        expected = 500;
        actual = hans.price;
        expect(actual).toBe(expected);
    })
    test("can access engine", () => {
        expected = "1.4L";
        actual = hans.engine;
        expect(actual).toBe(expected);
    })
})