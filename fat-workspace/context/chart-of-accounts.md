# Chart of Accounts

Status: Draft
Confidence: High
Source: `/Users/sitanovita/Downloads/Telegram Desktop/CV_Boga_Karya_Siliwangi_ChartOfAccounts_2026-03-25.xlsx`
Source sheet: `25-03-2026`
Source date inferred from filename: 2026-03-25
Last updated from source: 2026-05-04

## Usage Notes

- This file is the normalized COA reference for FAT agent use.
- Preserve account numbers and account names exactly as shown in the Excel source.
- The Excel `Total` column is retained as `Source Total`; treat it as source balance/import information, not as a current validated balance unless reconciled to the ledger or trial balance.
- Blank `Deskripsi` and `NamaPajak` fields mean the source file did not provide that detail.
- Use account category, account name, and source evidence together before recommending a mapping.

## Source File Mapping

| Source File | Sheet | Rows Used | Target Context File |
| --- | --- | ---: | --- |
| `/Users/sitanovita/Downloads/Telegram Desktop/CV_Boga_Karya_Siliwangi_ChartOfAccounts_2026-03-25.xlsx` | `25-03-2026` | 475 | `fat-workspace/context/chart-of-accounts.md` |

## Category Summary

| Category No. | Category Name | Top-Level Type | Account Count | Source Total | Operating Rule |
| --- | --- | --- | ---: | ---: | --- |
| 3 | Kas & Bank | Asset | 182 | 207,979,929.01 | Gunakan untuk kas, kas toko, kas transit, bank operasional, dan akun pembayaran digital. Rekonsiliasi rutin ke kas fisik, mutasi bank, settlement EDC/e-wallet/marketplace, atau laporan platform. |
| 1 | Akun Piutang | Asset | 22 | -1,140,600,330.91 | Gunakan untuk piutang dagang dan piutang pihak terkait/platform. Cocokkan ke aging piutang, invoice, settlement, dan bukti pembayaran. |
| 4 | Persediaan | Asset | 9 | 1,200,657,339.62 | Gunakan untuk persediaan bahan baku, produk, konsinyasi, dan persediaan toko. Cocokkan ke kartu stok, opname, dan rekonsiliasi persediaan. |
| 2 | Aktiva Lancar Lainnya | Asset | 15 | 5,717,379,980.71 | Gunakan untuk pembayaran dimuka, uang muka, PPN Masukan, dan aset lancar lain yang belum menjadi beban. Perlu jadwal amortisasi atau bukti realisasi. |
| 5 | Aktiva Tetap | Asset | 10 | 2,291,065,159 | Gunakan untuk aset tetap bruto. Perlu dokumen pembelian, register aset, lokasi, tanggal perolehan, dan kebijakan kapitalisasi. |
| 7 | Depresiasi & Amortisasi | Asset | 9 | -506,471,636.75 | Gunakan untuk akumulasi penyusutan atau amortisasi. Cocokkan ke register aset dan perhitungan depresiasi/amortisasi. |
| 6 | Aktiva Lainnya | Asset | 3 | 60,232,540 | Gunakan hanya untuk aset lain yang tidak masuk kategori lancar/tetap biasa. Review klasifikasi sebelum posting final. |
| 8 | Akun Hutang | Liability | 3 | -3,836,252,327 | Gunakan untuk hutang dagang, hutang belum ditagih, dan kewajiban vendor. Rekonsiliasi ke aging AP, invoice, dan surat jalan/BAST bila ada. |
| 10 | Kewajiban Lancar Lainnya | Liability | 17 | 291,710,219.54 | Gunakan untuk kewajiban lancar seperti hutang gaji, pajak, PPN, titipan, dan akrual. Perlu rekonsiliasi ke payroll, SPT, faktur pajak, atau schedule akrual. |
| 11 | Kewajiban Jangka Panjang | Liability | 3 | -466,113,293 | Gunakan untuk kewajiban tenor panjang seperti bank, dividen, atau cicilan kendaraan. Perlu kontrak pinjaman, jadwal cicilan, dan konfirmasi saldo. |
| 12 | Ekuitas | Equity | 5 | 1,227,127,439.18 | Gunakan untuk modal, laba ditahan, laba periode berjalan, pengambilan pribadi, dan saldo awal ekuitas. Perubahan ekuitas perlu persetujuan formal. |
| 13 | Pendapatan | Revenue | 30 | 54,375,404,113.88 | Gunakan untuk penjualan produk, ongkir, komisi, dan pendapatan operasional sesuai kanal/produk. Cocokkan ke invoice, POS, marketplace, atau laporan penjualan. |
| 15 | Harga Pokok Penjualan | COGS / Harga Pokok Penjualan | 41 | 28,874,647,904.22 | Gunakan untuk pembelian, retur, diskon, beban angkut pembelian, penyesuaian persediaan, dan HPP. Cocokkan ke persediaan, pembelian, dan laporan produksi/penjualan. |
| 16 | Beban | Expense / Beban Operasional | 106 | 31,448,563,639.04 | Gunakan untuk beban operasional penjualan, produksi, umum, payroll, sewa, utilitas, marketing, dan administrasi. Pastikan periode beban dan bukti pendukung lengkap. |
| 14 | Pendapatan Lainnya | Other Income / Pendapatan Lainnya | 7 | 75,507,695.86 | Gunakan untuk pendapatan non-operasional seperti bunga, jasa giro, laba aset, atau koreksi. Review agar tidak bercampur dengan pendapatan utama. |
| 17 | Beban Lainnya | Other Expense / Beban Lainnya | 13 | 2,000,300,724.26 | Gunakan untuk biaya non-operasional, biaya bank, rugi aset, pajak bunga, dan koreksi. Review materialitas dan klasifikasi sebelum final. |

## Account Groups

### Kas & Bank

