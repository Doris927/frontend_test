import timer from './timer';

beforeEach(() => {
    jest.useFakeTimers();
});

test("test timer", () => {
    const fn = jest.fn();
    timer(fn);
    // jest.runAllTimers(); // 避免等待，立即执行
    // jest.runOnlyPendingTimers(); // 仅仅执行排在队列中的timer
    jest.advanceTimersByTime(3000); // 快进3s
    expect(fn).toHaveBeenCalledTimes(1);
})