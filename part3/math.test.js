import { add, minus, multi } from './math';

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

// npm run test
// jest (babel-jest)
// babel-core
// .babelrc 配置
// 测试前做转化
// 运行转化时的代码