Category No.: 3
Top-level type: Asset
Operating rule: Gunakan untuk kas, kas toko, kas transit, bank operasional, dan akun pembayaran digital. Rekonsiliasi rutin ke kas fisik, mutasi bank, settlement EDC/e-wallet/marketplace, atau laporan platform.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 1-10004 | BCA 4983 - CV |  |  | 348,280,151.34 |
| 1-101001 | Kas - Finance |  |  | -217,570,683 |
| 1-101002 | Kas - Store MNP |  |  | -164,737,000 |
| 1-101003 | Kas - Store PWP |  |  | -212,862,400 |
| 1-101004 | Kas - Store BRP |  |  | -57,426,000 |
| 1-101005 | Kas - Store KPP |  |  | -141,234,500 |
| 1-101006 | Kas - Store PPP |  |  | -78,988,500 |
| 1-101007 | Kas - Store DBL |  |  | -53,061,400 |
| 1-101008 | Kas - Store RSC |  |  | -35,306,500 |
| 1-101009 | Kas - Store PPS |  |  | -103,864,500 |
| 1-101010 | Kas - Store AFS |  |  | -56,831,000 |
| 1-101011 | Kas - Store TBT |  |  | -69,844,000 |
| 1-101012 | Kas - Store TKC |  |  | -69,457,000 |
| 1-101013 | Kas - Store BTS |  |  | -16,764,000 |
| 1-101014 | Kas - Store SCP |  |  | -91,135,000 |
| 1-101015 | Kas - Store PCP |  |  | -90,025,000 |
| 1-101016 | Kas - Store DKJ |  |  | -267,737,330 |
| 1-101017 | Kas - Store PSJ |  |  | -319,731,900 |
| 1-101018 | Kas - Store SSJ |  |  | -23,156,500 |
| 1-101019 | Kas - Store TAJ |  |  | -95,686,500 |
| 1-101020 | Kas - Store SDJ |  |  | -136,704,500 |
| 1-101021 | Kas - Store TPG |  |  | -63,210,000 |
| 1-101022 | Kas - Store PSC |  |  | -114,245,842.72 |
| 1-101023 | Kas - Store CKC |  |  | -126,814,000 |
| 1-101024 | Kas - Store SHC |  |  | -56,337,500 |
| 1-101025 | Kas - Store RBC |  |  | -90,466,500 |
| 1-101026 | Kas - Store MOC |  |  | -64,009,000 |
| 1-101027 | Kas - Store KIB |  |  | -26,403,000 |
| 1-101028 | Kas - Store RPJ |  |  | -47,682,500 |
| 1-101029 | Kas - Store SCB |  |  | -98,088,500 |
| 1-101030 | Kas - Store RBB |  |  | -26,829,500 |
| 1-101031 | Kas - Store SBB |  |  | 4,619,335,478 |
| 1-101032 | Kas - Store TBB |  |  | -70,070,000 |
| 1-101033 | Kas - Store TWC |  |  | -63,954,000 |
| 1-101034 | Kas - Store RPB |  |  | -28,924,000 |
| 1-101035 | Kas - Store RCB |  |  | -78,132,500 |
| 1-101036 | Kas - Store CMB |  |  | 0 |
| 1-101037 | Kas - Store PGB |  |  | -79,897,000 |
| 1-101038 | Kas - Store PCB |  |  | -70,863,500 |
| 1-101039 | Kas - Store CCB |  |  | -54,820,500 |
| 1-101040 | Kas - Store JCB |  |  | -75,257,500 |
| 1-101041 | Kas - Store STB |  |  | -58,184,000 |
| 1-101042 | Kas - Store RLB |  |  | -40,423,000 |
| 1-101043 | Kas - Store MTB |  |  | -125,710,000 |
| 1-101044 | Kas - Store KKB |  |  | -43,181,000 |
| 1-101045 | Kas - Store RRC |  |  | -142,661,900 |
| 1-101046 | Kas - Store JSS |  |  | -189,769,500 |
| 1-101047 | Kas - Store RSS |  |  | -143,990,000 |
| 1-101048 | Kas - Store RCS |  |  | -34,766,500 |
| 1-101049 | Kas - Store HUD |  |  | -82,031,000 |
| 1-101050 | Kas - Store HOS |  |  | -259,796,500 |
| 1-101051 | Kas - Store SPS |  |  | -187,046,500 |
| 1-101052 | Kas - Store STS |  |  | -59,466,411 |
| 1-101053 | Kas - Store BMS |  |  | -54,126,000 |
| 1-101054 | Kas - Store ANS |  |  | -58,215,900 |
| 1-101055 | Kas - Store RSM |  |  | -62,311,000 |
| 1-101056 | Kas - Store TTS |  |  | -124,414,500 |
| 1-101057 | Kas - Store SPP |  |  | -74,895,000 |
| 1-101058 | Kas - Store DUS |  |  | -110,871,360 |
| 1-101059 | Kas - Store KJW |  |  | -66,744,100 |
| 1-101060 | Kas - Store KBS |  |  | -23,473,000 |
| 1-101061 | Kas - Store STY |  |  | -32,424,000 |
| 1-101062 | Kas - Store SLY |  |  | -27,392,000 |
| 1-101063 | Kas - Store SBS |  |  | -38,838,866 |
| 1-101064 | Kas - Store RLS |  |  | -62,747,000 |
| 1-101065 | Kas - Store NRS |  |  | -49,124,062.96 |
| 1-101066 | Kas - Store SGS |  |  | -45,212,500 |
| 1-101067 | Kas - Store PTS |  |  | -113,143,500 |
| 1-101068 | Kas - Store TPS |  |  | -43,256,000 |
| 1-101069 | Kas - Store RWS |  |  | -44,332,964.74 |
| 1-101070 | Kas - Customer Service |  |  | 0 |
| 1-101071 | Kas - Marketing & Hotel |  |  | 35,674,000 |
| 1-101072 | Kas - Event |  |  | 0 |
| 1-101073 | Kas - Motoris Semarang |  |  | -380,000 |
| 1-101074 | Kas - Motoris Yogyakarta |  |  | 15,085,000 |
| 1-101075 | Kas Kecil - Kantor |  |  | 0 |
| 1-101076 | Kas Kecil - Pabrik |  |  | -3,688,000 |
| 1-101077 | Kas Kecil - Driver Bogor |  |  | 240,755,208 |
| 1-101078 | Kas Kecil - Driver Ungaran |  |  | 4,723,000 |
| 1-101079 | Kas Kecil - Driver Tegal |  |  | 4,626,000 |
| 1-101080 | Kas Kecil - Driver Kendal |  |  | 3,575,000 |
| 1-101081 | Kas Kecil - Motoris Semarang |  |  | 139,000 |
| 1-101082 | Kas Kecil - Motoris Yogyakarta |  |  | -29,000 |
| 1-101083 | Kas Transit |  |  | -813,276,009.68 |
| 1-101084 | Kas - Store SMP |  |  | -68,673,008.24 |
| 1-101085 | Kas - Store UBB |  |  | -4,925,500 |
| 1-102001 | BCA 5789 - CV |  |  | 565,987,868.31 |
| 1-102002 | BCA 7889 - CV |  |  | -178,852,485.53 |
| 1-102003 | BCA 7895 - CV |  |  | 36,977,531.32 |
| 1-102004 | BCA 8896 - CV |  |  | -49,214,435.09 |
| 1-102005 | BCA 7197 - CV |  |  | 300,000,000.04 |
| 1-102006 | BCA 4193 - CV |  |  | 39,786,755.21 |
| 1-102007 | BCA 7659 - CV PPS |  |  | 9,189,948.91 |
| 1-102008 | BCA 1221 - CV JSS |  |  | 10,436,099.16 |
| 1-102009 | BCA 1601 - CV MTB |  |  | 29,354,937.22 |
| 1-102010 | BCA 1015 - CV RBC |  |  | 1,601,560.72 |
| 1-102011 | BCA 1023 - CV PSC |  |  | 8,368,961.32 |
| 1-102012 | BCA 1031 - CV CKC |  |  | 10,335,249.98 |
| 1-102013 | BCA 1040 - CV KKB |  |  | 24,942,754.43 |
| 1-102014 | BCA 1066 - CV RRC |  |  | 14,240,873.25 |
| 1-102015 | BCA 1251 - CV SBB |  |  | 7,354,691.69 |
| 1-102016 | BCA 8883 - CV HOS |  |  | 32,106,442.33 |
| 1-102017 | BCA 8875 - CV DKJ |  |  | 5,338,103.49 |
| 1-102018 | Mandiri 3223 - CV |  |  | 8,145,627.78 |
| 1-102019 | Permata 0205 - CV |  |  | 17,256,789 |
| 1-102020 | UOB 1222 - CV |  |  | 16,969,017 |
| 1-102021 | UOB 9292 - CV |  |  | 1,269 |
| 1-102022 | BRI 6301 - CV |  |  | 676,211,101 |
| 1-102023 | BRI 4562 - Faizal |  |  | 55,159,001 |
| 1-102024 | BCA 9245 - Faizal |  |  | 65,145,250.37 |
| 1-102025 | Midtrans |  |  | 127,741,404 |
| 1-102026 | Kas Kecil - Store MNP | Kas & Bank |  | 1,877,900 |
| 1-102027 | Kas Kecil - Store BRP | Kas & Bank |  | -10,719,200 |
| 1-102028 | Kas Kecil - Store KPP | Kas & Bank |  | 235,000 |
| 1-102029 | Kas Kecil - Store DBL | Kas & Bank |  | 932,000 |
| 1-102030 | Kas Kecil - Store RSC | Kas & Bank |  | 1,601,500 |
| 1-102031 | Kas Kecil - Store PPS | Kas & Bank |  | 2,116,500 |
| 1-102032 | Kas Kecil - Store AFS | Kas & Bank |  | 1,451,500 |
| 1-102033 | Kas Kecil - Store TBT | Kas & Bank |  | 1,000,000 |
| 1-102034 | Kas Kecil - Store TKC | Kas & Bank |  | 963,000 |
| 1-102035 | Kas Kecil - Store BTS | Kas & Bank |  | 952,500 |
| 1-102036 | Kas Kecil - Store SCP | Kas & Bank |  | 1,919,200 |
| 1-102037 | Kas Kecil - Store PCP | Kas & Bank |  | -16,604,500 |
| 1-102038 | Kas Kecil - Store DKJ | Kas & Bank |  | -152,000 |
| 1-102039 | Kas Kecil - Store PSJ | Kas & Bank |  | 2,008,000 |
| 1-102040 | Kas Kecil - Store SSJ | Kas & Bank |  | 696,000 |
| 1-102041 | Kas Kecil - Store TAJ | Kas & Bank |  | -17,074,000 |
| 1-102042 | Kas Kecil - Store SDJ | Kas & Bank |  | -19,898,500 |
| 1-102043 | Kas Kecil - Store TPG | Kas & Bank |  | -10,220,000 |
| 1-102044 | Kas Kecil - Store PSC | Kas & Bank |  | 954,200 |
| 1-102045 | Kas Kecil - Store CKC | Kas & Bank |  | 273,700 |
| 1-102046 | Kas Kecil - Store SHC | Kas & Bank |  | 932,200 |
| 1-102047 | Kas Kecil - Store RBC | Kas & Bank |  | 1,967,500 |
| 1-102048 | Kas Kecil - Store MOC | Kas & Bank |  | 905,800 |
| 1-102049 | Kas Kecil - Store KIB | Kas & Bank |  | 1,076,800 |
| 1-102050 | Kas Kecil - Store RPJ | Kas & Bank |  | 1,028,000 |
| 1-102051 | Kas Kecil - Store SCB | Kas & Bank |  | 872,000 |
| 1-102052 | Kas Kecil - Store RBB | Kas & Bank |  | 77,100 |
| 1-102053 | Kas Kecil - Store SBB | Kas & Bank |  | 2,000,000 |
| 1-102054 | Kas Kecil - Store TBB | Kas & Bank |  | 1,979,000 |
| 1-102055 | Kas Kecil - Store TWC | Kas & Bank |  | 1,952,500 |
| 1-102056 | Kas Kecil - Store RPB | Kas & Bank |  | 172,000 |
| 1-102057 | Kas Kecil - Store RCB | Kas & Bank |  | 399,400 |
| 1-102058 | Kas Kecil - Store PGB | Kas & Bank |  | 193,314.10 |
| 1-102059 | Kas Kecil - Store PCB | Kas & Bank |  | 687,500 |
| 1-102060 | Kas Kecil - Store CCB | Kas & Bank |  | 2,022,300 |
| 1-102061 | Kas Kecil - Store JCB | Kas & Bank |  | 245,500 |
| 1-102062 | Kas Kecil - Store STB | Kas & Bank |  | 779,000 |
| 1-102063 | Kas Kecil - Store RLB | Kas & Bank |  | 744,500 |
| 1-102064 | Kas Kecil - Store MTB | Kas & Bank |  | 699,400 |
| 1-102065 | Kas Kecil - Store KKB | Kas & Bank |  | 931,300 |
| 1-102066 | Kas Kecil - Store RRC | Kas & Bank |  | 572,500 |
| 1-102067 | Kas Kecil - Store JSS | Kas & Bank |  | 1,767,500 |
| 1-102068 | Kas Kecil - Store RSS | Kas & Bank |  | 1,803,500 |
| 1-102069 | Kas Kecil - Store RCS | Kas & Bank |  | 135,500 |
| 1-102070 | Kas Kecil - Store HUD | Kas & Bank |  | 1,790,000 |
| 1-102071 | Kas Kecil - Store HOS | Kas & Bank |  | 1,900,000 |
| 1-102072 | Kas Kecil - Store DUS | Kas & Bank |  | 877,000 |
| 1-102073 | Kas Kecil - Store SPS | Kas & Bank |  | 3,964,000 |
| 1-102074 | Kas Kecil - Store STS | Kas & Bank |  | -8,883,500 |
| 1-102075 | Kas Kecil - Store BMS | Kas & Bank |  | 152,000 |
| 1-102076 | Kas Kecil - Store RSM | Kas & Bank |  | 92,000 |
| 1-102077 | Kas Kecil - Store TTS | Kas & Bank |  | -90,000 |
| 1-102078 | Kas Kecil - Store SPP | Kas & Bank |  | 948,000 |
| 1-102079 | Kas Kecil - Store KJW | Kas & Bank |  | 901,000 |
| 1-102080 | Kas Kecil - Store KBS | Kas & Bank |  | 895,000 |
| 1-102081 | Kas Kecil - Store STY | Kas & Bank |  | 946,000 |
| 1-102082 | Kas Kecil - Store SLY | Kas & Bank |  | 932,000 |
| 1-102083 | Kas Kecil - Store SBS | Kas & Bank |  | 310,000 |
| 1-102084 | Kas Kecil - Store RLS | Kas & Bank |  | 533,000 |
| 1-102085 | Kas Kecil - Store NRS | Kas & Bank |  | 735,000 |
| 1-102086 | Kas Kecil - Store SGS | Kas & Bank |  | -6,750,500 |
| 1-102087 | Kas Kecil - Store PTS | Kas & Bank |  | 1,587,000 |
| 1-102088 | Kas Kecil - Store TPS | Kas & Bank |  | 405,000 |
| 1-102089 | Kas Kecil - Store RWS | Kas & Bank |  | 778,500 |
| 1-102090 | Kas Kecil - Store SMP | Kas & Bank |  | -32,500 |
| 1-102091 | Kas Kecil - Store PPP | Kas & Bank |  | 0 |
| 1-102092 | Kas Kecil - Store PWP | Kas & Bank |  | -37,326,000 |
| 1-102093 | Kas - Store PIM |  |  | -3,118,500 |
| 1-102094 | Kas Kecil - Store PIM | Kas & Bank |  | 1,050,500 |
| 1-102095 | Kas Kecil - UBB |  |  | 0 |
| 1-10999 | Mekari Pay Escrow Account | Akun Transaksi Mekari Pay |  | 0 |

