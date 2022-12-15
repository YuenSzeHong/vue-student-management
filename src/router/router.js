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
        { path: '/', component: StudentList },
        { path: '/edit/:id', component: StudentEdit },
        { path: '/new', component: StudentAdd },
        { path: '/view', component: StudentView },
        { path: '/view/:id', component: StudentView },
        { path: '*', redirect: '/' }
    ]
})