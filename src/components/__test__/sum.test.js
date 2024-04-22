import { sum } from "../sum"

test('', ()=> {
    const result = sum(2, 3);

    //Assertion
    expect(result).toBe(5);
})