### Akun Piutang

Category No.: 1
Top-level type: Asset
Operating rule: Gunakan untuk piutang dagang dan piutang pihak terkait/platform. Cocokkan ke aging piutang, invoice, settlement, dan bukti pembayaran.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 1-103001 | Piutang Dagang - SoBis Program |  |  | 781,742,919 |
| 1-103002 | Piutang Dagang - EDC BCA |  |  | -450,615,332.21 |
| 1-103003 | Piutang Dagang - Gofood |  |  | -1,642,645,942 |
| 1-103004 | Piutang Dagang - Grabfood |  |  | 560,542,520 |
| 1-103005 | Piutang Dagang - Shopeefood |  |  | 1,812,907,327 |
| 1-103006 | Piutang Dagang - Maxim Food |  |  | 71,400 |
| 1-103007 | Piutang Dagang - Gopay |  |  | 1,491,853,070.30 |
| 1-103008 | Piutang Dagang - Ovo |  |  | -674,975,239 |
| 1-103009 | Piutang Dagang - Shopee Pay |  |  | -2,194,960,074 |
| 1-103010 | Piutang Dagang - Dana |  |  | 0 |
| 1-103011 | Piutang Dagang Lainnya |  |  | -134,708,673 |
| 1-103012 | Cadangan Kerugian Piutang |  |  | 0 |
| 1-103013 | Akun Transit |  |  | 0 |
| 1-103014 | Piutang Belum Ditagih |  |  | 0 |
| 1-103015 | Piutang Dagang - EDC Permata | Piutang Dagang - EDC Permata |  | 38,465,584 |
| 1-103016 | Piutang Dagang - EDC BRI | Piutang Dagang - EDC BRI |  | -1,310,277,090 |
| 1-103017 | Piutang Dagang - Qpon |  |  | 4,086,990 |
| 1-104001 | Cash Advance |  |  | -82,370,825 |
| 1-104002 | Piutang Karyawan |  |  | 0 |
| 1-105001 | Piutang Antar Perusahaan |  |  | 0 |
| 1-106001 | Piutang Lain-lain Pihak III |  |  | 657,283,034 |
| 1-107001 | Jaminan Pembayaran (Deposit) |  |  | 3,000,000 |

