import { generateConfig, generateAnotherConfig } from './demo';

test('test generateConfig function', () => {
    expect(generateConfig()).toMatchSnapShot();
});

test('test generateAnotherConfig function', () => {
    expect(generateAnotherConfig()).toMatchSnapShot();
});