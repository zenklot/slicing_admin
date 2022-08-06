<template>
<div class="flex flex-col w-full gap-5">
    <CardContent width="w-full">
        <div class="grid grid-cols-[25%,75%] gap-2">
            <RowDataGrid label="ID Pegawai">
                <span class="text-sm">KRYWN-00239-2309</span>
            </RowDataGrid>
            <RowDataGrid label="Nama Pegawai">
                <span class="text-sm">Anggy Juniarto</span>
            </RowDataGrid>
            <RowDataGrid label="Jenis Kelamin">
                <span class="text-sm">ID Pegawai</span>
            </RowDataGrid>
            <RowDataGrid label="Tanggal Lahir">
                <span class="text-sm">06/09/1992</span>
            </RowDataGrid>
            <RowDataGrid label="Posisi">
                <span class="text-sm">Dokter</span>
            </RowDataGrid>
            <RowDataGrid label="Klinik Cabang">
                <span class="text-sm">Klinik Cabang Padang</span>
            </RowDataGrid>
        </div>
    </CardContent>
    <CardContent width="w-full">
        <div class="grid grid-cols-[25%,75%] gap-2">
            <RowDataGrid label="No. Telepon">
                <input type="text" placeholder="08732671180" class="h-9 default-input">
            </RowDataGrid>
            <RowDataGrid label="Email">
                <input type="text" placeholder="june@gmail,com" class="h-9 default-input">
            </RowDataGrid>
            <RowDataGrid label="Alamat">
                <textarea class="default-input" placeholder="Alamat"></textarea>
            </RowDataGrid>
        </div>
    </CardContent>
</div>
</template>