### Persediaan

Category No.: 4
Top-level type: Asset
Operating rule: Gunakan untuk persediaan bahan baku, produk, konsinyasi, dan persediaan toko. Cocokkan ke kartu stok, opname, dan rekonsiliasi persediaan.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 1-108001 | Persediaan Barang Dagang - Bahan Baku |  |  | 647,867,905.88 |
| 1-108002 | Persediaan Barang Dagang - Siliwangi Klasik MAXI |  |  | -205,109,244.58 |
| 1-108003 | Persediaan Barang Dagang - Siliwangi Klasik MINI |  |  | -17,456,175.38 |
| 1-108004 | Persediaan Barang Dagang - Siliwangi Asih |  |  | -6,835,047.72 |
| 1-108005 | Persediaan Barang Dagang - Siliwangi Dessert Cake |  |  | -971,736.03 |
| 1-108006 | Persediaan Barang Dagang - Mataram Bakpia |  |  | -7,758,376.55 |
| 1-108007 | Persediaan Barang Dagang - Non BKS |  |  | 790,920,014 |
| 1-108008 | Persediaan Barang Dagang - Kemasan Siliwangi |  |  | 0 |
| 1-108009 | Persediaan Barang Dagang - Kemasan Mataram |  |  | 0 |

### Aktiva Lancar Lainnya

Category No.: 2
Top-level type: Asset
Operating rule: Gunakan untuk pembayaran dimuka, uang muka, PPN Masukan, dan aset lancar lain yang belum menjadi beban. Perlu jadwal amortisasi atau bukti realisasi.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 1-109001 | Asuransi Dibayar Dimuka |  |  | 0 |
| 1-109002 | Sewa Dibayar Dimuka |  |  | -320,279,087.52 |
| 1-109003 | Iklan Dibayar Dimuka |  |  | 0 |
| 1-109004 | Sewa Kendaraan Dibayar Dimuka |  |  | 0 |
| 1-109005 | Biaya Dibayar Dimuka Lainnya |  |  | 0 |
| 1-109006 | Pajak Dibayar Dimuka - PPh Psl 25 |  |  | 0 |
| 1-109007 | Pajak Dibayar Dimuka - PPh Psl 23 |  |  | 0 |
| 1-109008 | Pajak Dibayar Dimuka - PPh Psl 22 |  |  | 0 |
| 1-110001 | Uang Muka Pembelian (DP) |  |  | 20,000,000 |
| 1-111001 | PPN Masukan (VAT In) |  |  | 2,450,608,973.80 |
| 1-111002 | PPN Import |  |  | 0 |
| 1-112001 | Perlengkapan Kantor |  |  | 5,307,799 |
| 1-112002 | Perlengkapan Toko |  |  | 341,698,503 |
| 1-112003 | Perlengkapan Pabrik |  |  | 3,208,783,792.43 |
| 1-112004 | Perlengkapan Lainnya |  |  | 11,260,000 |

### Aktiva Tetap

Category No.: 5
Top-level type: Asset
Operating rule: Gunakan untuk aset tetap bruto. Perlu dokumen pembelian, register aset, lokasi, tanggal perolehan, dan kebijakan kapitalisasi.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 1-201001 | Tanah |  |  | 0 |
| 1-201002 | Gedung |  |  | 0 |
| 1-201003 | Kendaraan |  |  | 0 |
| 1-201004 | Mesin Pabrik |  |  | 1,499,680,181 |
| 1-201005 | Mesin - Non Produksi |  |  | 0 |
| 1-201006 | Peralatan Pabrik |  |  | 128,770,016.50 |
| 1-201007 | Peralatan Toko |  |  | 92,443,763 |
| 1-201008 | Peralatan Kantor |  |  | 4,565,366 |
| 1-201009 | Dekorasi & Renovasi |  |  | 565,605,832.50 |
| 1-201010 | Software, Program dan Sistem |  |  | 0 |

### Depresiasi & Amortisasi

Category No.: 7
Top-level type: Asset
Operating rule: Gunakan untuk akumulasi penyusutan atau amortisasi. Cocokkan ke register aset dan perhitungan depresiasi/amortisasi.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 1-202001 | Akumulasi Penyusutan Gedung |  |  | -126,366,052.75 |
| 1-202002 | Akumulasi Penyusutan Kendaraan |  |  | -149,944,104 |
| 1-202003 | Akumulasi Penyusutan Mesin Pabrik |  |  | -27,011,257 |
| 1-202004 | Akumulasi Penyusutan Mesin - Non Produksi |  |  | 0 |
| 1-202005 | Akumulasi Penyusutan Peralatan Pabrik |  |  | -56,374,369 |
| 1-202006 | Akumulasi Penyusutan Peralatan Toko |  |  | -53,322,543 |
| 1-202007 | Akumulasi Penyusutan Peralatan Kantor |  |  | -6,267,060 |
| 1-202008 | Akumulasi Penyusutan Dekorasi & Renovasi |  |  | -87,186,251 |
| 1-202009 | Akumulasi Penyusutan Bangunan Pabrik |  |  | 0 |

### Aktiva Lainnya

Category No.: 6
Top-level type: Asset
Operating rule: Gunakan hanya untuk aset lain yang tidak masuk kategori lancar/tetap biasa. Review klasifikasi sebelum posting final.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 1-300000 | Aset Lain Lain |  |  | 0 |
| 1-300001 | Kas - Boyolali |  |  | 60,232,540 |
| 1-301001 | Aset Tidak Berwujud |  |  | 0 |

### Akun Hutang

