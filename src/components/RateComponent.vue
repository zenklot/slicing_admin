<template>
<div>
    <div class="flex flex-col">
        <p>{{ props.title }}</p>
        <el-rate v-model="val"
            disabled
            show-score
            :colors="['#F58342', '#F58342','#F58342']"
            score-template="{value}"
        />
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(['title', 'value'])
const val = ref(props.value)
</script>
