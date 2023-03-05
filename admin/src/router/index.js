import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import routerConfig from './config'
import store from '@/store'


const routes = [
  {
    path:'/login',
    name:"login",
    component:Login
  },{
    path:'/mainbox',
    name:"mainbox",
    component:MainBox
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach((to,from,next)=>{
  if(to.name === 'login'){
    next()
  }else{
    if(!localStorage.getItem("token")){
      next({
        path:'/login'
      })
    }else{
     if(!store.state.isFisrtToRouter){
      configRouter()
      next({
        path:to.fullPath
      })
      store.commit('changeIsFisrtToRouter', true)
     }else{
      next()
     }
    }
  }
})


const configRouter  = ()=>{
  routerConfig.forEach((item)=>{
    router.addRoute('mainbox',item)
  })
}



export default router
