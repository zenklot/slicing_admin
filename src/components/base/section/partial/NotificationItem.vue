<template>
<router-link :to="props.path" class="px-6 py-2 flex items-center gap-3 item-hover" :class="readed && 'bg-secondary bg-opacity-10'">
    <img src="/assets/icons/bell-notification.svg" alt="" class="icon-size"> 
    <div class="flex justify-between items-center gap-3 w-full">
        <div class="flex flex-col">
            <span class="font-bold">{{ props.title }}</span>
            <span>{{ props.description }}</span>
        </div>
        <span>{{ props.date }}</span>
    </div>
</router-link>
</template>
<script setup>
const props = defineProps(['path', 'title', 'description', 'date', 'readed'])
</script>