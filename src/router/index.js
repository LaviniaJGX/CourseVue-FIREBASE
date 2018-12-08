import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Courses from '@/components/Courses'
import Course from '@/components/Course'
import Edit from '@/components/Edit'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
