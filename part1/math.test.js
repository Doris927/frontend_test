// const result1= add(3, 7);
// const expected1 = 10;

// if(result1 !== 10) {
//     throw Error(`3 + 7 = ${expected1}, but result is ${result1}`);
// }

// const result2 = minus(3, 3);
// const expected2 = 3;

// if(result2 !== 0) {
//     throw Error(`3 - 3 = ${expected2}, but result is ${result2}`);
// }

function expect(result) {
    return {
        tobe: function(actual) {
            if(result !== actual) {
                throw new Error(`result value ${result} !== actural value ${actual}`);
            }
        }
    }
}

function test(desc, fn) {
    try {
        fn();
        console.log(`${desc} test succeed`);
    } catch(e) {
        console.log(`${desc} test failed, error: ${e}`);
    }
}


test('test add 3 + 7', ()=>{
    expect(add(3, 7)).tobe(10);
});

test('test minus 3 - 3', ()=>{
    expect(minus(3, 3)).tobe(0);
});
