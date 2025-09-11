import request from '../utils/request';

/** 分类start **/
// 分类分页
export const getCategories = (params:any) => {
    return request({
        url: '/categories',
        method: 'get',
        params
    });
};
// 新增分类
export const addCategories = (data) => {
    return request({
        url: '/categories/add',
        method: 'post',
        data
    });
};
// 更新分类
export const updateCategories = (data) => {
    return request({
        url: `/categories/update`,
        method: 'post',
        data
    });
};
// 删除分类
export const delCategories = (data) => {
    return request({
        url: `/categories/delete`,
        method: 'post',
        data
    });
};
/** 分类end **/
/** 标签start **/
// 标签分页
export const getTags = (params) => {
    return request({
        url: '/tags',
        method: 'get',
        params
    });
};
// 新增标签
export const addTags = (data) => {
    return request({
        url: '/tags/add',
        method: 'post',
        data
    });
};
// 更新标签
export const updateTags = (data) => {
    return request({
        url: `/tags/update`,
        method: 'post',
        data
    });
};
// 删除标签
export const delTags = (data) => {
    return request({
        url: `/tags/delete`,
        method: 'post',
        data
    });
};
/** 标签end **/
/** 文章start **/
// 文章分页
export const getPost = (params) => {
    return request({
        url: '/posts/manage',
        method: 'get',
        params
    });
};
// 文章详情
export const getPostItem = (data) => {
    return request({
        url: '/posts/detail',
        method: 'post',
        data
    });
};
// 新增文章
export const addPost = (data) => {
    return request({
        url: '/posts/add',
        method: 'post',
        data
    });
};
// 更新文章
export const updatePost = (data) => {
    return request({
        url: `/posts/update`,
        method: 'post',
        data
    });
};
// 删除文章
export const delPost = (data) => {
    return request({
        url: `/posts/delete`,
        method: 'post',
        data
    });
};
/** 文章end **/
/** 上传图片 **/ 
export const uploadImg = (data) => {
    return request({
        url: `/files/single`,
        method: 'post',
        data
    });
}
