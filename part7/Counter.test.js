import Counter from './Counter';

describe('test counter', () => {
    // describe中的逻辑会优先执行
    let counter = null;

    beforeAll(() => {
        console.log('before all');
    })

    beforeEach(() => {
        counter = new Counter();
    });

    afterEach(() => {
        // console.log('after each');
    });

    afterAll(() => {
        console.log('after all');
    });

    describe('test about add', () => {
        //only会skip掉其他的test case
        test.only('test addOne', () => {
            counter.addOne();
            expect(counter.number).toBe(1);
        });
        
        test('test addTwo', () => {
            counter.addTwo();
            expect(counter.number).toBe(2);
        });
    });

    describe('test about minus', () => {
        test('test minusOne', () => {
            counter.minusOne();
            expect(counter.number).toBe(-1);
        });
        
        test('test minusTwo', () => {
            counter.minusTwo();
            expect(counter.number).toBe(-2);
        });
    });
});
