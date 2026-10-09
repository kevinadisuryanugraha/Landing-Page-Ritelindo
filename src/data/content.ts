import {
  ValuePropItem,
  RetailPackage,
  BusinessSector,
  FaqItem,
  WorkflowStep,
} from '../types';

export const COMPANY_INFO = {
  name: 'Ritelindo Group',
  legalName: 'PT Ritelindo Akselera Kolaborasi',
  tagline: 'Pabrik Rak Minimarket & Solusi Setup Toko Retail Modern Langsung dari Produsen',
  phoneDisplay: '+62 812-3456-7890',
  whatsappRaw: '6281234567890',
  email: 'halo@ritelindo.web.id',
  address: 'Kawasan Industri Retail Terpadu, Jawa Timur dan Jawa Tengah',
  operationalHours: 'Senin - Sabtu: 08.00 - 17.00 WIB (Layanan WA Konsultasi Responsif)',
  copyrightYear: 2026,
};

// 7 Value Propositions Sesuai task-kevin.md (Tanpa Buzzwords Klise AI)
export const VALUE_PROPOSITIONS: ValuePropItem[] = [
  {
    id: 'free-layout-3d',
    title: 'Free Konsultasi & Layout 3D',
    description:
      'Perencanaan denah visual 3D toko Anda tanpa biaya sebelum transaksi. Memetakan posisi rak gondola, titik kasir, dan lebar lorong sirkulasi pembeli secara presisi.',
    icon: 'Box',
    badge: 'Layanan Utama',
    highlight: true,
  },
  {
    id: 'free-ongkir',
    title: 'Free Ongkir Jawa - Bali',
    description:
      'Pengiriman bebas biaya kirim ke seluruh wilayah Pulau Jawa dan Bali untuk pemesanan paket setup toko. Pengiriman dilakukan menggunakan armada distribusi internal pabrik.',
    icon: 'Truck',
    badge: 'Bebas Biaya Kirim',
    highlight: true,
  },
  {
    id: 'free-assembly',
    title: 'Free Perakitan Jatim, Jateng & DIY',
    description:
      'Teknisi berpengalaman dari pabrik merakit rak gondola langsung di lokasi toko Anda tanpa biaya jasa perakitan tambahan.',
    icon: 'Wrench',
    badge: 'Jasa Teknisi Gratis',
  },
  {
    id: 'custom-size',
    title: 'Bisa Custom Ukuran & Ruangan',
    description:
      'Fabrikasi dimensi tiang, kedalaman ambalan, dan lebar rak yang disesuaikan dengan kondisi denah toko, termasuk tiang struktur dan sudut sempit ruangan.',
    icon: 'Ruler',
    badge: 'Dimensi Khusus',
  },
  {
    id: 'direct-factory',
    title: 'Produk Langsung dari Pabrik',
    description:
      'Harga tangan pertama langsung dari lini produksi pabrik. Menggunakan plat baja standar SNI dengan sistem pewarnaan powder coating oven suhu tinggi.',
    icon: 'Factory',
    badge: 'Harga Tangan Pertama',
  },
  {
    id: 'order-flexibility',
    title: 'Satuan, Paket Toko & Proyek Retail',
    description:
      'Kapasitas pemesanan fleksibel mulai dari penambahan 1 unit rak untuk toko yang sudah berjalan, paket lengkap toko baru, hingga pengadaan proyek ritel jaringan.',
    icon: 'Layers',
    badge: 'Skala Fleksibel',
  },
  {
    id: 'interior-service',
    title: 'Jasa Interior Toko Modern & Stylish',
    description:
      'Penyediaan kelengkapan interior toko modern seperti meja kasir terpadu, papan petunjuk kategori barang, dan pencahayaan display produk untuk tata ruang toko rapi.',
    icon: 'Layers',
    badge: 'Paket Terpadu',
  },
];

