import request from "../../ultil/request";

export const view = async () => {
    try {
        const res = await request.get('/foods', {
        });
        return res.data;
    } catch (error) {
        console.log('View Foods Error', error);
    }
}