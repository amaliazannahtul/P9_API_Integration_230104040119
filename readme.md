# Praktikum 9 – Web Service Engineering (API Integration)

## 📌 Identitas Mahasiswa

* **Nama** : Amilia Zannahtul Putria
* **NIM** : 230104040119
* **Mata Kuliah** : Web Service Engineering
* **Praktikum** : Praktikum 9 – API Integration

---

## 📖 Deskripsi Proyek

Proyek ini merupakan implementasi **RESTful API menggunakan Node.js dan Express.js** yang terintegrasi dengan **API eksternal**, yaitu **REST Countries API** dan **OpenWeatherMap API**. Aplikasi ini dibuat untuk memenuhi tugas **Praktikum 9 Web Service Engineering**, dengan menerapkan konsep modularisasi, caching, logging, dan dokumentasi API menggunakan Swagger.

---

## 🎯 Tujuan Praktikum

1. Memahami konsep integrasi API eksternal.
2. Mengimplementasikan REST API dengan Express.js.
3. Menerapkan caching untuk meningkatkan performa.
4. Menggunakan middleware untuk logging dan error handling.
5. Membuat dokumentasi API menggunakan Swagger UI.

---

## 🛠️ Teknologi yang Digunakan

* Node.js
* Express.js
* Axios
* Node Cache
* Morgan
* Swagger UI Express
* Dotenv

---

## 📂 Struktur Folder

```
P9_API_Integration_230104040119/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── utils/
│   └── docs/
├── server.js
├── package.json
├── package-lock.json
├── .env (tidak diupload)
└── README.md
```

---

## 🔑 Konfigurasi Environment

Buat file `.env` di root project dengan format berikut:

```
PORT=3000
WEATHER_API_KEY=API_KEY_OPENWEATHERMAP
```

> ⚠️ File `.env` tidak diupload ke GitHub demi keamanan data sensitif.

---

## ▶️ Cara Menjalankan Aplikasi

1. Clone repository:

```bash
git clone https://github.com/amiliazannahtul/P9_API_Integration_230104040119.git
```

2. Masuk ke folder project:

```bash
cd P9_API_Integration_230104040119
```

3. Install dependencies:

```bash
npm install
```

4. Jalankan server:

```bash
npm start
```

Server akan berjalan di:

```
http://localhost:3000
```

---

## 🔗 Endpoint API

### 🌍 Countries API

* `GET /api/countries`
* `GET /api/countries/region/:region`
* `GET /api/countries/name/:name`

### ☁️ Weather API

* `GET /api/weather?city=NamaKota`

---

## 📄 Dokumentasi API

Swagger UI dapat diakses melalui:

```
http://localhost:3000/docs
```

---

## 🧪 Fitur Tambahan

* **Caching** menggunakan Node Cache untuk mempercepat response.
* **Logging** request menggunakan Morgan.
* **Error Handling** terpusat dengan middleware.

---

## ✅ Status Praktikum

✔️ Struktur project sesuai modul
✔️ Integrasi API eksternal
✔️ Implementasi caching
✔️ Logging & error handling
✔️ Dokumentasi Swagger

---

## 📌 Kesimpulan

Aplikasi REST API ini berhasil mengintegrasikan API eksternal dan menerapkan konsep-konsep utama dalam Web Service Engineering sesuai dengan modul Praktikum 9.

---

📅 **Tahun**: 2025
