import timer from './timer';

test('test timer:', () => {
    timer(() => {
        expect(1).toBe(1);
    });
})