<template>
<el-dropdown trigger="click" popper-class="!min-w-56 dropdown-navbar shadow-navbar">
    <div class="flex items-center gap-2 cursor-pointer">
        <img src="/assets/icons/mdi_hospital-building.svg" alt="" class="icon-size">
        <span class="text-base flex gap-1 items-center">
        Cabang Bandung
        <img src="/assets/icons/mdi_chevron-right.svg" alt="" class="icon-size">
        </span>
    </div>
    <template #dropdown>
        <div class="flex flex-col gap-3">
            <div class="font-bold text-base px-6 pt-6">Data Cabang</div>
            
            <div class="flex flex-col gap-1">
                <router-link to="/profile" v-for="i in 5" :key="i" class="py-1 px-6 item-hover">Cabang Jakarta</router-link>
            </div>

            <router-link to="/dashboard/cabang" class="p-6 pt-4 rounded-3xl w-full text-white">
                <span class="bg-secondary flex justify-center items-center py-2 rounded-[100px]">List Semua Cabang</span>
            </router-link>
        </div>
    </template>
</el-dropdown>
</template>