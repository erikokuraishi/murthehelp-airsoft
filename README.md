# Murthehelp Airsoft — Kerangka Project (UAS Desain Web 2)

Ini baru **kerangka/struktur** project Vue 3. Semua file inti (komponen, view, store, service)
masih kosong dan sudah dikasih komentar `TODO` sebagai penanda apa yang perlu diisi. Kode
sepenuhnya belum ditulis — silakan kembangkan sendiri sesuai pembagian tugas kelompok.

## Cara menjalankan

```bash
npm install
npm run dev
```

## Struktur folder

```
src/
├── assets/main.css        # TODO: style global
├── components/
│   ├── NavBar.vue         # TODO
│   ├── Footer.vue         # TODO
│   ├── ProductCard.vue    # TODO
│   └── SearchFilter.vue   # TODO
├── views/
│   ├── Home.vue           # TODO
│   ├── ProductDetail.vue  # TODO
│   ├── Cart.vue           # TODO
│   └── About.vue          # TODO
├── router/index.js        # TODO
├── stores/
│   ├── productStore.js    # TODO
│   └── cartStore.js       # TODO
├── services/api.js        # TODO
├── App.vue                 # TODO
└── main.js                 # TODO
```

## Alur kerja tim (2 orang, 1 repo)

1. **Setup awal (sekali saja):**
   ```bash
   git init
   git add .
   git commit -m "initial commit: struktur project kosong"
   git branch -M main
   git remote add origin <url-repo-kalian>
   git push -u origin main
   ```

2. **Orang kedua clone:**
   ```bash
   git clone <url-repo-kalian>
   cd airsoft-catalog
   npm install
   ```

3. **Kerja di branch masing-masing:**
   ```bash
   git checkout -b fitur/nama-fitur-kamu
   # ... isi kode di file yang jadi tanggung jawab kamu ...
   git add .
   git commit -m "isi komponen X"
   git push origin fitur/nama-fitur-kamu
   ```
   Lalu buka Pull Request ke `main` supaya bisa saling review sebelum digabung.

4. **Sebelum mulai kerja, selalu tarik perubahan terbaru:**
   ```bash
   git checkout main
   git pull origin main
   ```

## Saran pembagian tugas

| Orang 1 | Orang 2 |
|---|---|
| `views/Home.vue`, `components/ProductCard.vue`, `components/SearchFilter.vue` | `views/ProductDetail.vue`, `views/Cart.vue` |
| `router/index.js`, styling global | `stores/`, `services/api.js` |
