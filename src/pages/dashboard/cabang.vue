<template>
    <Content>
        <template #title>
            <ContentTitle title="Daftar Cabang" subtitle="Pilih sala satu cabang untuk melihat aktivitas melalui sistem informasi" />
        </template>
        <template #default>
            <ContentData>
                <el-input class="h-12 search-input" placeholder="Cari cabang" clearable>
                <template #prefix>
                    <img src="/assets/icons/mdi_magnify.svg" alt="">
                </template>
                </el-input>

                <div class="flex flex-wrap gap-6 justify-center w-full">
                    <CardContent title="Klink Bandung" subtitle="clinicbandung@gmail.com" width="w-5/12" icon="cabang.svg" v-for="i in 21" :key="i" class="gap-0">
                        <template #header-actions>
                            <img src="/assets/icons/mdi_chevron-right-black.svg" alt="">
                        </template>
                    </CardContent>
                </div>

                 <div class="pagination-class mx-auto mt-6">
                    <el-pagination layout="prev, pager, next" :total="50" />
                </div>
            </ContentData>
        </template>
    </Content>
</template>

<script setup>
</script>