Category No.: 8
Top-level type: Liability
Operating rule: Gunakan untuk hutang dagang, hutang belum ditagih, dan kewajiban vendor. Rekonsiliasi ke aging AP, invoice, dan surat jalan/BAST bila ada.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 2-101001 | Hutang Dagang - Bahan Baku |  |  | -4,201,503,123 |
| 2-101002 | Hutang Dagang - Non BKS |  |  | 365,250,796 |
| 2-101003 | Hutang Belum Ditagih |  |  | 0 |

### Kewajiban Lancar Lainnya

Category No.: 10
Top-level type: Liability
Operating rule: Gunakan untuk kewajiban lancar seperti hutang gaji, pajak, PPN, titipan, dan akrual. Perlu rekonsiliasi ke payroll, SPT, faktur pajak, atau schedule akrual.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 2-102001 | Hutang Gaji Kantor |  |  | 15,182,205 |
| 2-102002 | Hutang Gaji Toko |  |  | 3,259,234 |
| 2-102003 | Hutang Gaji Produksi |  |  | 0 |
| 2-103001 | PPN Keluaran |  |  | -187,677,566 |
| 2-103002 | Hutang PPN |  |  | 0 |
| 2-103003 | Hutang Pajak PPh 21 |  |  | -12,764,050 |
| 2-103004 | Hutang Pajak PPh 23 |  |  | -112,982.09 |
| 2-103005 | Hutang Pajak PPh Final |  |  | -9,134,234.97 |
| 2-103006 | Hutang Pajak PPh 25 |  |  | 0 |
| 2-103007 | Hutang Pajak PPh 29 |  |  | 0 |
| 2-104001 | Uang Muka Penjualan |  |  | 464,139,738 |
| 2-105001 | Hutang Lain-lain Pihak III |  |  | -22,243,440.50 |
| 2-106001 | Deposit/Titipan Karyawan |  |  | 0 |
| 2-106002 | Iuran Karyawan |  |  | 0 |
| 2-106003 | Hutang ke Karyawan |  |  | 0 |
| 2-107001 | Pendapatan Diterima Dimuka |  |  | 364,080,272.91 |
| 2-107002 | Beban yang masih harus dibayar |  |  | -323,018,956.81 |

### Kewajiban Jangka Panjang

Category No.: 11
Top-level type: Liability
Operating rule: Gunakan untuk kewajiban tenor panjang seperti bank, dividen, atau cicilan kendaraan. Perlu kontrak pinjaman, jadwal cicilan, dan konfirmasi saldo.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 2-201001 | Hutang Bank |  |  | -16,930,480 |
| 2-202001 | Hutang Dividen |  |  | 0 |
| 2-202002 | Hutang Cicilan Kendaraan |  |  | -449,182,813 |

### Ekuitas

Category No.: 12
Top-level type: Equity
Operating rule: Gunakan untuk modal, laba ditahan, laba periode berjalan, pengambilan pribadi, dan saldo awal ekuitas. Perubahan ekuitas perlu persetujuan formal.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 3-101001 | Modal |  |  | 0 |
| 3-201000 | Laba Ditahan |  |  | 0 |
| 3-202000 | Laba Periode Berjalan |  |  | 0 |
| 3-203000 | Pengambilan Pribadi |  |  | 0 |
| 3-300999 | Ekuitas Saldo Awal |  |  | 1,227,127,439.18 |

### Pendapatan

Category No.: 13
Top-level type: Revenue
Operating rule: Gunakan untuk penjualan produk, ongkir, komisi, dan pendapatan operasional sesuai kanal/produk. Cocokkan ke invoice, POS, marketplace, atau laporan penjualan.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 4-101001 | Penjualan - Siliwangi Klasik MAXI |  |  | 47,669,509,889.81 |
| 4-101002 | Penjualan - Siliwangi Klasik MINI |  |  | 3,046,970,588.78 |
| 4-101003 | Penjualan - Siliwangi Asih |  |  | 360,714,810.13 |
| 4-101004 | Penjualan - Siliwangi Dessert Cake |  |  | 686,300,144.41 |
| 4-101005 | Penjualan - Mataram Bakpia 6 |  |  | 703,652,498.77 |
| 4-101006 | Penjualan - Mataram Bakpia 9 |  |  | 627,016,399.14 |
| 4-101007 | Penjualan - Non BKS |  |  | 4,463,006,578.25 |
| 4-101008 | Penjualan - Kemasan Siliwangi |  |  | 420,357,739.19 |
| 4-101009 | Penjualan - Kemasan Mataram |  |  | 137,240,539.08 |
| 4-101010 | Diskon Penjualan - Siliwangi Klasik MAXI |  |  | -3,259,024,167.86 |
| 4-101011 | Diskon Penjualan - Siliwangi Klasik MINI |  |  | -69,797,973.88 |
| 4-101012 | Diskon Penjualan - Siliwangi Asih |  |  | -8,687,329.68 |
| 4-101013 | Diskon Penjualan - Siliwangi Dessert Cake |  |  | -43,379,303.68 |
| 4-101014 | Diskon Penjualan - Mataram Bakpia 6 |  |  | -37,516,334.67 |
| 4-101015 | Diskon Penjualan - Mataram Bakpia 9 |  |  | -36,700,920.68 |
| 4-101016 | Diskon Penjualan - Non BKS |  |  | -83,621,547.57 |
| 4-101017 | Diskon Penjualan - Kemasan Siliwangi |  |  | -9,750,306.38 |
| 4-101018 | Diskon Penjualan - Kemasan Mataram |  |  | -3,096,530 |
| 4-101019 | Diskon Penjualan - Bundling Promo |  |  | -187,790,659.28 |
| 4-101020 | Retur Penjualan - Siliwangi Klasik MAXI |  |  | 0 |
| 4-101021 | Retur Penjualan - Siliwangi Klasik MINI |  |  | 0 |
| 4-101022 | Retur Penjualan - Siliwangi Asih |  |  | 0 |
| 4-101023 | Retur Penjualan - Siliwangi Dessert Cake |  |  | 0 |
| 4-101024 | Retur Penjualan - Mataram Bakpia 6 |  |  | 0 |
| 4-101025 | Retur Penjualan - Mataram Bakpia 9 |  |  | 0 |
| 4-101026 | Retur Penjualan - Non BKS |  |  | 0 |
| 4-101027 | Retur Penjualan - Kemasan Siliwangi |  |  | 0 |
| 4-101028 | Retur Penjualan - Kemasan Mataram |  |  | 0 |
| 4-102001 | Penyesuaian PPN Keluaran |  |  | 0 |
| 4-102002 | Pendapatan Belum Ditagih |  |  | 0 |

### Harga Pokok Penjualan

