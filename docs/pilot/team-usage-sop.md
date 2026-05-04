# SOP Penggunaan FAT Agent Suite

## Tujuan

SOP ini mengatur cara tim Finance, Accounting, Tax, dan Reporting menggunakan FAT Agent Suite di Codex Desktop secara aman, konsisten, dan efisien.

## Ruang Lingkup

SOP ini berlaku untuk penggunaan agent berikut:
- `fat-coordinator`
- `fat-company-context`
- `fat-finance`
- `fat-accounting`
- `fat-tax`
- `fat-reporting`

## Prinsip Utama

1. Agent adalah alat bantu kerja, bukan pengganti review dan approval manusia.
2. Semua keputusan final tetap menjadi tanggung jawab user, reviewer, atau approver yang ditunjuk perusahaan.
3. Dokumen sumber boleh diberikan langsung di Codex, tetapi hasil reusable tetap harus ditulis ke `fat-workspace`.
4. Output agent diperlakukan sebagai `Draft`, `Review Needed`, atau `Escalate`.
5. Agent tidak boleh dipakai untuk approval, posting jurnal, pembayaran, atau filing pajak otomatis.

## Peran Pengguna

### 1. PIC FAT Agent Suite

Tanggung jawab:
- memastikan skill FAT terpasang di Codex
- menjaga `fat-workspace/` tetap rapi
- mengelola update context dari COA, policy, dan checklist
- menjadi kontak pertama jika tim menemukan output agent yang bermasalah

### 2. User Finance / Accounting / Tax / Reporting

Tanggung jawab:
- menggunakan agent sesuai domain kerja
- memastikan file sumber tersedia, baik lewat attach di Codex, path lokal, atau register ke `imports/`
- mereview output agent sebelum dipakai lebih lanjut
- melakukan eskalasi jika output bertanda `Escalate`

### 3. Reviewer / Supervisor

Tanggung jawab:
- melakukan review final atas output yang akan dipakai resmi
- memutuskan tindakan atas kasus yang membutuhkan judgment tinggi
- memastikan agent tidak dipakai di luar batas SOP

## Kapan Menggunakan Agent

Gunakan FAT Agent Suite untuk:
- tanya jawab SOP atau policy internal
- identifikasi akun atau treatment awal
- review draft jurnal, rekonsiliasi, working paper, atau report
- menyusun action list close
- mengecek blocker dan dependency period close
- membuat draft commentary dan checklist kerja

Jangan gunakan FAT Agent Suite untuk:
- final approval
- posting jurnal ke ERP
- menjalankan pembayaran
- filing pajak
- memberi keputusan final pada area abu-abu tanpa review manusia

## Urutan Penggunaan Standar

### Langkah 1: Mulai dari Coordinator

Semua user disarankan memulai dari `fat-coordinator` jika:
- request belum jelas masuk domain mana
- request terkait monthly close
- request melibatkan lebih dari satu fungsi

Contoh prompt:

```text
Use fat-coordinator. Kita closing bulan ini, step mana yang masih blocked?
```

```text
Use fat-coordinator. Request ini masuk accounting, tax, finance, atau reporting?
```

### Langkah 2: Berikan File Langsung di Codex Jika Perlu

Untuk workflow full di Codex, user boleh:
- melampirkan file langsung di session
- menyebut path file lokal
- menempelkan tabel atau potongan teks

Aturan:
- agent harus membaca file yang diberikan user lebih dulu untuk request tersebut
- agent tidak boleh mengubah file sumber mentah
- agent harus menulis hasil reusable ke `fat-workspace`

### Langkah 3: Lanjut ke Specialist yang Sesuai

Gunakan specialist sesuai kebutuhan:

- `fat-accounting` untuk akun, jurnal, accrual, prepaid, rekonsiliasi, close adjustment
- `fat-tax` untuk PPN, withholding, treatment pajak, support pajak, working paper
- `fat-finance` untuk payment review, cashflow, AP/AR follow-up, budget monitoring
- `fat-reporting` untuk variance commentary, consistency check, report summary

### Langkah 4: Review Output

Setelah agent memberi output, user wajib memeriksa:
- file yang dibaca agent
- asumsi yang dipakai
- evidence yang masih kurang
- label hasil: `Pass`, `Review Needed`, atau `Escalate`

