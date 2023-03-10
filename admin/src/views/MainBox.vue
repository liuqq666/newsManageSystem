<!--
 * @作者: kerwin
 * @公众号: 大前端私房菜
-->
<template>

    <el-container>
        <SideMenu/>
        <el-container direction="vertical">
            <TopHeader/>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import TopHeader from '../components/mainbox/TopHeader'
import SideMenu from '../components/mainbox/SideMenu'
</script>

<style lang="scss" scoped>
.el-main{
    overflow: auto;
    height: calc(100vh - 60px);
}
</style>
