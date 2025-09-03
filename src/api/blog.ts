import request from '../utils/request';

/** 分类start **/
// 分类分页
export const getCategories = (params) => {
    return request({
        url: '/api/categories',
        method: 'get',
        params
    });
};
// 新增分类
export const addCategories = (data) => {
    return request({
        url: '/api/categories/add',
        method: 'post',
        data
    });
};
// 更新分类
export const updateCategories = (data) => {
    return request({
        url: `/api/categories/update`,
        method: 'post',
        data
    });
};
// 删除分类
export const delCategories = (data) => {
    return request({
        url: `/api/categories/delete`,
        method: 'post',
        data
    });
};
/** 分类end **/
/** 标签start **/
// 标签分页
export const getTags = (params) => {
    return request({
        url: '/api/tags',
        method: 'get',
        params
    });
};
// 新增标签
export const addTags = (data) => {
    return request({
        url: '/api/tags/add',
        method: 'post',
        data
    });
};
// 更新标签
export const updateTags = (data) => {
    return request({
        url: `/api/tags/update`,
        method: 'post',
        data
    });
};
// 删除标签
export const delTags = (data) => {
    return request({
        url: `/api/tags/delete`,
        method: 'post',
        data
    });
};
/** 标签end **/