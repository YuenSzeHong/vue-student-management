<template>
  <div class="text-center">
    <h1>查询学生</h1>
    <b-form @submit.prevent="search">
      <b-input-group
        class="my-5 mx-auto w-50"
        label="学号"
        label-for="id-input"
      >
        <b-form-input
          id="id-input"
          v-model="id"
          type="number"
          class="ma-2"
          placeholder="输入学号"
        ></b-form-input>
        <b-input-group-append>
          <b-button class="m-2" variant="primary">确定</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
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
import {} from "bootstrap-vue";

// get student list from store

export default {
  name: "StudentEdit",
  components: {},
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