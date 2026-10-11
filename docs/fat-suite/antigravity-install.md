# Instalasi FAT untuk Google Antigravity

Jalankan dari root repository dengan Python 3 (macOS, Linux, atau Windows):

```bash
python3 scripts/install-fat-antigravity.py
```

Di Windows, gunakan `py -3` jika `python3` tidak tersedia.

## Target dan lokasi

| Target | Skills | Custom agents |
| --- | --- | --- |
| Antigravity 2.0 | `~/.gemini/config/skills/fat-*` | `~/.gemini/config/agents/fat-*.md` |
| Antigravity IDE | `~/.gemini/config/skills/fat-*` | Tidak dipasang; gunakan skills |
| Project | `<project>/.agents/skills/fat-*` | `<project>/.agents/agents/fat-*.md` untuk 2.0 |

Pilih aplikasi atau project:

```bash
python3 scripts/install-fat-antigravity.py --target antigravity
python3 scripts/install-fat-antigravity.py --target antigravity-ide
python3 scripts/install-fat-antigravity.py --workspace /path/ke/project
```

Untuk project IDE saja, gabungkan `--workspace` dan `--target antigravity-ide`.
Semua skill mempunyai `SKILL.md`, referensi domain, dan salinan referensi bersama
internal; instalasi tidak bergantung pada folder `shared` di luar skill.
Custom agents membaca skill terpasang sebagai sumber instruksi tunggal.

Installer hanya mengganti enam skill/agent FAT yang namanya cocok. Paket lama,
termasuk symlink, dipindahkan ke `fat-install-backups/<timestamp>/` di folder
target. Untuk memulihkan, hapus versi FAT baru yang bersangkutan lalu kembalikan
item backup ke lokasi asal. MCP, skill lain, dan data perusahaan tidak diubah.
Jalankan kembali perintah instalasi sesudah memperbarui repository.

## Penggunaan dan verifikasi

1. Buka project perusahaan yang mempunyai `fat-workspace/`. Instalasi global
   tidak menyalin data perusahaan; repo ini menyediakan workspace demo.
2. Mulai percakapan baru; buka ulang aplikasi bila daftar belum diperbarui.
3. Di Antigravity 2.0 gunakan `/fat-company-context` atau `/fat-coordinator`.
   Periksa custom agents melalui `/agents` sesuai dukungan UI versi terpasang.
   Di IDE, sebutkan nama skill dalam prompt.
4. Coba: “Gunakan fat-coordinator untuk membaca close status April 2026,
   sebutkan sumber, blocker, dan next action. Jangan mengubah file.”
5. Pastikan skill membaca referensi dan workspace yang benar, menyatakan input
   yang belum tersedia, serta tidak mengarang angka atau menyetujui pembayaran.

Validasi installer memastikan file dan jalur referensi tersedia; penemuan agent
serta perilaku model perlu diperiksa dalam sesi Antigravity yang sudah login.

Sumber format: [skills](https://www.antigravity.google/docs/skills?tab=ide)
dan [custom subagents](https://www.antigravity.google/docs/subagents/).
