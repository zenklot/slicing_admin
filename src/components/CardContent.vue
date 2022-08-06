<template>
    <div class="flex flex-col gap-6 bg-white px-8 py-8 rounded-3xl shadow-card box-border" :class="width">
        <!-- Header Card -->
        <div class="flex items-center justify-between" v-if="props.icon || props.title">
            <div class="flex gap-3 items-center">
                <img :src="`/assets/icons/${props.icon}`" alt="" class="h-14" />
                <div class="flex flex-col">
                    <h2 class="text-2xl font-bold">{{ props.title }}</h2>
                    <p class="text-base">{{ props.subtitle }}</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <slot name="header-actions"></slot>
            </div>
        </div>

        <!-- Content Card -->
        <div class="flex flex-col gap-2 h-full">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'subtitle', 'icon', 'width'])

</script>