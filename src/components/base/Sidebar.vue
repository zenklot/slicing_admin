<template>
<div class="sidebar">
    <div class="min-h-20 box-border flex justify-center items-center">
        <img src="/assets/img/logo.png" alt="" class="w-1/2">
   </div>
   <div class="flex flex-col min-h-[calc(100%-80px)] overflow-auto ">
    <div class="flex flex-col mb-4" v-if="openMenu != ''">
        <div class="flex items-center gap-3 px-3 py-1 mb-4 cursor-pointer" @click="openMenu = ''">
            <img src="/assets/icons/sidebar/mdi_arrow-left.svg" alt="" class="w-6">
            <p class="text-white font-medium">{{ openMenu.name }}</p>
        </div>
        <SidebarMenuItem v-for="(menu, index) in openMenu.children" :key="index" :menus="menu" />
    </div>    
    <SidebarLevelOne v-else v-for="(menu, index) in menus" :key="index" :menus="menu" @detailSidebar="setSidebarDetail" />
    </div>
</div>
</template>

<script setup>
import SidebarLevelOne from './section/SidebarLevelOne.vue'
import SidebarMenuItem from './section/SidebarMenuItem.vue';
import sidebar from '~/router/sidebar.json';
import { ref } from 'vue'

const openMenu = ref('')
function setSidebarDetail(event){
    openMenu.value = event
}
const menus = ref(sidebar)

</script>