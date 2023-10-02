import { sum } from "../sum";

test('Testing simple sum function with jest', ()=> {
    const val = sum(3, 4);

    expect(val).toBe(7);
})