<template>
    <span class="font-bold grid-">{{ props.label }}</span>
    <slot></slot>
</template>
<script setup>
const props = defineProps(['label']);
</script>