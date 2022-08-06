<template>
    <div class="flex justify-between items-center px-8 py-3 sidebar-hover" @click="goToRoute()">
            <div class="flex gap-3 items-center">
                <img :src="`/assets/icons/sidebar/${props.menus.icon}`" alt="" class="w-6">
                <p class="text-white font-medium cursor-default" :class="props.menus.path == route.path || detailMenu != '' || route.path.split('/').includes(childPathSelected.split('/')[2]) ? 'text-secondary' : ''">{{ props.menus.name }}</p>
            </div>
            <img alt="" class="w-6" :src="route.path.split('/').includes(props.menus.path.split('/')[1]) ? '/assets/icons/sidebar/mdi_chevron-right-active.svg' : '/assets/icons/sidebar/mdi_chevron-right.svg'" v-if="props.menus.type == 'level-one'">
            <img alt="" class="w-6" :src="detailMenu != '' ? '/assets/icons/sidebar/mdi_chevron-down-active.svg' : '/assets/icons/sidebar/mdi_chevron-right.svg'" v-if="props.menus.type == 'level-three'">
        </div>
        <template v-if="detailMenu != ''">
          <div class="flex flex-col pl-17 sidebar-hover" v-for="(detail, index) in detailMenu" :key="index" @click="goToRoute(index)">
              <p  class="text-white font-medium cursor-default py-2"  :class="detail.path == route.path ? 'text-secondary' : ''">{{ detail.name }}</p>
          </div>
        </template>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted} from 'vue'
const router = useRouter()
const route = useRoute()
const activeMenu = ref('')
const detailMenu = ref('')
const props = defineProps(['menus'])

const childPathSelected = ref('')
onMounted(() => {
    if(activeMenu.path == route.path){
        activeMenu.value = props.menus
    }
})


const goToRoute = function(index = null){ 
    if(index != null){
      childPathSelected.value = props.menus.children[index].path
      router.push(props.menus.children[index].path)
    }
    if(props.menus.type == 'level-two'){
        router.push(props.menus.path)
    }
    if(detailMenu == props.menus.children){
      detailMenu.value = ''
    }
    
    if(props.menus.type == 'level-three' ){      
      if(detailMenu.value == props.menus.children){
        detailMenu.value = ''
      }else{
        detailMenu.value = props.menus.children
      }
    }

}
</script>