Category No.: 15
Top-level type: COGS / Harga Pokok Penjualan
Operating rule: Gunakan untuk pembelian, retur, diskon, beban angkut pembelian, penyesuaian persediaan, dan HPP. Cocokkan ke persediaan, pembelian, dan laporan produksi/penjualan.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 5-101001 | Pembelian - BKS |  |  | 22,067,275,916.52 |
| 5-101002 | Beban Angkut Pembelian - BKS |  |  | 258,000 |
| 5-101003 | Potongan Pembelian - BKS |  |  | -44,972.38 |
| 5-101004 | Retur Pembelian - BKS |  |  | 0 |
| 5-101005 | Pembelian - Non BKS |  |  | 3,680,388,333 |
| 5-101006 | Beban Angkut Pembelian - Non BKS |  |  | 0 |
| 5-101007 | Potongan Pembelian - Non BKS |  |  | 0 |
| 5-101008 | Retur Pembelian - Non BKS |  |  | 0 |
| 5-102001 | Beban Gaji Tenaga Kerja Langsung |  |  | 1,755,927,709 |
| 5-103001 | Beban Tenaga Kerja Tidak Langsung |  |  | 561,024,986 |
| 5-103002 | Beban Perlengkapan Pabrik |  |  | 1,188,937,900.51 |
| 5-103003 | Beban Penyusutan Mesin Pabrik |  |  | 27,011,257 |
| 5-103004 | Beban Penyusutan Peralatan Pabrik |  |  | 56,374,369 |
| 5-103005 | Beban Sewa Pabrik |  |  | 47,499,999 |
| 5-103006 | Beban Listrik dan Air Pabrik |  |  | 185,488,262 |
| 5-103007 | Beban Bahan Bakar - Transportasi |  |  | 13,065,200 |
| 5-103008 | Beban Bahan Bakar - Non Transportasi |  |  | 434,840,999.69 |
| 5-103009 | Beban Penyusutan Gedung Pabrik |  |  | 0 |
| 5-103010 | Beban Produksi Lainnya |  |  | 47,889,618 |
| 5-104001 | Stock Awal Bahan Baku (COGS) |  |  | 1,796,668,807.85 |
| 5-104002 | Stock Akhir Bahan Baku (COGS) |  |  | -2,467,995,573.51 |
| 5-105001 | Stock Awal Persediaan Barang Jadi - Siliwangi Klasik MAXI (COGS) |  |  | 333,106,789.91 |
| 5-105002 | Stock Akhir Persediaan Barang Jadi - Siliwangi Klasik MAXI (COGS) |  |  | -99,868,424.55 |
| 5-105003 | Stock Awal Persediaan Barang Jadi - Siliwangi Klasik MINI (COGS) |  |  | 18,288,424.46 |
| 5-105004 | Stock Akhir Persediaan Barang Jadi - Siliwangi Klasik MINI (COGS) |  |  | -832,249.08 |
| 5-105005 | Stock Awal Persediaan Barang Jadi - Siliwangi Asih (COGS) |  |  | 8,821,624.45 |
| 5-105006 | Stock Akhir Persediaan Barang Jadi - Siliwangi Asih (COGS) |  |  | -1,986,576.73 |
| 5-105007 | Stock Awal Persediaan Barang Jadi - Siliwangi Dessert Cake (COGS) |  |  | 2,979,373.69 |
| 5-105008 | Stock Akhir Persediaan Barang Jadi - Siliwangi Dessert Cake (COGS) |  |  | -2,007,637.66 |
| 5-105009 | Stock Awal Persediaan Barang Jadi - Mataram Bakpia 6 (COGS) |  |  | 9,417,313.52 |
| 5-105010 | Stock Akhir Persediaan Barang Jadi - Mataram Bakpia 6 (COGS) |  |  | -1,658,936.97 |
| 5-105011 | Stock Awal Persediaan Barang Jadi - Mataram Bakpia 9 (COGS) |  |  | 0 |
| 5-105012 | Stock Akhir Persediaan Barang Jadi - Mataram Bakpia 9 (COGS) |  |  | 0 |
| 5-105013 | Stock Awal Persediaan Barang Jadi - Non BKS (COGS) |  |  | 3,932,685,417 |
| 5-105014 | Stock Akhir Persediaan Barang Jadi - Non BKS (COGS) |  |  | -4,723,287,431 |
| 5-105015 | Stock Awal Persediaan Barang Jadi - Kemasan Siliwangi (COGS) |  |  | 0 |
| 5-105016 | Stock Akhir Persediaan Barang Jadi - Kemasan Siliwangi (COGS) |  |  | 0 |
| 5-105017 | Stock Awal Persediaan Barang Jadi - Kemasan Mataram (COGS) |  |  | 0 |
| 5-105018 | Stock Akhir Persediaan Barang Jadi - Kemasan Mataram (COGS) |  |  | 0 |
| 5-201001 | Biaya Penelitian & Pengembangan - Pembelian Bahan & Sample |  |  | 4,379,405.50 |
| 5-201002 | Biaya Penelitian & Pengembangan - Transportasi |  |  | 0 |

### Beban

