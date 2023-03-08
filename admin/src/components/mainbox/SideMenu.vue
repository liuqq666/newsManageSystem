<template>
    <el-aside :width="this.$store.state.isCollapsed?'64px':'200px'">
        <el-menu :collapse = "this.$store.state.isCollapsed"
         :router="true"
         :default-active = "route.fullPath"
         >

        <el-menu-item index="/index">
          <el-icon><HomeFilled></HomeFilled></el-icon>
          <span>首页</span>
        </el-menu-item>

        <el-menu-item index="/center">
          <el-icon> <UserFilled /></el-icon>
          <span>个人中心</span>
        </el-menu-item>

        <el-sub-menu index="/user-manage">
          <template #title>
            <el-icon><Avatar /></el-icon>
            <span> 用户管理 </span>
          </template>
            <el-menu-item index="user-manage/adduser"><el-icon><Plus /></el-icon>添加用户</el-menu-item>
            <el-menu-item index="/user-manage/userlist"><el-icon><User /></el-icon>用户列表</el-menu-item>

        </el-sub-menu>

        <el-sub-menu index="/news-manage">
          <template #title>
            <el-icon><Management /></el-icon>
            <span> 新闻管理 </span>
          </template>
            <el-menu-item index="/news-manage/newsadd"><el-icon><Edit /></el-icon>创建新闻</el-menu-item>
            <el-menu-item index="/news-manage/newslist"><el-icon><Money /></el-icon>新闻列表</el-menu-item>

        </el-sub-menu>

        <el-sub-menu index="/product-manage">
          <template #title>
            <el-icon><HelpFilled /></el-icon>
            <span> 产品管理 </span>
          </template>
            <el-menu-item index="product-manage/productadd"><el-icon><CirclePlus /></el-icon>添加产品</el-menu-item>
            <el-menu-item index="/product-manage/productlist'"><el-icon><Cpu /></el-icon>产品列表</el-menu-item>

        </el-sub-menu>

        </el-menu>
    </el-aside>
</template>
<style scoped>
.el-aside{
    height:100vh;
}
.el-menu{
    height:100vh;
}

</style>
<script setup>
import { Plus,HelpFilled,Management,Avatar,HomeFilled,UserFilled,User,Cpu,CirclePlus,Money,Edit } from '@element-plus/icons-vue'
import  {useRoute}  from 'vue-router';

const route = useRoute()

</script>