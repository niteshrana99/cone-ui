import axios from 'axios';
import BASE_URL from './environment';

function networkService() {
    function* postData(action, body) {
        const url = BASE_URL + 'api/v1/' + action;
        return yield axios.post(url, body)
    }

    return {
        postData
    }
}

const network = networkService();

export default network;