import fetch from '../framework/fetch';

export default {
    getDataJson() {
        return fetch('GET', 'data/data.json')
            .then((response) => response.json());
    },
    getDataText() {
        return fetch('GET', 'data/data.json')
            .then((response) => response.text());
    }
}