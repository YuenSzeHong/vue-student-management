<template>
  <div class="text-center">
    <h1>查询学生</h1>
    <BForm @submit.prevent="search">
      <BInputGroup class="my-5 mx-auto w-50" label="学号" label-for="id-input">
        <BFormInput
          id="id-input"
          v-model="id"
          type="number"
          class="ma-2"
          placeholder="输入学号"
        ></BFormInput>
        <BInputGroupAppend>
          <b-button class="m-2" variant="primary">确定</b-button>
        </BInputGroupAppend>
      </BInputGroup>
    </BForm>
    <BTable
      class="my-5 mx-auto w-50"
      striped
      hover
      show-empty
      empty-text="未找到学生/未输入学号"
      :items="items"
      :fields="columns"
    >
    </BTable>
  </div>
</template>

<script>
import { BInputGroup, BInputGroupAppend } from "bootstrap-vue";

// get student list from store

export default {
  name: "StudentEdit",
  components: { BInputGroupAppend, BInputGroup },
  data() {
    return {
      items: [],
      columns: [
        { key: "key", label: "字段" },
        { key: "value", label: "内容" },
      ],
      id: "",
      fields: [
        { key: "id", label: "学号" },
        { key: "name", label: "姓名" },
        { key: "sex", label: "性别" },
        { key: "age", label: "年龄" },
        { key: "phone", label: "电话" },
      ],
    };
  },
  created() {
    document.title = `${this.$route.name} - Vue学生管理系统`;

    this.$watch(
      () => this.$store.state.students,
      () => {
        this.items = Object.entries(
          this.$store.state.students.filter(
            (student) => student.id === parseInt(this.$route.params.id)
          )[0]
        ).map((entry) => {
          return {
            key: this.fields.filter((field) => field.key === entry[0])[0].label,
            value: entry[1],
          };
        });
      }
    );
  },
  mounted() {
    this.id = parseInt(this.$route.params.id);
    const foundStudent =
      this.$store.state.students.filter(
        (student) => student.id === parseInt(this.$route.params.id)
      ).length > 0;
    if (foundStudent) {
      this.items = Object.entries(
        this.$store.state.students.filter(
          (student) => student.id === parseInt(this.$route.params.id)
        )[0]
      ).map((entry) => {
        return {
          key: this.fields.filter((field) => field.key === entry[0])[0].label,
          value: entry[1],
        };
      });
    } else {
      this.items = [];
    }
  },
  methods: {
    search() {
      this.$router.push(`/view/${this.id}`);
      this.$router.go();
    },
  },
};
</script>

<style>
</style>