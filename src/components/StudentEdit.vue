<template>
  <div>
    <h1>学生编辑</h1>
    <pre>
        {{
        $store.state.students.find(
          (student) => student.id === $route.params.id
        )
      }}
    </pre>
    <BForm v-on:submit.prevent="addStudent">
      <BFormGroup label="姓名" label-for="name">
        <BFormInput
          v-model="student.name"
          id="name"
          type="text"
          required
        ></BFormInput>
      </BFormGroup>
      <BFormGroup label="性别" label-for="sex">
        <BFormSelect v-model="student.sex" id="sex" required>
          <option value="男">男</option>
          <option value="女">女</option>
        </BFormSelect>
      </BFormGroup>
      <BFormGroup label="年龄" label-for="age">
        <BFormInput
          v-model.number="student.age"
          id="age"
          min="18"
          max="25"
          type="number"
          required
        ></BFormInput>
      </BFormGroup>
      <BFormGroup label="电话" label-for="phone">
        <BFormInput
          v-model="student.phone"
          pattern="^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4(?:[14]0\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$"
          id="phone"
          type="text"
          required
        ></BFormInput>
      </BFormGroup>
      <!-- 送出 -->
      <BFormGroup>
        <BButton type="submit" variant="primary">送出</BButton>
      </BFormGroup>
    </BForm>
  </div>
</template>

<script>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BButton,
} from "bootstrap-vue";

// get student list from store

export default {
  name: "StudentEdit",
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BButton,
  },
  data() {
    return {
      student: {
        name: "",
        age: "",
        phone: "",
        sex: "",
      },
    };
  },
  mounted() {
    this.student = this.$store.state.students.filter(
      (student) => student.id === parseInt(this.$route.params.id)
    )[0];
  },
  methods: {
    addStudent() {
      this.$store.dispatch("addStudent", this.student);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>