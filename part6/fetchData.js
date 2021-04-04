import axios from 'axios';


// first method
// export const fetchData = (fn) => {
//     axios.get('http://www.dell-lee.com/react/api/demo.json').then((response) => {
//         fn(response.data);
//     });
// }


// second method
export const fetchData = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo1.json');
}

