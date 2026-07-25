# Pembagian Tugas & Panduan Git — Murthehelp Airsoft

## 1. Pembagian file (biar nggak tabrakan)

**ORANG 1 — bagian tampilan / halaman katalog**
```
src/App.vue
src/router/index.js
src/main.js
src/assets/main.css
src/components/NavBar.vue
src/components/Footer.vue
src/components/ProductCard.vue
src/components/SearchFilter.vue
src/views/Home.vue
src/views/About.vue
```

**ORANG 2 — bagian data, API, keranjang**
```
src/services/api.js
src/stores/productStore.js
src/stores/cartStore.js
src/views/ProductDetail.vue
src/views/Cart.vue
```

Tiap file di dalam folder ini sudah saya kasih label komentar di baris paling atas,
contoh `TUGAS: ORANG 1` atau `TUGAS: ORANG 2`, jadi tinggal buka file dan cek labelnya.

Karena file yang dikerjakan beda-beda, kalian berdua bisa ngoding **di waktu yang sama**
tanpa takut bentrok (conflict) waktu digabung nanti.

## 2. Langkah git dari nol (ikuti urutan ini persis)

### Setup awal — dikerjakan SATU ORANG SAJA (misal Orang 1)

1. Buat repository baru di github.com (tombol hijau "New")
2. Di laptop, buka folder project ini lewat terminal, lalu:
   ```bash
   git init
   git add .
   git commit -m "struktur awal project"
   git branch -M main
   git remote add origin <link-repo-github-kalian>
   git push -u origin main
   ```
3. Tambahkan Orang 2 sebagai collaborator: buka repo di GitHub → **Settings** →
   **Collaborators** → masukkan username/email Orang 2.

### Orang 2 — ambil project

```bash
git clone <link-repo-github-kalian>
cd airsoft-catalog-blank
npm install
```

### Mulai ngoding (KEDUANYA, kapan saja, di file masing-masing)

Setiap kali mau mulai kerja:
```bash
git pull origin main
```
Ini supaya kamu selalu punya versi terbaru sebelum mulai ngedit.

Setelah selesai ngoding beberapa bagian:
```bash
git add .
git commit -m "isi ProductCard.vue" 
git push origin main
```
Ganti pesan commit sesuai apa yang kamu kerjakan.

> Karena kalian mengerjakan **file yang berbeda**, langsung push ke `main` aman-aman saja,
> tidak perlu branch rumit. Yang penting: sebelum mulai kerja selalu `git pull` dulu, biar
> tidak ketinggalan perubahan dari temanmu.

### Kalau sempat ada bentrok (dua-duanya edit file yang sama)

Kalau muncul tulisan "CONFLICT" saat `git pull`, itu tandanya kalian berdua tidak sengaja
edit file yang sama. Buka file itu, akan ada tanda seperti ini:
```
<<<<<<< HEAD
kode kamu
=======
kode temanmu
>>>>>>> main
```
Pilih/gabungkan kode mana yang mau dipakai, hapus tanda `<<<<<<<`, `=======`, `>>>>>>>`,
lalu:
```bash
git add .
git commit -m "selesai gabung kode"
git push origin main
```

## 3. Ringkasan 4 perintah yang paling sering dipakai

| Perintah | Fungsi |
|---|---|
| `git pull origin main` | Ambil update terbaru dari GitHub |
| `git add .` | Tandai semua perubahan siap disimpan |
| `git commit -m "pesan"` | Simpan perubahan (lokal) |
| `git push origin main` | Upload simpanan ke GitHub |
