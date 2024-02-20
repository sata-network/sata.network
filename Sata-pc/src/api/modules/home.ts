import axios from '../axios';
const host = "https://apitipbot.nmici.com";
const api = function () {
    return {

        /**
         * 1.群积分排名
         * 接口地址：/api/v1/point/ranking/group
         **/
        async rankingGroup() {
            return await axios.get(host + "/v1/point/ranking/group", {
                params: {},
                headers: {}
            });
        },
        /**
         * 2.用户积分排名
         * 接口地址：/api/v1/point/ranking/user
         * **/
        async rankingUser() {
            return await axios.get(host + "/v1/point/ranking/user", {
                params: {},
                headers: {}
            });
        },
        /**
         * 3.活动记录
         * 接口地址：/v1/point/activities
         * **/
        async activities() {
            return await axios.get(host + "/v1/point/activities", {
                params: {},
                headers: {}
            });
        },
        /**
        * 4.服务器时间
        * 接口地址：/v1/system/time
        * **/
        async getSystemTime() {
            return await axios.get(host + "/v1/system/time", {
                params: {},
                headers: {}
            });
        },
    }
}
export default api;