// Showcase Paket Retail Berdasarkan Kategori Luas Toko Riil
export const RETAIL_PACKAGES: RetailPackage[] = [
  {
    id: 'paket-hemat',
    name: 'Paket Toko Kios & Kelontong',
    category: 'Skala Kios & Toko Kecil',
    idealFor: 'Toko Kelontong dan Sembako Modern',
    storeSize: 'Luas Toko 4x6 m s.d 6x8 m (24 - 48 m²)',
    priceEstimate: 'Estimasi Mulai Rp 12 Jutaan',
    isPopular: false,
    ctaText: 'Konsultasikan Paket Kios',
    features: [
      'Gratis Desain Layout 3D Toko',
      'Free Ongkir se-Jawa dan Bali',
      'Free Perakitan Langsung di Lokasi',
      '8 Unit Rak Single Wall Gondola (T150 x P90 cm)',
      '3 Unit Rak Double Island Gondola (T120 x P90 cm)',
      '2 Unit Rak End Gondola Promo Depan',
      'Kapasitas Beban 50 kg per Susun Ambalan',
      'Finishing Powder Coating Tahan Gesekan',
    ],
  },
  {
    id: 'paket-minimarket-modern',
    name: 'Paket Minimarket Mandiri',
    category: 'Skala Minimarket Menengah',
    idealFor: 'Minimarket Mandiri, Pet Shop, Toko ATK, Apotek',
    storeSize: 'Luas Toko 8x10 m s.d 10x15 m (80 - 150 m²)',
    priceEstimate: 'Estimasi Mulai Rp 28 Jutaan',
    isPopular: false,
    ctaText: 'Konsultasikan Paket Minimarket',
    features: [
      'Gratis Desain Layout 3D dan Penataan Zonasi Rak',
      'Free Ongkir Jawa - Bali dan Free Perakitan Teknisi',
      '18 Unit Rak Single Wall (T180 x P90 cm)',
      '8 Unit Rak Double Island (T150 x P90 cm)',
      '4 Unit End Gondola Depan Lorong',
      '1 Unit Meja Kasir Model Knockdown',
      'Price Tag PVC dan Wire Stopper Pengaman Barang',
      'Kapasitas Beban Uji 60 kg per Susun Ambalan',
      'Garansi Presisi Fabrikasi Pabrik 1 Tahun',
    ],
  },
  {
    id: 'paket-supermarket-gudang',
    name: 'Paket Supermarket & Rak Gudang',
    category: 'Skala Toko Besar & Gudang',
    idealFor: 'Supermarket, Toko Bahan Bangunan, Grosir',
    storeSize: 'Luas Toko > 150 m² (Dimensi Khusus)',
    priceEstimate: 'Kalkulasi Berdasarkan Denah',
    isPopular: false,
    ctaText: 'Minta Penawaran Toko Besar',
    features: [
      'Gratis Gambar Kerja 3D dan Analisis Sirkulasi Troli',
      'Free Ongkir Jawa - Bali dan Perakitan Skala Penuh',
      'Kombinasi Rak Gondola Display dan Rak Gudang Medium Duty',
      'Kapasitas Beban Rak Gudang 250 - 500 kg per Level Ambalan',
      'Pilihan Warna Tiang dan Shelving Sesuai Identitas Toko',
      'Termasuk Backmesh Gantungan Display Aksesoris',
      'Pilihan Jasa Interior dan Papan Petunjuk Kategori',
      'Pendampingan Teknisi Selama Persiapan Display Toko',
    ],
  },
];

// 6 Sektor Bisnis Retail yang Dilayani Sesuai task-kevin.md
export const BUSINESS_SECTORS: BusinessSector[] = [
  {
    id: 'minimarket',
    name: 'Minimarket & Kelontong Modern',
    description: 'Penataan rak gondola rapi dengan jarak lorong standar untuk mempermudah pergerakan pembeli.',
    icon: 'ShoppingCart',
    popularRack: 'Rak Gondola Single & Double T180cm',
  },
  {
    id: 'apotek',
    name: 'Apotek & Toko Obat',
    description: 'Pajangan bersih dan teratur untuk kategorisasi obat bebas, vitamin, dan produk perawatan.',
    icon: 'Cross',
    popularRack: 'Rak Gondola Shelving Kaca / Plat Putih',
  },
  {
    id: 'petshop',
    name: 'Pet Shop & Baby Shop',
    description: 'Kekuatan ambalan besi kokoh untuk menahan beban karung pakan hewan dan dus perlengkapan bayi.',
    icon: 'HeartHandshake',
    popularRack: 'Rak Heavy Gondola T150cm Shelving Lebar',
  },
  {
    id: 'kue-atk',
    name: 'Toko Bahan Kue & ATK',
    description: 'Kelengkapan aksesoris hook gantungan dan sekat pembagi untuk merapikan produk ukuran kecil.',
    icon: 'Package',
    popularRack: 'Rak Backmesh + Hook Chrome Gantungan',
  },
  {
    id: 'fashion',
    name: 'Toko Fashion & Aksesoris',
    description: 'Penampilan rak display yang disesuaikan dengan konsep warna gerai dan gantungan pakaian.',
    icon: 'Shirt',
    popularRack: 'Rak Gondola Display + Hanger Bar',
  },
  {
    id: 'bangunan',
    name: 'Toko Bahan Bangunan & Alat Listrik',
    description: 'Konstruksi rak tebal untuk menopang kaleng cat, perkakas pertukangan, dan material teknik.',
    icon: 'Hammer',
    popularRack: 'Rak Medium Duty Rack Besi Baja Tebal',
  },
];

