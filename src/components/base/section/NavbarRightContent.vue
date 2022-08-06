<template>
<div class="flex items-center gap-4">
    <el-dropdown trigger="click" popper-class=" dropdown-navbar shadow-navbar">
        <img src="/assets/icons/mdi_bell.svg" alt="" class="icon-size">
        <template #dropdown>
            <div class="flex flex-col gap-3 py-6 min-w-96">
            <div class="font-bold text-base px-6">Notifikasi</div>
            <div class="flex flex-col gap-1 text-xs">
                <NotificationItem title="Akun anda akan Kedaluarsa" description="Lorem ipsum dolor sit amet." date="20 Jun" path="/profile" :readed="true" />
                <NotificationItem title="Akun anda akan Kedaluarsa" description="Lorem ipsum dolor sit amet." date="20 Jun" path="/profile" :readed="false" v-for="i in 3" :key="i" />
            </div>
            </div>
        </template>
    </el-dropdown>

    
    <img src="/assets/icons/mdi_help-circle.svg" alt="" class="icon-size">

    <el-dropdown trigger="click" popper-class=" dropdown-navbar shadow-navbar">
        <img src="/assets/img/profile.png" alt="" class="w-12 h-12 rounded-1">
        <template #dropdown>
            <div class="flex flex-col py-6 min-w-44">
            <div class="flex items-center text-sm gap-3 px-6 py-2 item-hover">
                <img src="/assets/icons/mdi_account.svg" alt="" class="h-4">
                <router-link to="/profile">Profil</router-link>
            </div>
            <div class="flex items-center text-sm gap-3 px-6 py-2 item-hover">
                <img src="/assets/icons/mdi_help-circle.svg" alt="" class="h-4">
                <span>Bantuan</span>
            </div>
            <router-link to="/" class="flex items-center text-sm gap-3 px-6 py-2 item-hover">
                <img src="/assets/icons/mdi_logout-variant.svg" alt="" class="h-4">
                <span class="text-alert">Logout</span>
            </router-link>
            </div>
        </template>
    </el-dropdown>    
    <div class="flex flex-col">
        <span class="text-base font-bold">BagasBayu</span>
        <span class="text-xs">Manajer</span>
    </div>
</div>
</template>