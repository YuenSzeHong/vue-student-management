<template>
  <div>
    <h1>学生列表</h1>
    <BForm>
      <BCol>
        <BRow>
          <BInputGroup label="搜索" label-for="filter-input">
            <BFormInput
              id="filter-input"
              v-model="filter"
              type="search"
              class="ma-2"
              placeholder="输入以搜索"
            ></BFormInput>
            <BInputGroupAppend>
              <BButton
                class="my-2"
                :disabled="!filter"
                @click="filter = ''"
                variant="primary"
                >Clear</BButton
              >
            </BInputGroupAppend>
          </BInputGroup>
        </BRow>
        <Brow>
          <BInputGroup label="每页显示" label-for="items-per-page">
            <BFormInput
              id="items-per-page"
              class="my-2"
              v-model.number="pagination.perPage"
              type="number"
              min="1"
              max="100"
            />
            <BInputGroupAppend>
              <BButton
                class="my-2"
                :disabled="pagination.perPage != 20"
                @click="pagination.perPage = 20"
                variant="primary"
                >Clear</BButton
              >
            </BInputGroupAppend>
          </BInputGroup>
        </Brow>
      </BCol>
      <BCol>
        <BInputGroup label="搜索字段" label-for="filter-select">
          <BFormSelect
            label
            id="filter-select"
            v-model="search"
            :options="fields"
            value-field="key"
            text-field="label"
            class="w-100 my-2"
            multiple
          ></BFormSelect>
          <BInputGroupAppend>
            <BButton
              class="my-2"
              variant="primary"
              :disabled="!search.length"
              @click="search = []"
              >Clear</BButton
            >
          </BInputGroupAppend>
        </BInputGroup>
      </BCol>
    </BForm>

    <BTable
      :per-page="pagination.perPage"
      :current-page="pagination.currentPage"
      :items="students"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="search"
      empty-filtered-text="没有符合您要求的记录"
      empty-text="没有记录"
      label-sort-asc="点击升序排序"
      label-sort-desc="点击降序排序"
      label-sort-clear="点击清除排序"
      :stickyColumn="true"
      hover
      show-empty
      striped
    >
      <template #cell(actions)="row">
        <BButton class="mx-2" variant="primary" @click="row.item.view()"
          >检视</BButton
        >
        <BButton class="mx-2" variant="info" @click="row.item.edit()"
          >编辑</BButton
        >

        <BButton
          class="mx-2"
          variant="danger"
          @click="row.item.delete(row.index)"
        >
          删除
        </BButton>
      </template>
    </BTable>
    <BPagination
      v-model="pagination.currentPage"
      :total-rows="totalRows"
      :per-page="pagination.perPage"
    ></BPagination>
  </div>
</template>



<script>
import {
  BButton,
  BInputGroup,
  BInputGroupAppend,
  BPagination,
  BTable,
} from "bootstrap-vue";
export default {
  name: "StudentList",
  components: {
    BTable,
    BInputGroupAppend,
    BInputGroup,
    BButton,
    BPagination,
  },
  created() {
    this.$watch(
      () => this.$store.state.students,
      (students) => {
        this.students = students.map((student) => {
          return {
            ...student,
            delete: (index) => {
              this.$store.dispatch("deleteStudent", index);
            },
            edit: () => this.$router.push(`/edit/${student.id}`),
            view: () => this.$router.push(`/view/${student.id}`),
          };
        });
      },
      { immediate: true }
    );
  },
  data() {
    return {
      filter: null,
      search: [],
      pagination: {
        perPage: 20,
        currentPage: 1,
      },
      totalRows: this.$store.state.students.length,
      students: this.$store.state.students.map((student) => {
        return {
          ...student,
          delete: (index) => {
            this.$store.dispatch("deleteStudent", index);
          },
          edit: () => this.$router.push(`/edit/${student.id}`),
          view: () => this.$router.push(`/view/${student.id}`),
        };
      }),
      fields: [
        { key: "id", label: "学号", class: "text-center" },
        { key: "name", label: "姓名", class: "text-center" },
        { key: "sex", label: "性别", class: "text-center", sortable: true },
        { key: "age", label: "年龄", class: "text-center", sortable: true },
        { key: "phone", label: "电话", class: "text-center" },
        { key: "actions", label: "操作", class: "text-center row-2" },
      ],
    };
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
    },
  },
};
</script>

<style>
</style>