
<template>
  <div>
    <TableSearch :query="query" :options="searchOpt" :search="handleSearch" />
    <div class="container">
      <TableCustom :columns="columns" :tableData="tableData" :total="page.total" :viewFunc="handleView"
                   :delFunc="handleDelete" :page-change="changePage" :editFunc="handleEdit">
        <template #toolbarBtn>
          <el-button type="warning" :icon="CirclePlusFilled" @click="addPost">新增</el-button>
        </template>
      </TableCustom>

    </div>
  </div>
</template>

<script setup lang="ts" name="system-user">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { CirclePlusFilled } from '@element-plus/icons-vue';
import { User } from '@/types/user';
import TableCustom from '@/components/table-custom.vue';
import TableDetail from '@/components/table-detail.vue';
import TableSearch from '@/components/table-search.vue';
import { FormOption, FormOptionList } from '@/types/form-option';
import {addPost, delPost, getPost } from "@/api/blog";
import router from "@/router";

// 查询相关
const query = reactive({
  name: '',
});
const searchOpt = ref<FormOptionList[]>([
  { type: 'input', label: '标签：', prop: 'name' }
])
const handleSearch = () => {
  changePage(1);
};

// 表格相关
let columns = ref([
  { type: 'index', label: '序号', width: 55, align: 'center' },
  { prop: 'title', label: '文章标题' },
  { prop: 'categoryName', label: '所属分类' },
  { prop: 'tagText', label: '标签' },
  { prop: 'isTop', label: '是否置顶' },
  { prop: 'operator', label: '操作', width: 250 },
])
const page = reactive({
  index: 1,
  size: 10,
  total: 0,
})
const tableData = ref<User[]>([]);
const getData = async () => {
  const res = await getPost({
    page: page.index,
    size: page.size,
    name: query.name,
  })
  tableData.value = (res.data.data || []).map(item => {
    return {
      ...item,
      categoryName: item.category.name,
      tagText: item.tags.map(tag => tag.name).join(','),
      isTop: item.is_top ? '是' : '否',
    };
  });
  page.total = res.data.total;
};
getData();

const changePage = (val: number) => {
  page.index = val;
  getData();
};

const addPost = () => {
  router.push(`/blog/post/edit/-1`);
};

// 新增/编辑弹窗相关
let options = ref<FormOption>({
  labelWidth: '100px',
  span: 12,
  list: [
    { type: 'input', label: '文章标题', prop: 'name', required: true }
  ]
})
const visible = ref(false);
const isEdit = ref(false);
const rowData = ref({});
const handleEdit = (row: User) => {
  router.push(`/blog/post/edit/${row.id}`);
};

const handleView = (row: User) => {
  router.push(`/blog/post/edit/${row.id}`);
};

// 删除相关
const handleDelete = (row: User) => {
  delPost({ id: row.id }).then((res) => {
    if (res.code === 200) {
      ElMessage.success('删除成功');
      getData();
    }
  });
}
</script>

<style scoped></style>