// Standar Kualitas Fabrikasi Pabrik (Verifiable Technical Evidence - Pengganti Testimoni Fiktif)
export interface QualityStandardItem {
  id: string;
  title: string;
  spec: string;
  description: string;
  metric: string;
}

export const FABRICATION_STANDARDS: QualityStandardItem[] = [
  {
    id: 'material',
    title: 'Plat Baja Cold-Rolled Standar SNI',
    spec: 'Ketebalan Tiang 1.8 mm • Shelving 0.7 mm',
    description:
      'Material besi baja kualitas industri yang diproses melalui mesin presisi tinggi, memastikan struktur tiang tegak lurus dan ambalan tidak melengkung saat dimuati barang berat.',
    metric: 'Uji Beban 60 kg/Susun',
  },
  {
    id: 'coating',
    title: 'Finishing Powder Coating Oven 200°C',
    spec: 'Cat Serbuk Elektrostatik Tahan Karat',
    description:
      'Proses pelapisan cat serbuk bebas zat timbal dengan pemanasan oven suhu tinggi, menghasilkan lapisan cat tebal, tahan goresan gesekan dus, dan tahan korosi kelembapan.',
    metric: 'Anti Karat & Bebas Korosi',
  },
  {
    id: 'system',
    title: 'Sistem Knock-Down Presisi Tanpa Baut',
    spec: 'Interlocking Bracket System',
    description:
      'Perakitan sistem kancingan presisi memudahkan penyesuaian ketinggian ambalan setiap 5 cm sesuai ukuran tinggi kemasan produk yang dipajang.',
    metric: 'Fleksibilitas Ambalan 5 cm',
  },
  {
    id: 'distribution',
    title: 'Armada Distribusi Khusus Jawa - Bali',
    spec: 'Logistik Internal Pabrik Langsung',
    description:
      'Pengantaran pesanan dikawal langsung armada angkut internal untuk memastikan seluruh komponen rak tiba di lokasi toko Anda dalam kondisi mulus tanpa lecet pengiriman.',
    metric: 'Free Ongkir Jawa & Bali',
  },
];

// Alur 4 Tahap Pengadaan Pabrik
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: 'Kirim Ukuran Denah Ruangan Toko',
    shortLabel: 'Konsultasi Denah',
    description:
      'Kirimkan estimasi ukuran panjang x lebar toko Anda (atau sketsa kasar denah) melalui WhatsApp. Tim kami memandu tanpa kewajiban pembelian awal.',
    highlight: 'Konsultasi Tanpa Biaya',
    duration: 'Respon < 15 Menit',
    cost: 'Rp 0 (Gratis)',
    deliverables: [
      'Panduan pengukuran ruangan toko',
      'Rekomendasi awal zonasi display rak',
      'Format sketsa denah mudah via WhatsApp',
    ],
    icon: 'MessageSquare',
    actionCta: {
      label: 'Kirim Ukuran Toko via WA',
      source: 'hero',
      customMessage:
        'Halo Tim Ritelindo, saya ingin konsultasi denah ruangan toko dan mengirimkan ukuran toko saya. Mohon panduannya.',
    },
  },
  {
    step: 2,
    title: 'Pembuatan Gambar Kerja 3D & Rincian Unit',
    shortLabel: 'Simulasi Desain 3D',
    description:
      'Tim drafter memproses denah visual 3D penataan rak, alur kasir, dan lorong belanja, disertai rincian penawaran harga transparan.',
    highlight: 'Kalkulasi Kebutuhan Presisi',
    duration: 'Pengerjaan 1x24 Jam',
    cost: '100% Gratis',
    deliverables: [
      'Visual denah 3D tampak atas dan perspektif',
      'Analisis lebar lorong sirkulasi pembeli',
      'Rincian penawaran unit rak tanpa komitmen',
    ],
    icon: 'Compass',
    actionCta: {
      label: 'Klaim Desain 3D Toko',
      source: 'layout3d',
      customMessage:
        'Halo Tim Ritelindo, saya ingin klaim pembuatan gambar kerja denah 3D gratis untuk toko retail saya.',
    },
  },
  {
    step: 3,
    title: 'Produksi Pabrik & Pengiriman Armada',
    shortLabel: 'Fabrikasi & Pengiriman',
    description:
      'Rak diproduksi di lini pabrik sesuai standar SNI. Setelah proses kontrol kualitas, pesanan dikirim langsung ke alamat toko Anda.',
    highlight: 'Free Ongkir Jawa - Bali',
    duration: 'Fabrikasi 1 - 3 Hari',
    cost: 'Bebas Biaya Kirim',
    deliverables: [
      'Plat baja cold-rolled tebal standar SNI',
      'Finishing powder coating oven 200°C tahan karat',
      'Pengiriman dikawal armada angkut internal pabrik',
    ],
    icon: 'Truck',
    actionCta: {
      label: 'Cek Jadwal Pengiriman',
      source: 'package',
      customMessage:
        'Halo Tim Ritelindo, saya ingin menanyakan jadwal pengiriman armada dan ketersediaan stok rak siap kirim.',
    },
  },
  {
    step: 4,
    title: 'Perakitan Langsung oleh Teknisi di Lokasi',
    shortLabel: 'Instalasi di Lokasi',
    description:
      'Tim teknisi pabrik mendatangi toko Anda untuk merakit seluruh rak hingga berdiri kokoh dan siap ditata produk dagangan.',
    highlight: 'Free Perakitan Jatim, Jateng & DIY',
    duration: 'Selesai dalam 1 Hari',
    cost: 'Gratis Jasa Teknisi',
    deliverables: [
      'Pemasangan sistem knock-down presisi tanpa baut',
      'Uji kestabilan ambalan shelving di lokasi',
      'Serah terima rak toko siap tata produk dagangan',
    ],
    icon: 'Wrench',
    actionCta: {
      label: 'Konsultasi Perakitan Toko',
      source: 'faq',
      customMessage:
        'Halo Tim Ritelindo, saya ingin menanyakan jadwal perakitan teknisi langsung di lokasi toko saya.',
    },
  },
];

