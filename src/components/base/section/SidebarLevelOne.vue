<template>
    <div @click="diklik" class="sidebar-hover">
        <SidebarMenuItem :menus="menus" />
    </div>
</template>
<script setup>
import SidebarMenuItem from './SidebarMenuItem.vue';
import { ref, onMounted } from 'vue'
import {useRoute} from 'vue-router'
const route = useRoute();

const props = defineProps(['menus']);
const emit = defineEmits(['detailSidebar']);
const diklik = function(){
    emit('detailSidebar', props.menus);
}



</script>