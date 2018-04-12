import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/pages/LoginPage'
import RegisterPage from '../components/pages/RegisterPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: LoginPage
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterPage
        }
    ]
})