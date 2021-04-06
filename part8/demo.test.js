import { runCallBack, createObject, getData } from './demo';
import axios from 'axios';

jest.mock('axios');

// calls
// instances
// results
// invocationCallOrder

// mock 函数
// 1.捕获函数的调用
// 2.让我们自由地设置返回结果
// 3.改变内部函数的实现

test('test runCallBack', () => {
    // const func = jest.fn(() => {
    //     return '456';
    // }); // mock函数，捕获函数的调用
    const func = jest.fn(); // mock函数，捕获函数的调用
    func.mockReturnValueOnce('Tammy'); // 第一次返回Tammy
    func.mockReturnValue('Tammy2');

    func.mockReturnThis();// 利用率不高
    // 和第一行同样的意思
    // func.mockImplementation(() => {
    //     return 'tammy';
    // });
    runCallBack(func);
    runCallBack(func);
    runCallBack(func);
    // expect(func).toBeCalled();
    // expect(func.mock.calls.length).toBe(1);
    // expect(func.mock.calls[0]).toEqual(['abc']);
    expect(func).toBeCalledWith('abc');
    expect(func.mock.results[0].value).toBe('Tammy'); // 断言
    console.log(func.mock);
});

test('test createObject', () => {
    const func = jest.fn();
    createObject(func);
    console.log(func.mock);
});

test('test getData', async () => {
    // mockResolvedValueOnce
    axios.get.mockResolvedValue({
        data: 'hello'
    });
    await getData().then((data) => {
        expect(data).toBe('hello');
    });
});