### Langkah 5: Simpan atau Tindak Lanjuti

Jika output relevan untuk periode berjalan, simpan di folder yang sesuai di `fat-workspace/periods/YYYY-MM/`.

Jika output membutuhkan tindakan lanjut:
- follow up dokumen yang kurang
- minta review supervisor
- eskalasi ke tax reviewer atau accounting lead

## SOP Pengelolaan Dokumen Sumber

### Aturan

1. Jangan edit file sumber perusahaan secara langsung dari workflow agent.
2. User boleh memberikan file langsung di Codex untuk pekerjaan harian.
3. Untuk source document yang penting dan reusable, simpan salinan read-only ke `fat-workspace/imports/`.
4. Catat source file penting di `manifest.csv`.
5. Gunakan `fat-company-context` untuk menormalisasi file sumber menjadi context markdown.

### Contoh Registrasi File

```bash
zsh /Users/sitanovita/SILIWANGI/fat-agent-suite/scripts/register-readonly-source.sh "/path/COA.xlsx" "/Users/sitanovita/SILIWANGI/fat-agent-suite/fat-workspace/imports/coa" "initial coa import"
```

## SOP Persiapan Bulanan

Sebelum mulai close bulanan:

1. Buat folder periode baru jika belum ada:

```bash
zsh /Users/sitanovita/SILIWANGI/fat-agent-suite/scripts/scaffold-period.sh 2026-05
```

2. Isi `close-status.md` dengan langkah close aktif.
3. Isi `issue-log.md` dengan issue yang diketahui.
4. Pastikan context terbaru sudah tersedia.
5. Mulai monitoring dengan `fat-coordinator`.

## Aturan Keamanan dan Eskalasi

Wajib eskalasi jika:
- policy tidak jelas atau bertentangan
- dokumen support belum lengkap
- tax treatment memiliki area abu-abu
- mapping akun tidak pasti dan berdampak material
- ada permintaan approval, posting, payment, atau filing otomatis

Kalimat standar eskalasi yang boleh dipakai user:
- "Agent memberi label Escalate, mohon review supervisor."
- "Policy belum cukup jelas untuk keputusan final."
- "Dokumen pendukung belum lengkap, perlu follow-up sebelum finalisasi."

## Contoh Prompt per Fungsi

### Accounting

```text
Use fat-accounting. Review draft jurnal accrual expense ini.
```

```text
Use fat-accounting. Read file jurnal yang saya lampirkan, review isinya berdasarkan COA dan accounting policy, lalu simpan hasil review ke folder accounting periode aktif.
```

```text
Use fat-accounting. Transaksi ini masuk akun apa menurut COA kita?
```

### Tax

```text
Use fat-tax. Transaksi ini kena PPN atau tidak menurut policy kita?
```

```text
Use fat-tax. Review working paper pajak ini.
```

```text
Use fat-tax. Read file support yang saya lampirkan, tentukan treatment awal, lalu buat draft review note di folder tax periode aktif.
```

### Finance

```text
Use fat-finance. Review batch pembayaran ini sebelum diproses.
```

```text
Use fat-finance. Read file payment list yang saya lampirkan dan simpan hasil review ke folder finance periode aktif.
```

### Reporting

```text
Use fat-reporting. Bantu bikin commentary variance bulan ini.
```

```text
Use fat-reporting. Read file report dan schedule yang saya lampirkan, lalu buat draft commentary di folder reporting periode aktif.
```

## Checklist Harian Singkat untuk User

- [ ] Saya sudah memilih agent yang tepat.
- [ ] Saya sudah memastikan file sumber tersedia.
- [ ] Saya sudah membaca bagian `Assumptions` dan `Risks`.
- [ ] Saya tidak menggunakan output agent sebagai approval final.
- [ ] Saya melakukan eskalasi jika hasil bertanda `Escalate`.

## Referensi Terkait

- `docs/fat-suite/guardrails.md`
- `docs/fat-suite/routing-rules.md`
- `docs/fat-suite/codex-install.md`
- `docs/pilot/internal-pilot-checklist.md`
- `docs/pilot/codex-ui-smoke-test.md`
