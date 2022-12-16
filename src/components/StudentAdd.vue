<template>
  <div>
    <h1 class="text-center">新建学生</h1>
    <BForm v-on:submit.prevent="addStudent" class="my-5 mx-auto w-50">
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
import { BFormGroup, BFormInput, BButton } from "bootstrap-vue";

export default {
  name: "StudentAdd",
  components: { BFormGroup, BFormInput, BButton },
  data() {
    return {
      student: {
        name: "",
        sex: "",
        age: "",
        phone: "",
      },
    };
  },
  created() {
    document.title = `${this.$route.name} - Vue学生管理系统`;
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