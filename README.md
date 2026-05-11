# Tugas Minggu 9 - Next.js Refinement & Fortification

Project ini adalah lanjutan dari Tugas 8. Desain halaman yang sudah ada tetap dipertahankan; perubahan difokuskan ke keamanan, validasi, URL state, loading, dan optimistic UI.

## Fitur yang Ditambahkan

1. Middleware untuk melindungi route sensitif.
2. Zod Validation pada Server Action.
3. Pencarian marketplace memakai URL sebagai source of truth.
4. Skeleton Loading dengan `loading.jsx`.
5. Optimistic UI pada tombol hapus produk di checkout.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka:

```txt
http://localhost:3000
```

## Cara Menguji Tugas Minggu 9

### 1. Middleware / Proteksi Route

Buka langsung:

```txt
http://localhost:3000/dashboard
```

Jika belum login, halaman akan otomatis diarahkan ke:

```txt
/login?next=/dashboard
```

Route yang dilindungi:

```txt
/dashboard
/marketplace/chat
/marketplace/checkout
```

### 2. Login Demo

Gunakan email valid dan password minimal 6 karakter, contoh:

```txt
email: test@gmail.com
password: 123456
```

Setelah login, aplikasi membuat cookie `demo_session`. Cookie ini dipakai middleware untuk mengizinkan akses ke dashboard, chat, dan checkout.

### 3. Zod Validation

Coba isi form login dengan format email salah atau password terlalu pendek. Form akan menampilkan error.

Coba juga form membership di halaman utama:

```txt
http://localhost:3000
```

Jika nama/email salah, data tidak dikirim dan pesan error muncul di bawah input.

### 4. URL as State untuk Search

Buka:

```txt
http://localhost:3000/marketplace
```

Ketik di search bar marketplace. URL akan berubah menjadi contoh:

```txt
/marketplace?search=kaos
```

Jika halaman di-refresh, keyword pencarian tetap ada di URL dan produk tetap terfilter.

### 5. Optimistic UI

Buka halaman checkout setelah login:

```txt
http://localhost:3000/marketplace/checkout
```

Klik icon tempat sampah pada produk. Produk langsung hilang dari tampilan tanpa menunggu proses server selesai.

### 6. Loading Skeleton

File loading ditambahkan di:

```txt
app/marketplace/loading.jsx
app/dashboard/loading.jsx
```

Skeleton akan muncul saat transisi route/data membutuhkan waktu.

## File Penting yang Diubah/Ditambahkan

```txt
middleware.js
app/login/page.jsx
app/login/LoginForm.jsx
app/member-actions.js
app/components/MemberForm.jsx
app/marketplace/actions.js
app/marketplace/page.jsx
app/marketplace/layout.jsx
app/marketplace/components/MarketplaceHeader.jsx
app/marketplace/checkout/page.jsx
app/marketplace/checkout/CheckoutClient.jsx
app/marketplace/loading.jsx
app/dashboard/page.jsx
app/dashboard/loading.jsx
package.json
package-lock.json
```
