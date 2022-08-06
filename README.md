# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


## Tech Stack

Menggunakan Vue 3 + Vite


## Run Locally

Clone the project

```bash
  git clone https://github.com/zenklot/slicing_admin.git
```

Go to the project directory

```bash
  cd slicing_admin
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Setup Sidebar Menu
Jika kamu ingin menghapus atau menambahkan item menu di sidebar anda hanya perlu menginputkannya di file `sidebar.json` yang berada di folder `router`


Level Menu Sidebar Dibagi Menjadi 4
| Tipe Level             | Keterangan                                                                |
| ----------------- | ------------------------------------------------------------------ |
| level-one |  Item menu Root Layout Tampil diawal & diklik menampilakn menu Level 2|
| level-two |  Item menu detail dengan menggunakan icon & diklik ke halaman |
| level-three |  Digunakan untuk item menu dengan dropdown didalamnya |
| level-four | Digunakan untuk menampilkan item menu tanpa icon, biasanya setelah dropdown |


Adapun Penulisan menu menggunakan json dengan ketentuan sebagai berikut

#### Tipe `level-one` :
```javascript
{
  "path": "/dashboard",               //Required
  "name": "Dashboard",                //Required
  "icon": "nama file icon",           //Required
  "type": "level-one",                //Required
  "component": "/src/page/Main.vue",  //Opsional (Jika punya masukan component layout) 
  "children": []                      //Required
}
```

#### Tipe `level-two` (Fokus Kebagian Children):
```javascript
{
  "path": "/dashboard",     
  "name": "Dashboard",      
  "icon": "nama file icon", 
  "type": "level-one",      
  "component": "/src/page/Main.vue", 
  "children": [
    {
      "path": "/dashboard/profit",                      //Path alamat melanjutkan (harus sama dengan level atasnya)
      "name": "Dashboard Profit",      
      "icon": "nama file icon", 
      "type": "level-two",      
      "component": "/src/page/dashboard/index.vue",     //Content halaman Tersebut
      "children" : []                                   //Bagian Children Jangan Diisi
    },
  ]            
}
```

#### Tipe `level-three` & `level-four` (Sama seperti level 2 yang berbeda type sama children diisi):
```javascript
{
  "path": "/dashboard",     
  "name": "Dashboard",      
  "icon": "nama file icon", 
  "type": "level-one",      
  "component": "/src/page/Main.vue", 
  "children": [
    {
      "path": "/dashboard/biaya",                         //Untuk level 3 path ini nantinya tidak digunakan
      "name": "Dashboard Biaya",                      
      "icon": "nama file icon", 
      "type": "level-three",      
      "component": "",                                    // Opsional tidak dimasukan pun tidak masalah karena tidak diguanakan pathnya
      "children" : [
        {
          "path": "/dashboard/biaya/tambah-biaya",        //Path Router yang digunakan adalah yang ini
          "name": "Tambah Biaya",
          "icon": "",                                     //Icon tidak dibutuhkan
          "type": "level-four",      
          "component": "/src/page/dashboard/biaya.vue",   //Sesuaikan file component content halaman tsb.
          "children" : []                                 //Tidak ada children lagi
        },  
      ]
    },
  ]            
}
```
## Finish Setup Sidebar Menu

Setelah menambahkan JSON Sidebar, langkah selanjutnya adalah mengenerate `sidebar-router.js` karena file tersebut digunakan untuk routing aplikasi

```bash
  npm run generate_menu
  
```
    
