import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentList from '../components/StudentList.vue'
import StudentEdit from '../components/StudentEdit.vue'
import StudentAdd from '../components/StudentAdd.vue'
import StudentView from '../components/StudentView.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: StudentList, name: '学生列表' },
        { path: '/edit/:id', component: StudentEdit, name: '学生编辑' },
        { path: '/new', component: StudentAdd, name: '新建学生' },
        { path: '/view', component: StudentView, name: '查询学生' },
        { path: '/view/:id', component: StudentView, name: '查询学生' },
        { path: '*', redirect: '/' }
    ]
})