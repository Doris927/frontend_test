import axios from 'axios';

export const runCallBack = (callback) => {
    callback('abc');
}

export const createObject = (classItem) => {
    new classItem();
}

export const getData = () => {
    return axios.get('/api').then(res => res.data);
};