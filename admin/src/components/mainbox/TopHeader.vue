<template>
    <el-header>

        <div class="left">
        <el-icon  @click="handleIsCollapsed"><Menu /></el-icon>
        <span style="margin-left: 1rem;">企业门户网站管理系统</span>
        </div>
        
        <div class="right">
            <span> welcome back </span>
    <el-dropdown>
    <span class="el-dropdown-link">
        <el-icon color="white" size="1rem"><Sunny /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleExit">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
        </div></el-header>
</template>

<script setup>
import  { useStore }  from 'vuex'
import { Menu,Sunny } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';


const store = useStore()
const router = useRouter()

var handleIsCollapsed = function(){
   store.commit("changeCollapsed")
}

const handleCenter = ()=>{
    router.push('/center')
}

const handleExit = ()=>{
    localStorage.removeItem('token')
    router.push('/login')
}

</script>

<style scoped>
 .el-header{
    background-color: #00587a;
    color: aliceblue;
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left,.right{
display: flex;
}
i{
    margin: auto;
    cursor: pointer;
}
.el-dropdown {
    
        margin: auto;
    
}

</style>