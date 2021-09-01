# Selamat Datang di Sistem Informasi Argajaladri

Sebelum memulai partisipasi dalam pengembangan pemrograman di web site ini. Terbih dahulu harus memenuhi role(aturan) yang sudah berlaku.

## Mulai Mengedit
Memulai mengedit silahkan klik [editor on GitHub](https://github.com/Rahman115/argajaladri.or.id) dan Anda akan di arahkan ke halaman situs GitHub.

Pengededitan bisa menggunakan aplikasi pihak ke tiga `Acode` bisa dicari di play store.
- Install `Acode` di playstore
- Selanjutnya, buka aplikasi dan tunggu sampai bisa masuk di halaman script
- Pilih tanda pentung di pojok kanan atas, pilih `GitHub` 
- `GitHub` akan meminta akses `Token` (_Token didapatkan di admin_)
- Setelah masuk di layar `GitHub` silahkan cari `argajaladri.co.id`
- dan lakukan pengeditan di tahap selanjutnya

## A. Pengenalan Folder
- `📁 Model` - berisi file model
- `📁 controller` - berisi function mengeksekusi perintah
- `📁 dash`
- `📁 doc`
- `📁 resources`
- `📁 src` - berisi file - file data
- `📁 vendor`
- `📁 view` - menampilkan hasil
## B. List Edit/Update Data

- [Sebelum melakukan edit file](https://github.com/Rahman115/argajaladri.or.id/blob/master/README.md#c-sebelum-melakukan-edit-file)
- [Menambah atau Merubah Data](https://github.com/Rahman115/argajaladri.or.id/blob/master/README.md#d-menambah-atau-merubah-data)
- [1. Menambah Data Artikel](https://github.com/Rahman115/argajaladri.or.id/blob/master/README.md#1-menambah-data-artikel)
- [2. Menambah Data Anggota](https://github.com/Rahman115/argajaladri.or.id/blob/master/README.md#2-menambah-data-anggota)
- [3. Menambah Data Agenda](https://github.com/Rahman115/argajaladri.or.id/blob/master/README.md#3-menambah-data-agenda)
- [4. Menambah Data Pengurus](https://github.com/Rahman115/argajaladri.or.id/blob/master/README.md#4-menambah-data-pengurus)
- [5. Mengubah Data Tentang](https://github.com/Rahman115/argajaladri.or.id/blob/master/README.md#5-mengubah-data-tentang)
- [6. Mengubah Data Divisi](https://github.com/Rahman115/argajaladri.or.id/blob/master/README.md#4-menambah-data-pengurus)
- [Cara ganti token](https://github.com/Rahman115/argajaladri.or.id/blob/master/README.md#cara-ganti-token-di-acode)


## C. Sebelum melakukan edit file
`argajaladri.or.id` merupakan situs web static yang tidak memiliki Control Admin. Jadi jika ingin melakukan perubahan, maka akan dirubah secara manual.

Dibagian ini ada beberapa hal yang harus diperhatikan sebelum melakukan pengeditan.

🔸Baca petunjuk yang telah diberikan, pastikan anda telah memahami apa yang harus dilakukan.

🔸Mengisi data harus perhatikan tanda `"` _(petik dua)_ , upayakan semua data _String_ atau data teks harus di apit tanda petik du ex. `"data baru"`.

🔸`{}` _Kurung krawal_ biasa digunakan untuk memisahkan data variabel, dan di pisahkan dengan tanda `,` _koma_. Contoh

```
...
{
  id = "AGJ.00.000.XY",
  nama = "Nama Lengkap"
  },
  {
    ...next data
  }
 ...
```

Data diatas menunjukan `id` dan `nama` adalah suatu variabel.

## D. Menambah atau Merubah Data
#### 1. Menambah Data Artikel

Artikel di butuhkan untuk menyampaikan pesan informasi atau berita dan lain-lain. Menambah data ada beberapa tahapan yang harus diperhatikan. 

1. Isi data artikel berupa deskripsi dan gambar. Deskripsi artikel di buat dalam bentuk format file `txt`. Contoh, Kita akan menambahkan data Info Mubes. 
    - Buat file bernama `mubes_xxi.txt`,
    - Isi file tersebut dengan informasi yang ada dan __Save__
    - Upload data `mubes_xxi.txt` yang telah di isi pada Foleder `../src/artikel/` dan
    - Upload gambar `img_mubes_xxi.jpg` di folder `../src/image`
2. Tambah list data artikel, dengan membuka file `../src/artikel.json`, dan tambahkan data untuk memanggil data yang telah di upload tadi.
  ```
  ...
  {
  // Data sebelumnya
    }, {  // Tambah data
        "id": 2,
        "date": "20/08/2021",
        "judul": "Mubes XXI",
        "write": "Penulis 1",
        "Tag": 3,
        "desk": "mubes_xxi.txt",
        "image": "image/img_mubes_xxi.jpg"
    }
  ...

```
Penjelasan Code : `// Data sebelumnya` merupakan data yang sudah ada sebelumnya. `// Tambah data` merupakan data yang akan di tambahkan di file `artikel.json`

Sebaiknya, lakukan _Copy_ dan _Paste_ data `// Tambah data`, code yang akan di tambahkan.
- `"id"` -urutan file / data 
- `"date"` -tanggal saat mengedit
- `"judul"` -judul artikel
- `"write"` -penulis dari artikel
- `"tag"` -belum di buat default 3
- `"desk"` -isikan file yang di upload
- `"image"` -isikan foto yang di upload


3. Selesai

#### 2. Menambah Data Anggota

Data anggota akan menampilkan data informasi seluruh data anggota. Berikut step menambahkan data anggota
1. Buka file `../src/anggota.json` 
2. didalam file `anggota.json` terdapat code yang harus ditambahkan

```
...
  {
    // code lama
  }, {
        "id_anggota": "0",
        "no_induk": "AGJ.00.000.ZZ",
        "angkatan": "-",
        "nama": "-",
        "tgl_lahir": "-",
        "kelamin": "Laki-laki",
        "darah": "-",
        "agama": "Islam",
        "pekerjaan": "-",
        "alamat": "-",
        "hp": "08***",
        "email": "***@gmail.com",
        "photo": "background.png",
        "lapangan": "-"
    },

```
4. Penjelasan code :
    - `}, {` setelah kode lama, ada tanda kurung krawal penutup `}` dan buka `{` pastikan di pisahkan tanda `,`.
    - `"id_anggota"` diisi nomor urut dari anggota, ex. `AGJ.13.211.GB` maka id anggota di isi `"id_anggota": "211",`
    - `"no_induk": "AGJ.00.000.ZZ",` diisi nomor Anggota, ex `"no_induk": "AGJ.13.211.GB",`
    - `"angkatan": "-",` diisi nama angkatan Lihat list angkatan
    - `"nama": "-",` diisi nama asli anggota
    - `"tgl_lahir": "-",`
    - `"kelamin": "Laki-laki",` diisi jenis kelamin `"Laki-laki"` atau `"Perempuan"`
    - `"darah": "-",` diisi golongan darah
    - `"agama": "Islam",` data dominan `"Islam"`
    - `"pekerjaan": "-",` diisi pekerjaan `"Mahasiswa"`, `"Wiraswasta"` atau `"PNS"`
    - `"alamat": "-",`  diisi alamat
    - `"hp": "08***",` diisi nomor handphone yang support WA
    - `"email": "***@gmail.com",` diisi email google, atau yahoo
    - `"photo": "background.png",` diisi photo yang akan di tampilkan default `background.png`, *_belum respond system_
    - `"lapangan": "-"` diisi nama lapangan
    - `}` pastikan setalah nama lapangan ditutup dengan kurung krawal 
5. Setelah diisi bisa di simpan

#### 3. Menambah Data Agenda

1. buka file `../src/agenda.csv`
2. Didalam file `agenda.csv` terdapat code
```
0;0;Pengembaraan Angkatan;Meningkatkan jiwa korsa kepada anggota muda;Desember - Januari
0;1;Pendidikan dasar;Meningkatkan kemampuan dan keterampilan dalam berorganisasi;Februari (Minggu 1 - 2)
...
1;0;Pelatihan;-;-
...
2;0;Pembuatan Kalender Argajaladri;-;-
2;1;Pembuatan PDL dan topi lapangan;-;-
...
3;0;Ruang hijau argajaladri;-;-
3;1;Seminar nasional;-;-
...
4;0;Pembuatan buku materi tingkat lanjut;-;-
4;1;Aplikasi lapangan diving;-;-
...
5;0;Inventaris alat;-;-
5;1;Musyawarah Kerja;-;-
...

```
3. Dalam program terdapat bebrapa code, yang perlu diperhatikan adalah tanda titik koma `;`. Fungsi `;` dimaksudkan untuk memisahkan antar variabel
4. penjelasan variabel pertama 

#### 4. Mengubah Data Pengurus

1. Buka file `../src/pengurus.json`

#### 5. Mengubah Data Tentang

`Belum bisa di ubah`

#### 6. Mengubah Data Divisi

1. Buka folder `../src/divisi/`
2. Didalam Folder `./divisi/` terdapat 5 file `arung.txt`, `gua.txt`, `gunung.txt`, `panjat.txt` dan `renang.txt`
3. Pilih file yang akan di ubah
4. dan Simpan

### Support or Contact

Having trouble with Pages? Check out our [@abuduchoy](https://t.me/AbuduChoy) or [WA @budu](https://wa.me/qr/KBJZXBQM6BWHH1) and we’ll help you sort it out.

### Cara ganti Token di ACODE
1. Buka aplikasi Acode
2. pilih menu `|` di pojok kanan atas, pilih `GitHub`
3. selanjutnya, pilih menu lagi `|` di pojok kanan atas, pilih `Keluar`
4. setelah keluar, lakukan hal yang sama seperti cara 2
5. Masukkan `Token` yang telah di berikan
6. Selesai 
