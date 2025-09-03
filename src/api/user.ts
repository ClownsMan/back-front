import request from '../utils/request';

// 用户登录
export const userLogin = (data) => {
    return request({
        url: '/api/auth/login',
        method: 'post',
        data
    });
};
