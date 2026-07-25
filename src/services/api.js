const products = [
  {
    id: 1,
    name: 'AK-47 Tactical AEG',
    category: 'AEG',
    price: 2500000,
    image: 'https://static.wixstatic.com/media/294f00_f6fc3c47aa9542a89c5a610b1e0d33ef~mv2.jpg/v1/fill/w_689,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/294f00_f6fc3c47aa9542a89c5a610b1e0d33ef~mv2.jpg',
    description:
      'Replika AEG (Automatic Electric Gun) dengan desain AK-47, cocok untuk pemain pemula maupun menengah. Body full metal dengan grip kayu sintetis.',
    specifications: {
      berat: '3.2 kg',
      panjang: '87 cm',
      fps: '350-380 FPS',
      material: 'Full Metal + Polymer',
      baterai: 'Li-Po 7.4V',
    },
    stock: 5,
  },
  {
    id: 2,
    name: 'M4A1 Custom AEG',
    category: 'AEG',
    price: 3200000,
    image: 'https://pix.toco.id/resize/w:700,h:700,fit:cover,f:webp,q:85/toco/0f1e4b5b-3516-4681-bd0e-9491c6bd14aa-2343f9b5-bba1-489c-a418-911317394173-942dbb03-6a9a-4c96-8c62-91f175582777.webp?s=bb224313bf05acd9708362c3a02e5a6d539f670f98fdece3daff776fc3557295',
    description:
      'M4A1 dengan rail system serbaguna, mudah dipasangi aksesoris tambahan seperti scope dan foregrip. Pilihan favorit untuk gaya bermain CQB.',
    specifications: {
      berat: '2.9 kg',
      panjang: '82 cm',
      fps: '330-360 FPS',
      material: 'Polymer + Metal Internal',
      baterai: 'Li-Po 7.4V',
    },
    stock: 8,
  },
  {
    id: 3,
    name: 'Glock 17 Gas Blowback',
    category: 'GBB Pistol',
    price: 1450000,
    image: 'https://i0.wp.com/airgunindonesia.com/wp-content/uploads/2025/09/1000048439-1.jpg?w=600&ssl=1',
    description:
      'Pistol gas blowback dengan slide yang bergerak realistis setiap kali ditembakkan. Ringan dan cocok sebagai senjata sekunder.',
    specifications: {
      berat: '0.7 kg',
      panjang: '18 cm',
      fps: '280-310 FPS',
      material: 'Polymer',
      gas: 'Green Gas',
    },
    stock: 12,
  },
  {
    id: 4,
    name: 'VSR-10 Sniper Rifle',
    category: 'Sniper',
    price: 2800000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVytGN1j2x_I_AiWRCXi0t0pt62FmwgUAzMxJOmQy7f0QX-pO63bucyWz&s=10',
    description:
      'Sniper bolt-action dengan akurasi tinggi, sering dipakai pemain kompetitif untuk role designated marksman.',
    specifications: {
      berat: '3.5 kg',
      panjang: '110 cm',
      fps: '450-500 FPS',
      material: 'Polymer + Metal Barrel',
      sistem: 'Bolt Action Spring',
    },
    stock: 3,
  },
  {
    id: 5,
    name: 'MP5 SD6 AEG',
    category: 'AEG',
    price: 2950000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPxaJG0HLjaV4A_VLD9DJayqdnO-VsxiwTy0SU4e3ZIorEgVremoqT0w&s=10',
    description:
      'Submachine gun kompak dengan suppressor bawaan, ideal untuk pertempuran jarak dekat di dalam ruangan.',
    specifications: {
      berat: '2.6 kg',
      panjang: '78 cm',
      fps: '320-350 FPS',
      material: 'Full Metal',
      baterai: 'Li-Po 7.4V',
    },
    stock: 6,
  },
  {
    id: 6,
    name: 'Desert Eagle CO2',
    category: 'CO2 Pistol',
    price: 1750000,
    image: 'https://academy.scene7.com/is/image/academy/21640870?$pdp-mobile-gallery-ng$',
    description:
      'Pistol bertenaga CO2 dengan bodi besar dan berat, memberikan sensasi tembakan yang kuat dan konsisten.',
    specifications: {
      berat: '1.1 kg',
      panjang: '27 cm',
      fps: '380-400 FPS',
      material: 'Full Metal',
      gas: 'CO2 Cartridge 12g',
    },
    stock: 4,
  },
  {
    id: 7,
    name: 'M16A4 Full Metal AEG',
    category: 'AEG',
    price: 3450000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLpCWuZ9_2C2sS5vfck4b-GP5gReP3WAGq10mjk4PzolT_yqkEHHRWig&s=10',
    description:
      'Varian M16 dengan laras panjang, cocok untuk role marksman jarak menengah-jauh dengan body full metal.',
    specifications: {
      berat: '3.4 kg',
      panjang: '98 cm',
      fps: '360-390 FPS',
      material: 'Full Metal',
      baterai: 'Li-Po 7.4V',
    },
    stock: 5,
  },
  {
    id: 8,
    name: 'USP Tactical GBB',
    category: 'GBB Pistol',
    price: 1600000,
    image: 'https://i.ytimg.com/vi/edrq58Q3mWs/maxresdefault.jpg',
    description:
      'Pistol gas blowback dengan threaded barrel, bisa dipasangi suppressor tambahan untuk gaya tactical.',
    specifications: {
      berat: '0.8 kg',
      panjang: '20 cm',
      fps: '290-320 FPS',
      material: 'Polymer + Metal Slide',
      gas: 'Green Gas',
    },
    stock: 10,
  },
  {
    id: 9,
    name: 'SCAR-L AEG',
    category: 'AEG',
    price: 3600000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMwhj9SMhFk6QDLLzp6qAiZ416n_NBzKhpoCBcyscN8tuTbbNFN8xG7Y&s=10',
    description:
      'Replika SCAR dengan folding stock dan rail system penuh, populer untuk gaya bermain modern warfare.',
    specifications: {
      berat: '3.1 kg',
      panjang: '85 cm',
      fps: '340-370 FPS',
      material: 'Polymer + Metal Internal',
      baterai: 'Li-Po 7.4V',
    },
    stock: 4,
  },
  {
    id: 10,
    name: 'Remington 870 Shotgun',
    category: 'Shotgun',
    price: 2200000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejBCpe4SDxq0lumZGEWmj4ha87YgTTktsvSXsIbfDy7-1CCAkUGyupTjD&s=10',
    description:
      'Shotgun pump-action spring, menembakkan beberapa BB sekaligus per tarikan, efektif untuk jarak dekat.',
    specifications: {
      berat: '2.8 kg',
      panjang: '95 cm',
      fps: '400-420 FPS',
      material: 'Full Metal + Wood Polymer',
      sistem: 'Pump Action Spring',
    },
    stock: 6,
  },
  {
    id: 11,
    name: 'P90 Compact AEG',
    category: 'AEG',
    price: 3100000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvtPSMsJxkJE5XbyhpZCc_QQ4Qq7FkbFoMML0o03WPZtNxCsgb-HHJL4&s=10',
    description:
      'Submachine gun bullpup dengan magazine horizontal khas, ringkas dan cocok untuk gerakan cepat di CQB.',
    specifications: {
      berat: '2.4 kg',
      panjang: '62 cm',
      fps: '320-350 FPS',
      material: 'Polymer',
      baterai: 'Li-Po 7.4V',
    },
    stock: 7,
  },
  {
    id: 12,
    name: 'Kimber 1911 GBB',
    category: 'GBB Pistol',
    price: 1550000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_QEz7pU0fH4DIlbdazaE8w5aUjA2Ysg1kLc9WSy9mA1YIBYb5JHsE6M&s=10',
    description:
      'Pistol klasik 1911 dengan gas blowback, desain retro dengan rasa tembakan yang kuat untuk ukurannya.',
    specifications: {
      berat: '0.9 kg',
      panjang: '21 cm',
      fps: '300-330 FPS',
      material: 'Full Metal',
      gas: 'Green Gas',
    },
    stock: 9,
  },
]

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchProducts() {
  await delay(500)
  return [...products]
}

async function fetchProductById(id) {
  await delay(500)
  const found = products.find((p) => p.id === Number(id))

  if (!found) {
    throw new Error(`Produk dengan id ${id} tidak ditemukan`)
  }

  return { ...found }
}

export { fetchProducts, fetchProductById }