jest.mock('./demo');
// jest.unmock('./demo');
import { fetchData } from './demo';
// 引入真正的getNumber函数
const { getNumber } = jest.requireActual('./demo');

// 把异步变成同步
test('test fetchData', () => {
        return fetchData().then(data => {
            expect(eval(data)).toEqual('123');
        });
});

test('test getNumber', () => {
    expect(getNumber()).toEqual(123);
});