<template>
    <div>
    <div class="flex justify-between items-center">
        <p>{{ props.title }}</p>
        <p>{{ props.percentage }}%</p>
    </div>
    <el-progress :percentage="props.percentage" :color="'#F58342'" :stroke-width="12" :show-text="false" />
    </div>
</template>

<script setup>
const props = defineProps(['title', 'percentage'])
</script>