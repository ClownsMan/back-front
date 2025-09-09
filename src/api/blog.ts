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
/** 文章start **/
// 文章分页
export const getPost = (params) => {
    return request({
        url: '/api/posts/manage',
        method: 'get',
        params
    });
};
// 文章详情
export const getPostItem = (data) => {
    return request({
        url: '/api/posts/detail',
        method: 'post',
        data
    });
};
// 新增文章
export const addPost = (data) => {
    return request({
        url: '/api/posts/add',
        method: 'post',
        data
    });
};
// 更新文章
export const updatePost = (data) => {
    return request({
        url: `/api/posts/update`,
        method: 'post',
        data
    });
};
// 删除文章
export const delPost = (data) => {
    return request({
        url: `/api/posts/delete`,
        method: 'post',
        data
    });
};
/** 文章end **/
/** 上传图片 **/ 
export const uploadImg = (data) => {
    return request({
        url: `/api/files/single`,
        method: 'post',
        data
    });
}
