<template>
    <div class="common-layout">
    <el-container>
      <SideMenu></SideMenu>
      <el-container direction="vertical">
    <top-header></top-header>
        <el-main display='block'><router-view></router-view></el-main>
      </el-container>
    </el-container>
    </div>
</template>
<script setup>
import TopHeader from '../components/mainbox/TopHeader.vue'
import SideMenu from '../components/mainbox/SideMenu.vue'
</script>
