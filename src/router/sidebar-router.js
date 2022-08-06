const sidebar_route = [
  {
    "path": "/dashboard",
    "component": () => import('~/layout/Admin.vue'),
    "children": [
      {
        "path": "crm",
        "name": "dashboard-crm",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "analisis",
        "name": "dashboard-analisis",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "penjualan",
        "name": "dashboard-penjualan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "eksekutif",
        "name": "dashboard-eksekutif",
        "component": () => import('~/pages/dashboard/index.vue')
      }
    ]
  },
  {
    "path": "/penjualan",
    "component": () => import('~/layout/Admin.vue'),
    "children": [
      {
        "path": "pengunjung",
        "name": "penjualan-pengunjung",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pesanan",
        "name": "penjualan-pesanan-online",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "faktur",
        "name": "penjualan-faktur",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "master/menu",
        "name": "penjualan-data-master-daftar-menu",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "master/add-menu",
        "name": "penjualan-data-master-tambah-menu",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "master/kategori",
        "name": "penjualan-data-master-kategori",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "master/add-kategori",
        "name": "penjualan-data-master-tambah-kategori",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan/penjualan",
        "name": "penjualan-laporan-penjualan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan/pengunjung",
        "name": "penjualan-laporan-pengunjung",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan/pesanan",
        "name": "penjualan-laporan-pesanan-online",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan/faktur",
        "name": "penjualan-laporan-faktur",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pembayaran",
        "name": "penjualan-pembayaran",
        "component": () => import('~/pages/dashboard/index.vue')
      }
    ]
  },
  {
    "path": "/pelayanan",
    "component": () => import('~/layout/Admin.vue'),
    "children": [
      {
        "path": "antrian",
        "name": "pelayanan-antrian",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "konsultasi",
        "name": "pelayanan-proses-kunsultasi",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "aktivasi",
        "name": "pelayanan-aktivasi-konsultasi",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "paket",
        "name": "pelayanan-paket-pelayanan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "deposit",
        "name": "pelayanan-deposit",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "persentase",
        "name": "pelayanan-persentase-konsultasi",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "per-konsul/persentase",
        "name": "pelayanan-laporan-persentase",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "per-konsul/persentase-kategori",
        "name": "pelayanan-laporan-persentase-by-kategori",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "per-konsul/persentase-rekap",
        "name": "pelayanan-laporan-rekap-persentase",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "per-konsul/resep",
        "name": "pelayanan-laporan-resep",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "per-konsul/buku-tamu",
        "name": "pelayanan-laporan-rincian-buku-tamu",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "per-konsul/rekap-buku-tamu",
        "name": "pelayanan-laporan-rekap-buku-tamu",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "persentase/ruangan",
        "name": "pelayanan-pengaturan-ruangan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "persentase/aktivitas",
        "name": "pelayanan-pengaturan-aktivitas",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "persentase/persentase",
        "name": "pelayanan-pengaturan-persentase",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "persentase/ref-keluhan",
        "name": "pelayanan-pengaturan-referensi-keluhan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "persentase/ref-diagnosa",
        "name": "pelayanan-pengaturan-referensi-diagnosa",
        "component": () => import('~/pages/dashboard/index.vue')
      }
    ]
  },
  {
    "path": "/rekdis",
    "component": () => import('~/layout/Admin.vue'),
    "children": [
      {
        "path": "pasien",
        "name": "rekam-medis-pasien",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "hasil-analisis",
        "name": "rekam-medis-hasil-analisis",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "rekap-konsultasi",
        "name": "rekam-medis-rekap-konsultasi",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "membership",
        "name": "rekam-medis-membership",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan/daftar-pasien",
        "name": "rekam-medis-laporan-daftar-pasien",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan/registrasi",
        "name": "rekam-medis-laporan-registrasi",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan",
        "name": "rekam-medis-pengaturan",
        "component": () => import('~/pages/dashboard/index.vue')
      }
    ]
  },
  {
    "path": "/promo",
    "component": () => import('~/layout/Admin.vue'),
    "children": [
      {
        "path": "promo-otomatis",
        "name": "promo-promo-otomatis",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "promo-voucher",
        "name": "promo-promo-voucher",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan/aktivasi-promo",
        "name": "promo-laporan-aktivasi-promo",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan/penggunaan-promo",
        "name": "promo-laporan-penggunaan-promo",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan",
        "name": "promo-pengaturan",
        "component": () => import('~/pages/dashboard/index.vue')
      }
    ]
  },
  {
    "path": "/pembelian",
    "component": () => import('~/layout/Admin.vue'),
    "children": [
      {
        "path": "pemesanan",
        "name": "pembelian-pemesanan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "kontrol-kualitas",
        "name": "pembelian-kontrol-kualitas",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan",
        "name": "pembelian-laporan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan",
        "name": "pembelian-pengaturan",
        "component": () => import('~/pages/dashboard/index.vue')
      }
    ]
  },
  {
    "path": "/penyimpanan",
    "component": () => import('~/layout/Admin.vue'),
    "children": [
      {
        "path": "stok/stok-tersedia",
        "name": "penyimpanan-stok-stok-tersedia",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "stok/stok-masuk",
        "name": "penyimpanan-stok-stok-masuk",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "stok/stok-keluar",
        "name": "penyimpanan-stok-stok-keluar",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "stok/stok-kedaluarsa",
        "name": "penyimpanan-stok-stok-kedaluarsa",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "stok/aktivitas-stok",
        "name": "penyimpanan-stok-aktivitas-stok",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "data-master/data-barang",
        "name": "penyimpanan-data-master-data-barang",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "data-master/add-data-barang",
        "name": "penyimpanan-data-master-tambah-data-barang",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan",
        "name": "penyimpanan-pengaturan",
        "component": () => import('~/pages/dashboard/index.vue')
      }
    ]
  },
  {
    "path": "/kepegawaian",
    "component": () => import('~/layout/Admin.vue'),
    "children": [
      {
        "path": "data-pegawai",
        "name": "kepegawaian-data-pegawai",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "add-pegawai",
        "name": "kepegawaian-tambah-data-pegawai",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "penjadwalan",
        "name": "kepegawaian-penjadwalan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "Prensensi",
        "name": "kepegawaian-prensensi",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "kontrak-kerja",
        "name": "kepegawaian-kontrak-kerja",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "penilaian-karyawan",
        "name": "kepegawaian-penilaian-karyawan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "proses-penggajian",
        "name": "kepegawaian-proses-penggajian",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "laporan",
        "name": "kepegawaian-laporan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan/posisi",
        "name": "kepegawaian-pengaturan-posisi",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan/departemen",
        "name": "kepegawaian-pengaturan-departemen",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan/shif-kerja",
        "name": "kepegawaian-pengaturan-shift-kerja",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan/kelompok-kerja",
        "name": "kepegawaian-pengaturan-kelompok-kerja",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan/komponen-penggajian",
        "name": "kepegawaian-pengaturan-komponen-penggajian",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan/waktu-penilaian",
        "name": "kepegawaian-pengaturan-waktu-penilaian",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "pengaturan/komponen-penilaian",
        "name": "kepegawaian-pengaturan-komponen-penilaian",
        "component": () => import('~/pages/dashboard/index.vue')
      }
    ]
  },
  {
    "path": "/tagihan",
    "component": () => import('~/layout/Admin.vue'),
    "children": []
  },
  {
    "path": "/reservasi",
    "component": () => import('~/layout/Admin.vue'),
    "children": []
  },
  {
    "path": "/aplikasi-bisnis",
    "component": () => import('~/layout/Admin.vue'),
    "children": [
      {
        "path": "data-perusahaan",
        "name": "aplikasi-bisnis-data-perusahaan",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "manajemen-bisnis",
        "name": "aplikasi-bisnis-manajemen-bisnis",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "add-bisnis",
        "name": "aplikasi-bisnis-tambah-data-bisnis",
        "component": () => import('~/pages/dashboard/index.vue')
      },
      {
        "path": "kontak-Tagihan",
        "name": "aplikasi-bisnis-kontak-tagihan",
        "component": () => import('~/pages/dashboard/index.vue')
      }
    ]
  }
]
export {sidebar_route} 