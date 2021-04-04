import { fetchData } from './fetchData';

// first method
// test('fetch data response is { success: true }', (done) => {
//     fetchData((data) => {
//         expect(data).toEqual({
//             success: true
//         });
//         done();
//     });
// });

// second method
// test('fetch data response is { success: true }', () => {
//     return fetchData().then((response) => {
//         expect(response.data).toEqual({
//             success: true,
//         });
//     });
// });

// third method
// test('fetch data response is 404', () => {
//     // 至少执行一次expect
//     expect.assertions(1);
//     return fetchData().catch((e) => {
//         expect(e.toString().indexOf('404') > -1).toBe(true);
//     });
// });

// test('fetch data response is { success: true }', () => {
//     return expect(fetchData()).resolves.toMatchObject({
//         data: {
//             success: true,
//         }
//     })
// });

// test('fetch data response is { success: true }', () => {
//     // 异步需要return，否则会按照同步来处理
//     return expect(fetchData()).rejects.toThrow();
// });


// await
// test('fetch data response is { success: true }', async () => {
//     await expect(fetchData()).rejects.toThrow();
// });


// await
// test('fetch data response is { success: true }', async () => {
//     const response = await fetchData();
//     expect(response.data).toEqual({
//         success: true
//     })
// });

test('fetch data response is 404', async () => {
    try {
        await fetchData();
    } catch(e) {
        expect(e.toString()).toEqual('Error: Request failed with status code 404');
        console.log(e.toString());
    }
});


