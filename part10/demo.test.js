import fetchData from './demo';

test('test fetchData', () => {
    return fetchData().then(data => {
        expect(eval(data));
    });
})