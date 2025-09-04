<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import type {FormProps, FormRules} from "element-plus";
import {addPost, updatePost, getPostItem, getCategories, getTags} from "@/api/blog";
import { useRouter } from 'vue-router';

const router = useRouter();
const formRef = ref();
const rules: FormRules = {
  title: [{ required: true, message: '请输入表单名称', trigger: 'blur' }],
};
const form = ref({
  title: '',
  category_id: '',
  tag_ids: [],
  status: '0',
  remark: ''
});
const labelPosition = ref<FormProps['labelPosition']>('right')
const text = ref('Hello Editor!');
const categoryList = ref([])
const tagList = ref([])
const objId = ref('-1');

const onUploadImg = (files: any) => {
  console.log(files);
};

const getPostDetail = (id) => {
  getPostItem({ id }).then(res => {
    if (res.code === 200) {
      const data = res.data;
      if (data.tags && data.tags.length > 0) {
        data.tag_ids = data.tags.map(item => item.id)
      }
      form.value = data;
      text.value = res.data.content;
    }
  })
}
const getOptions = () => {
  const _l = [
    getCategoryList(),
    getTagList()
  ]
  Promise.all(_l)
}
// 获取分类列表
const getCategoryList = () => {
  return getCategories().then(res => {
    if (res.code === 200) {
      categoryList.value = res.data;
    }
  })
}
// 获取标签列表
const getTagList = () => {
  return getTags().then(res => {
    if (res.code === 200) {
      tagList.value = res.data;
    }
  })
}

const savePost = () => {
  formRef.value.validate(valid => {
    if (valid) {
      const _p = {
        ...form.value,
        content: text.value
      }
      if (objId.value !== '-1') {
        _p.id = objId.value
        updatePost(_p).then(res => {
          if (res.code === 200) {
            ElMessage.success('保存成功');
          }
        })
      } else {
        addPost(_p).then(res => {
          if (res.code === 200) {
            ElMessage.success('保存成功');
            objId.value = res.data.id
          }
        })
      }
    }
  })
}
const back = () => {
  router.go(-1);
}

onMounted(() => {
  objId.value = router.currentRoute.value.params.id
  if (objId.value !== '-1') {
    getPostDetail(objId.value)
  }
  getOptions()
})
</script>
<template>
  <div class="operator">
    <el-button size="small" type="primary" @click="savePost">保存</el-button>
    <el-button size="small" @click="back">返回</el-button>
  </div>
  <el-form class="w-full flex" ref="formRef" :rules="rules" :model="form" label-width="120px" :label-position="labelPosition">
    <el-form-item label="标题" prop="title" class="form_item">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="所属分类" prop="category_id" class="form_item w30">
      <el-select v-model="form.category_id" placeholder="请选择">
        <el-option v-for="c in categoryList" :key="c.id" :label="c.name" :value="c.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="标签" prop="tag_ids" class="form_item w30">
      <el-select v-model="form.tag_ids" placeholder="请选择" multiple>
        <el-option v-for="c in tagList" :key="c.id" :label="c.name" :value="c.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发布状态" prop="status" class="form_item w30">
      <el-select v-model="form.status" placeholder="请选择">
        <el-option key="草稿" label="草稿" value="draft"></el-option>
        <el-option key="发布" label="发布" value="published"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="备注" prop="remark" class="form_item">
      <el-input type="textarea" rows="3" v-model="form.remark"></el-input>
    </el-form-item>
  </el-form>
  <h2 class="mb10">文章内容</h2>

  <md-editor class="mgb20" v-model="text" @on-upload-img="onUploadImg" />
</template>
<style scoped>
.form_item {
  width: 100%;
  &.w30 {
    width: 30%;
  }
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.mb10 {
  margin-bottom: 10px;
}
.mgb20 {
  height: 500px;
}
.operator {
  //background: white;
}
</style>