import Vuex from 'vuex'
import Vue from 'vue'

let studentsJson = null

try {
    studentsJson = require('../../data/students.json')
} catch (e) {
    console.log('students.json not found')
}

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        students: studentsJson ?? [
            //学生信息 {id:学号,name:姓名,sex:性别,age:年龄,phone:电话}
            // { id: 0, name: '周金凤', sex: '女', age: 21, phone: '13899328893' },
            { id: 1, name: '雷秀梅', sex: '男', age: 19, phone: '15279830336' },
            { id: 2, name: '汪桂花', sex: '男', age: 19, phone: '15595968790' },
            { id: 3, name: '蓝兰英', sex: '女', age: 22, phone: '15644870023' },
            { id: 4, name: '苏雪梅', sex: '男', age: 19, phone: '13944241330' },
            { id: 5, name: '任婷婷', sex: '女', age: 23, phone: '13782218148' },
            { id: 6, name: '彭玉', sex: '女', age: 24, phone: '13706513525' },
            { id: 7, name: '王畅', sex: '男', age: 18, phone: '15575938394' },
            { id: 8, name: '高明', sex: '女', age: 22, phone: '13447645509' },
            { id: 9, name: '梁帆', sex: '男', age: 24, phone: '15392845022' },
            { id: 10, name: '吴颖', sex: '男', age: 23, phone: '13418677441' }, { id: 11, name: '王秀荣', sex: '女', age: 20, phone: '13473320349' },
            { id: 12, name: '卢晨', sex: '女', age: 23, phone: '18944933792' }, { id: 13, name: '王雪', sex: '男', age: 19, phone: '18122654285' }, { id: 14, name: '贾燕', sex: '女', age: 22, phone: '13524038080' }, { id: 15, name: '陈佳', sex: '女', age: 24, phone: '15399284305' },
            { id: 16, name: '俞斌', sex: '男', age: 24, phone: '15771614623' }, { id: 17, name: '赵玉英', sex: '男', age: 21, phone: '13045909583' },
            { id: 18, name: '李娟', sex: '女', age: 23, phone: '15920447394' },
            { id: 19, name: '陈明', sex: '女', age: 23, phone: '13039109660' },
            { id: 20, name: '王建军', sex: '女', age: 24, phone: '15766321520' },
            ...studentsJson
        ].map((student, i) => {
            return { ...student, id: i + 1 };
        })
    },
    mutations: {
        //添加学生
        addStudent(state, student) {
            state.students.push({ id: state.students.length + 1, ...student })
        },
        //删除学生
        deleteStudent(state, index) {
            state.students.splice(index, 1)
            // console.log(state.students.length + ' students left')
        },
        //修改学生
        editStudent(state, student) {
            state.students[student.id] = student
        },
    },
    actions: {
        //添加学生
        addStudent({ commit }, student) {
            commit('addStudent', student)
        },
        //删除学生
        deleteStudent({ commit }, id) {
            commit('deleteStudent', id)
        },
        //修改学生
        editStudent({ commit }, student) {
            commit('editStudent', student)
        }
    },
})