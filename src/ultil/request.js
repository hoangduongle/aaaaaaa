import axios from "axios";

const request = axios.create({
    baseURL: 'http://tfsapiv1-env.eba-aagv3rp5.ap-southeast-1.elasticbeanstalk.com/api',

});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
}

export default request;