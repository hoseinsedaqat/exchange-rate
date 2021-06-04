import axios from 'axios';

export default {
    async getData({ commit }) {
        const response = await axios.get('https://api.accessban.com/v1/data/sana/json');
        commit('addData', response.data.sana.data);
    }
}