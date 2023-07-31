# 7eleven

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

---

## Objectives

- Mengerti Cara Menggunakan `If-Else` an `Looping`
- Mengerti Logika `If-Else` dan `Looping`
- Mengerti Cara Menggunakan Operator Evaluasi `===`, `!==`

## Directions

Seorang pengunjung 7eleven direpresentasikan memiliki variable `name`, `age`, dan `money`. Ia masuk ke 7eleven untuk membeli rokok, soda, dan koran, namun 7eleven tersebut memiliki aturan sebagai berikut:

1. Jika name dari si pengunjung kosong, tampilkan di console **"Anda tidak boleh membeli di 7eleven!"** dan program selesai. Jika name tidak kosong, lanjut ke step ke 2

2. Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh membeli `soda dan koran`. Jika age 17 tahun keatas, ia boleh membeli `rokok`, `soda`, dan `koran`. Detail harga sebagai berikut:

   - Rokok: 50,000
   - Soda: 30,000
   - Koran: 10,000

3. Jika money/uang yang dimiliki tidak mencukupi untuk membeli barang apapun, maka tampilkan di console `"Uang tidak cukup. Anda harus pulang.".` Jika uang cukup, tampilkan barang-barang yang bisa dibeli oleh orang tersebut. Penjelasan detail terdapat di step 4

4. Jika money/uang mencukupi untuk membeli beberapa barang, program akan memberikan pilihan terdekat dengan harga yang paling mahal, contoh output yang diharapkan:

```js
Contoh 1:
let age;
let money = 60000;

// output yang diharapkan jika age >= 17
'Anda membeli 1 Rokok dan 1 Koran. Sisa uang yang dimiliki adalah 0'

// output yang diharapkan jika age < 17
'Anda membeli 2 Soda. Sisa uang yang dimiliki adalah 0'

===============================

Contoh 2:
let age;
let money = 100000;

// output yang diharapkan jika age >= 17
'Anda membeli 2 Rokok. Sisa uang yang dimiliki adalah 0'

// output yang diharapkan jika age < 17
'Anda membeli 3 Soda dan 1 Koran. Sisa uang yang dimiliki adalah 0'

===============================

Contoh 3:
let age;
let money = 115000;

// output yang diharapkan jika age >= 17
'Anda membeli 2 Rokok dan 1 Koran. Sisa uang yang dimiliki adalah 5000'

// output yang diharapkan jika age < 17
'Anda membeli 3 Soda dan 2 Koran. Sisa uang yang dimiliki adalah 5000'

Contoh 4:
let money = 45000;

// output yang diharapkan
'Anda membeli 1 Soda dan 1 Koran. Sisa uang yang dimiliki adalah 5000'

Contoh 5:
let money = 9000;

// output yang diharapkan
'Mohon maaf uang yang anda miliki kurang cukup untuk membeli barang apapun!'
```

**NOTED**:

- Jika name kosong: **`"Anda tidak boleh membeli di 7eleven!"`**
- Jika name tidak kosong tetapi age dan money nya kurang dari 0 atau kosong: **`"Invalid Age dan Money!"`**
- Jika name tidak kosong tetapi age atau money nya kurang dari 0 atau kosong: **`"Invalid Age!"`** atau **`"Invalid Money!"`**
