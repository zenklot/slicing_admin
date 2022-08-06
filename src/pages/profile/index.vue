<template>
    <Content>
        <template #title>
            <ContentTitle title="Profil akun" subtitle="Lihat profil dan kelola data akun" />
        </template>
        <template #default>
            <ContentData>
                <div class="flex justify-end px-16">
                    <div class="flex w-8/12 border-b border-disable">
                        <div class="flex gap-6 items-center">
                            <div class="flex gap-2 items-center cursor-pointer" :class="activePane == 'info' ? 'border-b-2 border-secondary' : ''" @click="activePane = 'info'">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path :class="activePane == 'info' ? 'fill-secondary' : ''" d="M11.03 19H5V5H7V7H17V5H19V9.5C19.72 9.8 20.4 10.24 21 10.82V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H13.06C12.65 20.74 12.26 20.45 11.9 20.1C11.57 19.76 11.27 19.39 11.03 19ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM20.31 17.9C20.75 17.21 21 16.38 21 15.5C21 13 19 11 16.5 11C14 11 12 13 12 15.5C12 18 14 20 16.5 20C17.37 20 18.19 19.75 18.88 19.32L22 22.39L23.39 21L20.31 17.9ZM16.5 18C15.837 18 15.2011 17.7366 14.7322 17.2678C14.2634 16.7989 14 16.163 14 15.5C14 14.837 14.2634 14.2011 14.7322 13.7322C15.2011 13.2634 15.837 13 16.5 13C17.163 13 17.7989 13.2634 18.2678 13.7322C18.7366 14.2011 19 14.837 19 15.5C19 16.163 18.7366 16.7989 18.2678 17.2678C17.7989 17.7366 17.163 18 16.5 18Z" fill="#999999"/>
                                </svg>
                                <p class="text-base">Informasi Pribadi</p>
                            </div>
                            
                            <div class="flex gap-2 items-center cursor-pointer" :class="activePane == 'setting' ? 'border-b-2 border-secondary' : ''" @click="activePane = 'setting'">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path :class="activePane == 'setting' ? 'fill-secondary' : ''" d="M11.9998 15.5C11.0716 15.5 10.1813 15.1313 9.52497 14.4749C8.86859 13.8185 8.49984 12.9283 8.49984 12C8.49984 11.0717 8.86859 10.1815 9.52497 9.52513C10.1813 8.86875 11.0716 8.5 11.9998 8.5C12.9281 8.5 13.8183 8.86875 14.4747 9.52513C15.1311 10.1815 15.4998 11.0717 15.4998 12C15.4998 12.9283 15.1311 13.8185 14.4747 14.4749C13.8183 15.1313 12.9281 15.5 11.9998 15.5V15.5ZM19.4298 12.97C19.4698 12.65 19.4998 12.33 19.4998 12C19.4998 11.67 19.4698 11.34 19.4298 11L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5398 5.05 19.2698 4.96 19.0498 5.05L16.5598 6.05C16.0398 5.66 15.4998 5.32 14.8698 5.07L14.4998 2.42C14.4795 2.30222 14.4182 2.19543 14.3267 2.11855C14.2351 2.04168 14.1194 1.99968 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.49984 2.42L9.12984 5.07C8.49984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.72984 4.96 4.45984 5.05 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.65 4.56984 12.97L2.45984 14.63C2.26984 14.78 2.20984 15.05 2.33984 15.27L4.33984 18.73C4.45984 18.95 4.72984 19.03 4.94984 18.95L7.43984 17.94C7.95984 18.34 8.49984 18.68 9.12984 18.93L9.49984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4998 21.58L14.8698 18.93C15.4998 18.67 16.0398 18.34 16.5598 17.94L19.0498 18.95C19.2698 19.03 19.5398 18.95 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.97V12.97Z" fill="#999999"/>
                                </svg>
                                <p class="text-base">Pengaturan Akun</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="content-row">
                    <CardContent width="w-4/12">
                        <div class="flex flex-col justify-center items-center gap-5">
                            <img src="/assets/img/user-profile.png" alt="" class="w-40 rounded-2xl">
                            <div class="flex flex-col justify-center items-center">
                                <h1 class="font-bold text-2xl">dr. Anggy Juniarto</h1>
                                <p class="text-xl">CEO</p>
                            </div>
                            <div class="flex gap-6">
                                <img src="/assets/icons/mdi_instagram.svg" alt="">
                                <img src="/assets/icons/mdi_twitter.svg" alt="">
                                <img src="/assets/icons/mdi_facebook.svg" alt="">
                            </div>
                            <div class="flex flex-col items-center mt-6">
                                <h1 class="text-2xl font-bold">Klinik Cabang Bandung</h1>
                                <p class="text-xl">Bandung, Jawa Barat</p>
                            </div>
                        </div>

                    </CardContent>

                    <div class="flex w-8/12">
                        <template v-if="activePane == 'info'">
                            <ProfileInformation />
                        </template>
                        <template v-else>
                            <ProfileSetting />
                        </template>

                    </div>

                </div>
                <div class="flex justify-end px-16">
                    <div class="flex w-8/12 items-center justify-center">
                       <button class="default-button bg-secondary text-white">Simpan</button>
                    </div>
                </div>
            </ContentData>
        </template>
    </Content>
</template>

<script setup>
import { ref } from 'vue'
import ProfileInformation from '~/components/profile/ProfileInformation.vue';
import ProfileSetting from '../../components/profile/ProfileSetting.vue';
const activePane = ref('info')
</script>