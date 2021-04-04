const math = require('./math.js');
const { add, minus, multi } = math;

test('test add 3 + 7', () => {
    expect(add(3, 7)).toBe(10);
});

test('test minus 3 - 3', () => {
    expect(minus(3, 3)).toBe(0);
});

test('test multi 3 * 3', () => {
    expect(multi(3, 3)).toBe(9);
});

// 单元测试
// 集成测试：多个模块测试
