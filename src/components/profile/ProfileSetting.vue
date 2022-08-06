<template>
<div class="flex flex-col w-full gap-6">
    <CardContent  title="Ubah kode akses" class="gap-0 cursor-default" @click="dialogAkses = true">
        <template #header-actions>
            <img src="/assets/icons/mdi_chevron-right-black.svg" alt="">
        </template>
    </CardContent>
    <CardContent  title="Ubah password" class="gap-0 cursor-default" @click="dialogPassword = true">
        <template #header-actions>
            <img src="/assets/icons/mdi_chevron-right-black.svg" alt="">
        </template>
    </CardContent>
    <CardContent width="w-full">
        <h1 class="font-bold text-xl mb-4">Social Media</h1>
        <div class="grid grid-cols-[25%,75%] gap-2 mb-30">
            <RowDataGrid label="Facebook">
                <el-input placeholder="Username Facebook" :input-style="{'background-color': '#FFF'}" class="h-12">
                    <template #prepend>facebook.com/</template>
                </el-input>
            </RowDataGrid>
            <RowDataGrid label="Twitter">
                <el-input placeholder="Username Twitter" :input-style="{'background-color': '#FFF'}" class="h-12">
                    <template #prepend>twitter.com/</template>
                </el-input>
            </RowDataGrid>
            <RowDataGrid label="Instagram">
                <el-input placeholder="Username Instagram" :input-style="{'background-color': '#FFF'}" class="h-12">
                    <template #prepend>instagram.com/</template>
                </el-input>
            </RowDataGrid>
        </div>
    </CardContent>
</div>

<el-dialog
    v-model="dialogAkses" width="30%">
    <h1 class="font-bold text-3xl mb-4">Ubah Kode Akses</h1>
    <div class="flex flex-col gap-3">
        <div class="flex flex-col">
            <p>Kode akses sebelumnya</p>
            <el-input            
                v-model="kodeAkses"
                type="password"
                placeholder="Kode akses sebelumnya"
                show-password
                class="h-12"
            />
        </div>
        <div class="flex flex-col">
            <p>Kode akses baru</p>
            <el-input            
                v-model="kodeAksesBaru"
                type="password"
                placeholder="Kode akses baru"
                show-password
                class="h-12"
            />
        </div>
    </div>
    <template #footer>
      <span class="flex gap-6 justify-end">
        <button @click="dialogAkses = false" class="text-secondary">Batal</button>        
        <button class="default-button bg-secondary text-white" @click="dialogAkses = false">Simpan</button>
      </span>
    </template>
</el-dialog>

<el-dialog
    v-model="dialogPassword" width="30%">
    <h1 class="font-bold text-3xl mb-4">Ubah Password</h1>
    <div class="flex flex-col gap-3">
        <div class="flex flex-col">
            <p>Password sebelumnya</p>
            <el-input            
                v-model="kodeAkses"
                type="password"
                placeholder="Password sebelumnya"
                show-password
                class="h-12"
            />
        </div>
        <div class="flex flex-col">
            <p>Password baru</p>
            <el-input            
                v-model="kodeAksesBaru"
                type="password"
                placeholder="Password baru"
                show-password
                class="h-12"
            />
        </div>
    </div>
    <template #footer>
      <span class="flex gap-6 justify-end">
        <button @click="dialogPassword = false" class="text-secondary">Batal</button>        
        <button class="default-button bg-secondary text-white" @click="dialogPassword = false">Simpan</button>
      </span>
    </template>
</el-dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialogAkses = ref(false)
const dialogPassword = ref(false)
const kodeAkses = ref('')
const kodeAksesBaru = ref('')

</script>