import Home from '../views/home/home.vue'
import Center from '../views/center/center.vue'
import  UserAdd from '../views/user-manage/UserAdd.vue'
import  UserList from '../views/user-manage/UserList.vue'
import ProductAdd from '../views/product-manage/ProductAdd.vue'
import ProductList from '../views/product-manage/ProductList.vue'
import NewsAdd from '../views/news-manage/NewsAdd.vue'
import NewsList from '../views/news-manage/NewsList.vue'
import Notfound from '../views/notfound/notfound.vue'


const routerConfig = [
    {
        path:'/index',
        component:Home
      },
      {
        path:'/center',
        component:Center
      },
      {
        path:'/user-manage/adduser',
        component:UserAdd
      },  {
        path:'/user-manage/userlist',
        component:UserList
      },  {
        path:'/product-manage/productadd',
        component:ProductAdd
      },  {
        path:'/product-manage/productlist',
        component:ProductList
      },  {
        path:'/news-manage/newsadd',
        component:NewsAdd
      }, {
        path:'/news-manage/newslist',
        component:NewsList
      },{
        path:'/',
        redirect: '/index'
      },{
        path:'/:pathMatch(.*)*',
        name:"not found",
        component:Notfound
      }
]

export default routerConfig