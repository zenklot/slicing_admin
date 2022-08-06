<template>
    <!-- Section Title -->
    <section class="mb-8">
        <h1 class="text-3xl font-bold">{{ props.title }}</h1>
        <p>{{ props.subtitle }}</p>
    </section>
</template>
<script setup>
const props = defineProps(['title', 'subtitle'])
</script>