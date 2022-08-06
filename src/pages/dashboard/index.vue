<template>
    <!-- Content -->
    <Content>
        <template #title>
            <ContentTitle title="Performa Klinik Cabang Bandung" />
        </template>
        <template #default>
            <ContentData>
                <!-- Section Content 1 -->
                <div class="content-row">

                            <!-- Card -->
                            <CardContent title="Pendapatan bulan ini" icon="profit.svg" subtitle="Grafik Pendapatan bulan Mei 2022" width="w-7/12">
                                <template #header-actions>
                                    <img src="/assets/icons/mdi_calendar-month.svg" alt="" class="h-5" />
                                    <p class="text-xs">1/5/2022 - 30/5/2022</p>
                                </template>
                                <template #default>
                                    <div class="flex justify-end items-center gap-2">
                                        <div class="h-2 w-2 bg-secondary rounded-full"></div>
                                        <p class="text-xs">Pendapatan Klinik</p>
                                    </div>
                                    <img src="/assets/img/profit_line-chart.png" alt="" class="w-full" />
                                </template>
                            </CardContent>
                        
                            <!-- Card -->
                            <CardContent title="Layanan terlaris" icon="service.svg" width="w-5/12">
                                <template #default>
                                <!-- Content Card -->
                                <div class="flex flex-col gap-3 flex-grow justify-evenly">
                                    <template v-for="(layanan, index) in dataLayanan" :key="index">
                                        <ProgressComponent :title="layanan.title" :percentage="layanan.value" />
                                    </template>
                                </div>
                                </template>
                            </CardContent>

                        </div>
                        
                        <!-- Section Content 2 -->
                        <div class="content-row">

                        <!-- Card -->
                        <template v-for="(count, index) in dataCounting" :key="index">
                            <CardContent :icon="count.icon" :width="`w-${12 / dataCounting.length}/12`">
                                <template #default>
                                <!-- Content Card -->
                                <div class="flex flex-col">
                                    <h1 class="text-5xl font-black text-primary">{{ count.count }}</h1>
                                    <p>{{ count.title }}</p>
                                </div>
                                </template>
                            </CardContent>
                            </template>

                        </div>

                        <!-- Section Content 3 -->
                        <div class="content-row">
                            <!-- Card -->
                            <CardContent title="Aktivitas Ahli Kecantikan" icon="activitas.svg" subtitle="Jumlah aktivitas ahli kecantikan bulan ini" width="w-8/12">
                                <template #default>
                                    <img src="/assets/img/bar-chart.png" alt="" class="w-full" />
                                </template>
                            </CardContent>

                            <!-- Card -->
                            <CardContent icon="service.svg" width="w-4/12">
                                <template #default>
                                <!-- Content Card -->
                                <div class="flex flex-col flex-grow justify-evenly">
                                <template v-for="(rating, index) in dataRating" :key="index">
                                    <RateComponent :title="rating.title" :value="rating.value"/>
                                </template>
                                </div>
                                </template>
                            </CardContent>
                        </div>

                        <!-- Section Content 4 -->
                        <div class="content-row">
                            <CardContent title="Daftar promo klinik" icon="promo.svg" subtitle="Promo-promo yang sedang berlangsung" width="w-full">
                                <template #default>
                                    <el-table :data="tableData" style="width: 100%">
                                        <el-table-column prop="id" label="#" />
                                        <el-table-column prop="name" label="Nama Promo" />
                                        <el-table-column prop="value" label="Besaran promo" />
                                        <el-table-column prop="date" label="Periode" />
                                        <el-table-column prop="code" label="Kode promo" />
                                    </el-table>
                                </template>
                            </CardContent>
                        </div>
                    </ContentData>
                </template>
    </Content>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import Content from '~/components/base/Content.vue'
import ContentTitle from '~/components/base/section/ContentTitle.vue'
import ContentData from '~/components/base/section/ContentData.vue'
import CardContent from '~/components/CardContent.vue'
import ProgressComponent from '~/components/ProgressComponent.vue'
import RateComponent from '~/components/RateComponent.vue'

const dataLayanan = ref([
    {
        'title': 'Produk : 213 pcs',
        'value': 50
    },
    {
        'title': 'Perawatan : 213 Pasien',
        'value': 16
    },
    {
        'title': 'Paket Perawatan : 176 Pasien',
        'value': 14
    },
    {
        'title': 'Konsultasi : 113 Pasien',
        'value': 10
    },
    {
        'title': 'Tindakan : 113 Pasien',
        'value': 10
    }
])

const dataCounting = ref([
    {
        icon: 'pesanan.svg',
        count: 500,
        title: 'Pasien di bulan ini'
    },
    {
        icon: 'stok.svg',
        count: 241,
        title: 'Stok habis bulan ini'
    },
    {
        icon: 'queue.svg',
        count: 23,
        title: 'Pasien menunggu hari ini'
    },
    {
        icon: 'cart.svg',
        count: 350,
        title: 'Transaksi di bulan ini'
    },
]);

const dataRating = ref([
    {
        'title': 'Resepsionis',
        'value': 4.0
    },
    {
        'title': 'Dokter',
        'value': 5.0
    },
    {
        'title': 'Ahli Kecantikan',
        'value': 4.0
    },
])

const tableData = ref([
    {
        id: 1,
        name: 'Promo all treatment',
        value: '15%',
        date: '1/5/2022 - 30/5/2022',
        code: 'TREATMENT'
    },
    {
        id: 2,
        name: 'Promo Skincare',
        value: '25%',
        date: '1/5/2022 - 30/5/2022',
        code: 'SKINCARE'
    },
    {
        id: 3,
        name: 'Buy 1 Get 2',
        value: 'Gratis Produk',
        date: '1/5/2022 - 30/5/2022',
        code: 'FREE'
    },
    {
        id: 4,
        name: 'Promo tONER',
        value: '45%',
        date: '1/5/2022 - 30/5/2022',
        code: 'TONER'
    },
])
</script>