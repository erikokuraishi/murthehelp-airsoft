const products = [
  {
    id: 1,
    name: 'AK-47 Tactical AEG',
    category: 'AEG',
    price: 2500000,
    image: 'https://placehold.co/400x400?text=AK-47',
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
    image: 'https://placehold.co/400x400?text=M4A1',
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
    image: 'https://placehold.co/400x400?text=Glock+17',
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
    image: 'https://placehold.co/400x400?text=VSR-10',
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
    image: 'https://placehold.co/400x400?text=MP5+SD6',
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
    image: 'https://placehold.co/400x400?text=Desert+Eagle',
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