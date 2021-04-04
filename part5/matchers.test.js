test('test add 3 + 7', () => {
    // toBe 匹配 ===
    // toEqual 
    // toBeNull
    const a = {one: 1};
    expect(a).toEqual({one: 1});
});


// 真假有关的匹配器
test('test add 3 + 7', () => {
    // toBeNull
    // undefined 和 null 不同
    const a = null;
    expect(a).toBeNull();
});

test('test add 3 + 7', () => {
    // toBeUndefined
    // undefined 和 null 不同
    const a = undefined;
    expect(a).toBeUndefined();
});

test('test add 3 + 7', () => {
    // toBeDefined
    const a = null;
    expect(a).toBeDefined();
});

test('toBeTruthy', () => {
    const a = true;
    expect(a).toBeTruthy();
});

test('toBeFalsy', () => {
    const a = 0;
    expect(a).toBeFalsy();
});

test('not', () => {
    const a = 1;
    expect(a).not.toBeFalsy();
});

// 数字相关的匹配器
test('toBeGreaterThan', () => {
    const count = 10;
    expect(count).toBeGreaterThan(9);
});

test('toBeLessThan', () => {
    const count = 10;
    expect(count).toBeLessThan(19);
});

test('toBeGreaterThanOrEqual', () => {
    const count = 10;
    expect(count).toBeGreaterThanOrEqual(10);
});

test('toBeCloseTo', () => {
    const firstNumber = 0.1;
    const secondNumber = 0.2;
    expect(firstNumber + secondNumber).toBeCloseTo(0.3);
});

// 字符串相关的匹配器
test('toMatch', () => {
    const str = 'test match';
    // 还可以写正则表达式
    expect(str).toMatch('test');
});

// Array, Set
test('toContain', () => {
    const arr = ['tammy', 'tang'];
    // 还可以写正则表达式
    expect(arr).toContain('tang');
});

// 异常匹配器
const throwNewErrorFunc = () => {
    throw new Error('this is a new error');
}

test('toThrow', () => {
    expect(throwNewErrorFunc).toThrow('this is a new error');
    // expect(throwNewErrorFunc).toThrow();
});

// 单元测试
// 集成测试：多个模块测试

// npm run test
// jest (babel-jest)
// babel-core
// .babelrc 配置
// 测试前做转化
// 运行转化时的代码
