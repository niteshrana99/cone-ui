import axios from 'axios';
import BASE_URL from './environment';

function networkService() {
    function* postData(action, body, configObj) {
        const url = BASE_URL + 'api/v1/' + action;
        return yield axios.post(url, body)
    }

    function* getData(action) {
        const url = BASE_URL + 'api/v1/' + action;
        return yield axios.get(url);
    }

    return {
        postData,
        getData
    }
}

const network = networkService();

export default network;