Category No.: 16
Top-level type: Expense / Beban Operasional
Operating rule: Gunakan untuk beban operasional penjualan, produksi, umum, payroll, sewa, utilitas, marketing, dan administrasi. Pastikan periode beban dan bukti pendukung lengkap.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 6-101000 | Beban Bagian Penjualan |  |  | 7,491,343,549.78 |
| 6-101001 | Beban Gaji Bagian Penjualan |  |  | 3,367,523,115 |
| 6-101002 | Beban Iklan & Promosi |  |  | 28,190,700 |
| 6-101003 | Beban Sewa Toko |  |  | 2,080,275,636.53 |
| 6-101004 | Beban Perlengkapan Toko |  |  | 117,695,416 |
| 6-101005 | Beban Telepon, Air & Listrik Toko |  |  | 755,824,592.25 |
| 6-101006 | Beban Bahan Bakar (Bensin dan Gas) Pengiriman |  |  | 619,199,804 |
| 6-101007 | Beban Parkir, Tol dan Retribusi Pengiriman |  |  | 391,578,500 |
| 6-101008 | Beban Pengiriman Transfer Stok |  |  | 12,849,400 |
| 6-101009 | Beban Entertain Marketing |  |  | 0 |
| 6-101010 | Beban Iuran Keamanan dan Kebersihan Toko |  |  | 56,058,000 |
| 6-101011 | Beban Marketing Lainnya |  |  | 14,871,500 |
| 6-101012 | Beban Bahan Bakar (Bensin dan Gas) Sales |  |  | 22,973,506 |
| 6-101013 | Beban Parkir, Tol dan Retribusi Sales |  |  | 24,303,380 |
| 6-200000 | Beban Administrasi dan Umum |  |  | 3,628,555,523 |
| 6-201000 | Beban Karyawan |  |  | 3,628,555,523 |
| 6-201001 | Beban Gaji Bagian Kantor |  |  | 1,518,049,025 |
| 6-201002 | Beban Lembur Karyawan |  |  | 0 |
| 6-201003 | Beban Bonus Karyawan |  |  | 0 |
| 6-201004 | Beban Jasa Kerja Karyawan |  |  | 13,000,000 |
| 6-201005 | Beban Insentif Karyawan |  |  | 81,573,224 |
| 6-201006 | Beban Tunjangan Jabatan |  |  | 0 |
| 6-201007 | Beban Tunjangan Makan |  |  | 0 |
| 6-201008 | Beban Tunjangan Transportasi |  |  | 0 |
| 6-201009 | Beban Tunjangan Kesehatan Rawat Jalan |  |  | 2,467,199 |
| 6-201010 | Beban Tunjangan Hari Raya |  |  | 1,297,653,916 |
| 6-201011 | Beban Tunjangan Khusus |  |  | 9,500,000 |
| 6-201012 | Beban Tunjangan BPJS |  |  | 335,722,159 |
| 6-201013 | Beban Tunjangan Pajak |  |  | 0 |
| 6-201014 | Beban Pelatihan dan Seminar |  |  | 49,000,000 |
| 6-201015 | Beban Pesangon Karyawan |  |  | 0 |
| 6-201016 | Beban Seragam Karyawan |  |  | 0 |
| 6-201017 | Beban Catering Karyawan |  |  | 321,590,000 |
| 6-201018 | Beban Tunjangan Lainnya |  |  | 0 |
| 6-202000 | Beban Operasional Kantor |  |  | 424,617,598.99 |
| 6-202001 | Beban Rumah Tangga Kantor |  |  | 7,112,806 |
| 6-202002 | Beban Perlengkapan Kantor |  |  | 1,891,006 |
| 6-202003 | Beban Alat Tulis Kantor |  |  | 0 |
| 6-202004 | Beban Cetak Non Brosur |  |  | 455,000 |
| 6-202005 | Beban Materai |  |  | 134,500 |
| 6-202006 | Beban Pengiriman Barang Kantor |  |  | 790,000 |
| 6-202007 | Beban Sewa Kendaraan Kantor |  |  | 0 |
| 6-202008 | Beban Sewa Kantor |  |  | 34,749,999.99 |
| 6-202009 | Beban Telepon, Air & Listrik Kantor |  |  | 18,695,826 |
| 6-202010 | Beban Bahan Bakar (Bensin dan Gas) Kantor |  |  | 7,909,503 |
| 6-202011 | Beban Parkir, Tol, dan Retribusi Kantor |  |  | 5,920,500 |
| 6-202012 | Beban Entertain Kantor |  |  | 0 |
| 6-202013 | Beban Program dan Sistem (Software) |  |  | 141,498,690 |
| 6-202014 | Beban Iuran Keamanan dan Kebersihan Kantor |  |  | 24,400,000 |
| 6-202015 | Beban Langganan |  |  | 0 |
| 6-202016 | Beban Rapat Kantor |  |  | 11,575,100 |
| 6-202017 | Beban Administrasi Kantor |  |  | 0 |
| 6-202018 | Beban Kantor Lainnya |  |  | 169,484,668 |
| 6-203000 | Beban Pemeliharaan |  |  | 264,091,836.50 |
| 6-203001 | Beban Pemeliharaan Gedung |  |  | 13,268,194 |
| 6-203002 | Beban Pemeliharaan Kendaraan |  |  | 153,575,858.50 |
| 6-203003 | Beban Pemeliharaan Mesin Pabrik |  |  | 5,287,017 |
| 6-203004 | Beban Pemeliharaan Mesin Non Produksi |  |  | 0 |
| 6-203005 | Beban Pemeliharaan Peralatan Pabrik |  |  | 27,606,299 |
| 6-203006 | Beban Pemeliharaan Peralatan Toko |  |  | 61,249,468 |
| 6-203007 | Beban Pemeliharaan Peralatan Kantor |  |  | 1,955,000 |
| 6-203008 | Beban Pemeliharaan Peralatan Lainnya |  |  | 1,150,000 |
| 6-204000 | Beban Perjalanan Dinas |  |  | 380,668,637 |
| 6-204001 | Beban Perjalan Dinas - Tiket |  |  | 251,841,465 |
| 6-204002 | Beban Perjalan Dinas - Penginapan |  |  | 14,338,403 |
| 6-204003 | Beban Perjalanan Dinas - Bahan Bakar (Bensin dan Gas) |  |  | 19,941,417 |
| 6-204004 | Beban Perjalanan Dinas - Parkir, Tol, dan Retribusi |  |  | 4,224,240 |
| 6-204005 | Beban Perjalanan Dinas - Transportasi Lokal |  |  | 11,823,298 |
| 6-204006 | Beban Perjalanan Dinas - Entertain |  |  | 151,000 |
| 6-204007 | Beban Perjalanan Dinas - Makan dan Minum |  |  | 62,574,922 |
| 6-204008 | Beban Perjalanan Dinas - Tunjangan |  |  | 0 |
| 6-204009 | Beban Perjalanan Dinas - Lainnya |  |  | 15,773,892 |
| 6-205000 | Beban Asuransi |  |  | 0 |
| 6-205001 | Beban Asuransi Aset |  |  | 0 |
| 6-205002 | Beban Asuransi Kesehatan Karyawan |  |  | 0 |
| 6-206000 | Beban Konsultan |  |  | 110,000,000 |
| 6-206001 | Beban Konsultan - Pajak |  |  | 0 |
| 6-206002 | Beban Konsultan - Audit |  |  | 0 |
| 6-206003 | Beban Konsultan - Manajemen |  |  | 110,000,000 |
| 6-206004 | Beban Konsultan - Legal |  |  | 0 |
| 6-206005 | Beban Konsultan - Lainnya |  |  | 0 |
| 6-207000 | Beban Pajak |  |  | 554,396,838 |
| 6-207001 | Beban PPN |  |  | 398,178,718 |
| 6-207002 | Beban Pajak - PPh Pasal 21 |  |  | 0 |
| 6-207003 | Beban Pajak - PPh Pasal 23 |  |  | 0 |
| 6-207004 | Beban Pajak - PPh Pasal 4 (2) |  |  | 0 |
| 6-207005 | Beban Pajak - PPh Pasal 25 |  |  | 0 |
| 6-207006 | Beban Pajak - PPh Pasal 29 |  |  | 0 |
| 6-207007 | Beban Pajak Bumi dan Bangunan |  |  | 0 |
| 6-207008 | Beban Pajak Iklan dan Reklame |  |  | 14,311,650 |
| 6-207009 | Beban Pajak Lainnya |  |  | 141,906,470 |
| 6-208000 | Beban Penyusutan |  |  | 423,086,010.75 |
| 6-208001 | Beban Penyusutan Gedung |  |  | 126,366,052.75 |
| 6-208002 | Beban Penyusutan Kendaraan |  |  | 149,944,104 |
| 6-208003 | Beban Penyusutan Mesin Non Produksi |  |  | 0 |
| 6-208004 | Beban Penyusutan Peralatan Toko |  |  | 53,322,543 |
| 6-208005 | Beban Penyusutan Peralatan Kantor |  |  | 6,267,060 |
| 6-208006 | Beban Penyusutan Dekorasi & Renovasi |  |  | 87,186,251 |
| 6-208007 | Beban Penyusutan Software, Program dan Sistem |  |  | 0 |
| 6-208008 | Beban Amortisasi Pra Operasi |  |  | 0 |
| 6-208009 | Beban Amortisasi Aset Tidak Berwujud |  |  | 0 |
| 6-209000 | Beban Umum & Administrasi Lainnya |  |  | 633,244,064 |
| 6-209001 | Beban Kegiatan Sosial |  |  | 553,564,600 |
| 6-209002 | Beban Event Perusahaan |  |  | 44,779,464 |
| 6-209003 | Beban Perijinan & Legalitas |  |  | 34,900,000 |
| 6-209999 | Pengeluaran Barang Rusak |  |  | 0 |

### Pendapatan Lainnya

Category No.: 14
Top-level type: Other Income / Pendapatan Lainnya
Operating rule: Gunakan untuk pendapatan non-operasional seperti bunga, jasa giro, laba aset, atau koreksi. Review agar tidak bercampur dengan pendapatan utama.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 6-210001 | Laba Realisasi/Tidak Realisasi Selisih Kurs |  |  | 0 |
| 6-210002 | Laba Penjualan Aset Tetap |  |  | 0 |
| 6-210003 | Koreksi Penilaian Kembali Aset Tetap (Revaluasi) |  |  | 0 |
| 6-210004 | Pendapatan Jasa Giro/Bunga |  |  | 4,392,267.16 |
| 6-210005 | Pendapatan Bunga Deposito |  |  | 0 |
| 6-210006 | Pendapatan Lainnya - Bukan Bank |  |  | 71,115,428.70 |
| 7-70003 | Pembulatan |  |  | 0 |