// Pertanyaan Umum (FAQ)
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah benar layanan konsultasi dan pembuatan desain 3D tidak dipungut biaya sama sekali?',
    answer:
      'Benar, layanan pembuatan desain layout 3D diberikan tanpa biaya sebelum pembelian. Tujuannya adalah memastikan penataan rak, alur kasir, dan kapasitas toko terencana tepat sebelum Anda memutuskan memesan.',
  },
  {
    id: 'faq-2',
    question: 'Apa syarat untuk mendapatkan fasilitas Free Ongkir Jawa & Bali?',
    answer:
      'Fasilitas Free Ongkir berlaku untuk pemesanan paket setup toko ritel dengan tujuan pengiriman di seluruh wilayah Pulau Jawa dan Pulau Bali menggunakan armada pengiriman pabrik.',
  },
  {
    id: 'faq-3',
    question: 'Wilayah mana saja yang mendapatkan fasilitas Free Perakitan langsung di lokasi toko?',
    answer:
      'Layanan gratis perakitan langsung oleh teknisi mencakup wilayah Jawa Timur (Jatim), Jawa Tengah (Jateng), dan Daerah Istimewa Yogyakarta (DIY). Untuk wilayah di luar ketiga provinsi tersebut, disertakan buku dan video panduan perakitan sistem knock-down yang mudah dipasang.',
  },
  {
    id: 'faq-4',
    question: 'Apakah ukuran dan warna rak bisa di-custom sesuai kebutuhan ruangan toko saya?',
    answer:
      'Bisa. Sebagai produsen pabrik langsung, kami dapat memproduksi ketinggian tiang, kedalaman ambalan, dan warna tiang atau list rak sesuai dengan konsep interior gerai toko Anda.',
  },
  {
    id: 'faq-5',
    question: 'Apakah melayani pembelian rak dalam jumlah satuan untuk penambahan toko yang sudah berjalan?',
    answer:
      'Ya, kami melayani pemesanan mulai dari 1 unit rak tambahan (misal penambahan rak single atau end gondola) hingga pengadaan paket lengkap ratusan unit untuk proyek jaringan toko.',
  },
  {
    id: 'faq-6',
    question: 'Berapa lama estimasi waktu fabrikasi dan pengiriman pesanan rak?',
    answer:
      'Untuk spesifikasi rak standar yang ready stock di gudang, pengiriman dapat dijadwalkan dalam 1 hingga 3 hari kerja. Untuk pemesanan custom ukuran atau warna khusus, proses fabrikasi memerlukan waktu sekitar 5 hingga 10 hari kerja.',
  },
];
