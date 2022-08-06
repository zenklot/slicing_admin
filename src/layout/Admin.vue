<template>
    <div class="common-layout">
    <el-container>
      <el-aside class="bg-primary">
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <el-header class="sticky top-0 bg-white shadow-navbar z-50">
            <Navbar />
        </el-header>
        <el-main >
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Sidebar from '~/components/base/Sidebar.vue'
import Navbar from '~/components/base/Navbar.vue'
</script>