### Beban Lainnya

Category No.: 17
Top-level type: Other Expense / Beban Lainnya
Operating rule: Gunakan untuk biaya non-operasional, biaya bank, rugi aset, pajak bunga, dan koreksi. Review materialitas dan klasifikasi sebelum final.

| Account Number | Account Name | Description | Tax Name | Source Total |
| --- | --- | --- | --- | ---: |
| 6-211000 | Biaya Lain-lain |  |  | 947,811,818.72 |
| 6-211001 | Rugi Realisasi Selisih Kurs |  |  | 0 |
| 6-211002 | Rugi Penjualan Aset Tetap |  |  | 0 |
| 6-211003 | Rugi Pemusnahan Aset Tetap |  |  | 0 |
| 6-211004 | Biaya Transfer, RTGS, Kliring, Inkaso |  |  | 46,954,000 |
| 6-211005 | Biaya Buku Giro/Cek |  |  | 0 |
| 6-211006 | Biaya Pajak Giro |  |  | 905,725.51 |
| 6-211007 | Biaya Pajak Deposito |  |  | 0 |
| 6-211008 | Biaya Admin Bank |  |  | 899,733,093.21 |
| 6-211009 | Biaya Non Bank Lainnya |  |  | 219,000 |
| 6-212001 | Beban Bunga Bank |  |  | 104,677,086.82 |
| 6-213001 | Pajak Penghasilan (PPh 29) |  |  | 0 |
| 6-213002 | Penyesuaian Persediaan |  |  | 0 |

## Common Mapping Rules

| Transaction Type | Preferred Category / Account Pattern | Evidence Needed | Review Notes |
| --- | --- | --- | --- |
| Kas toko, kas outlet, kas transit, bank, EDC, QRIS, marketplace settlement, atau dompet digital | `Kas & Bank` accounts, especially accounts beginning with `1-10` and named for the store/platform/bank | Mutasi bank, laporan kas, settlement platform, bukti setor/tarik, atau rekonsiliasi kas | Review negative cash balances and platform settlement differences before final conclusion. |
| Piutang customer, platform, karyawan, atau pihak terkait | `Akun Piutang` accounts beginning with `1-103` or named `Piutang ...` | Aging piutang, invoice, settlement report, kontrak/konfirmasi pihak terkait | Escalate balances with unclear counterparty or no aging support. |
| Pembayaran dimuka, uang muka, PPN Masukan, deposit, atau kasbon | `Aktiva Lancar Lainnya` accounts beginning with `1-109`, `1-110`, `1-111`, or `1-104` | Jadwal amortisasi, bukti pembayaran, faktur pajak, invoice, atau settlement uang muka | Review Needed when support period, tax invoice, or reversal schedule is missing. |
| Persediaan bahan baku, produk, konsinyasi, dan outlet | `Persediaan` accounts beginning with `1-108` | Kartu stok, opname, laporan produksi, laporan penjualan, atau rekonsiliasi gudang/outlet | Review negative or unusual inventory balances. |
| Pembelian aset tetap dan akumulasi penyusutan | `Aktiva Tetap` and `Depresiasi & Amortisasi` accounts beginning with `1-201` or `1-202` | Invoice aset, register aset, kebijakan kapitalisasi, tanggal perolehan, metode dan umur manfaat | Review Needed because source does not provide depreciation policy or capitalization threshold. |
| Hutang vendor dan biaya yang belum ditagih | `Akun Hutang` accounts beginning with `2-101` | Invoice vendor, PO, BAST/surat jalan, aging AP, rekonsiliasi supplier | Escalate if vendor statement conflicts with AP aging. |
| Hutang gaji, PPN, pajak, titipan, dan kewajiban lancar lain | `Kewajiban Lancar Lainnya` accounts beginning with `2-102`, `2-103`, or similar | Payroll register, SPT, faktur pajak, bukti potong, schedule akrual, atau rekonsiliasi pajak | Review Needed for all tax and payroll liabilities before filing/payment. |
| Pinjaman, cicilan kendaraan, dividen, atau kewajiban panjang | `Kewajiban Jangka Panjang` accounts beginning with `2-20` | Perjanjian pinjaman/dividen, jadwal cicilan, bukti pembayaran, konfirmasi saldo | Escalate new debt, dividend, or equity-related obligations. |
| Modal, laba ditahan, laba periode berjalan, pengambilan pribadi, dan saldo awal ekuitas | `Ekuitas` accounts beginning with `3-` | Akta/keputusan pemilik, closing entry, trial balance, dan approval formal | Escalate equity movement without approval or closing support. |
| Penjualan produk, ongkir, komisi, dan pendapatan utama | `Pendapatan` accounts beginning with `4-` | Invoice, POS, marketplace report, sales report, contract, dan revenue recognition support | Review Needed when revenue channel/product classification is unclear. |
| Pembelian, retur, diskon, angkut pembelian, penyesuaian persediaan, dan HPP | `Harga Pokok Penjualan` accounts beginning with `5-` | Invoice pembelian, kartu stok, laporan produksi, laporan penjualan, rekonsiliasi persediaan | Match to inventory and sales period before final mapping. |
| Beban operasional, payroll, sewa, utilitas, marketing, administrasi, produksi, dan penyusutan | `Beban` accounts beginning with `6-101`, `6-102`, or `6-201` | Invoice, payroll register, kontrak, bukti pembayaran, schedule amortisasi/depresiasi, dan bukti periode | Accrue if service/benefit was consumed before invoice receipt. |
| Biaya bank, rugi aset, koreksi, pajak bunga, atau biaya non-operasional | `Beban Lainnya` accounts beginning with `6-211` | Bank statement, disposal memo, koreksi journal support, tax support, dan approval | Review material unusual losses or corrections before posting. |

## Review Triggers

- Review Needed: Any account with tax, PPN, PPh, or `NamaPajak` dependency requires tax invoice, SPT, bukti potong, or tax reconciliation support before final use.
- Review Needed: Any prepaid, deposit, uang muka, kasbon, or accrued item requires a schedule, owner, clearing plan, and period support.
- Review Needed: Any fixed asset, depreciation, amortization, or intangible asset account requires asset register support and capitalization/depreciation policy.
- Review Needed: Negative balances in cash, receivable, inventory, or liability categories should be reconciled before being treated as valid operational balances.
- Escalate: Equity, dividend, shareholder, owner withdrawal, bank loan, or long-term debt movements require formal approval and supporting agreements.
- Escalate: Unclear platform settlement, marketplace clearing, or intercompany/related-party balances without counterparty confirmation should not be finalized.

## Known Ambiguities and Gaps

- The source workbook does not provide detailed accounting policies for revenue recognition, capitalization threshold, depreciation method, useful lives, inventory valuation, prepaid amortization, or accrual reversal rules.
- The source workbook has many blank `Deskripsi` and `NamaPajak` fields; missing fields should not be inferred as not applicable.
- The source workbook includes `Total` balances, but it is not a formal trial balance package in this context file. Reconcile totals to ledger/trial balance before using them for reporting.
- The source workbook does not identify inactive accounts, parent-child hierarchy beyond category, normal balance, financial statement line mapping, store master data, or platform settlement rules.
- The file date is inferred from the filename and sheet name. Confirm the official effective date if this COA supersedes another COA version.
