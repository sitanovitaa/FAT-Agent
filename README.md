# FAT Agent Suite

FAT Agent Suite adalah paket agent dan workspace berbasis file untuk membantu tim Finance, Accounting, Tax, dan Reporting menggunakan Codex Desktop. Fokus utamanya adalah membuat alur kerja yang lebih aman, terstruktur, dan berbasis dokumen perusahaan, bukan sekadar chat bebas.

## Ringkasan

Project ini berisi:

- skill Codex untuk kebutuhan FAT
- workspace bersama untuk context, periode kerja, input, dan output
- template review dan working paper
- sample prompt untuk demo
- dokumentasi pilot dan SOP internal
- MVP Excel Add-in dan backend bridge sebagai jalur integrasi tambahan

## Skill yang Tersedia

- `fat-coordinator`
- `fat-company-context`
- `fat-finance`
- `fat-accounting`
- `fat-tax`
- `fat-reporting`

## Struktur Folder Utama

- `codex-skills/`: skill yang dipasang ke Codex
- `fat-workspace/`: context, periode kerja, imports, dan outputs
- `docs/fat-suite/`: arsitektur, guardrail, dan panduan instalasi
- `docs/pilot/`: SOP, checklist pilot, dan panduan demo
- `sample-prompts/`: contoh prompt awal per agent
- `scripts/`: script instalasi, sinkronisasi, scaffold, dan helper impor
- `excel-addin/`: frontend Excel Add-in MVP
- `fat-bridge/`: backend bridge untuk integrasi provider AI

## Instalasi untuk Codex Desktop

Repository GitHub:

```text
https://github.com/sitanovitaa/FAT-Agent.git
```

### macOS / Linux

Clone repo lalu pilih salah satu mode instalasi berikut.

#### Opsi 1: Symlink

Gunakan opsi ini jika perubahan di repo ingin langsung terbaca di Codex.

```bash
git clone https://github.com/sitanovitaa/FAT-Agent.git ~/fat-agent-suite
zsh ~/fat-agent-suite/scripts/symlink-fat-skills.sh
```

#### Opsi 2: Copy

Gunakan opsi ini jika ingin snapshot yang lebih stabil di `~/.codex/skills`.

```bash
git clone https://github.com/sitanovitaa/FAT-Agent.git ~/fat-agent-suite
zsh ~/fat-agent-suite/scripts/install-fat-skills.sh
```

### Windows

Buka PowerShell lalu pilih salah satu mode instalasi berikut.

#### Opsi 1: Symlink

Gunakan opsi ini jika perubahan di repo ingin langsung terbaca di Codex.

```powershell
git clone https://github.com/sitanovitaa/FAT-Agent.git $HOME\fat-agent-suite
powershell -ExecutionPolicy Bypass -File $HOME\fat-agent-suite\scripts\symlink-fat-skills.ps1
```

Catatan:

- Symlink di Windows bisa memerlukan Developer Mode atau hak administrator.

#### Opsi 2: Copy

Gunakan opsi ini jika ingin snapshot yang lebih stabil di `%USERPROFILE%\.codex\skills`.

```powershell
git clone https://github.com/sitanovitaa/FAT-Agent.git $HOME\fat-agent-suite
powershell -ExecutionPolicy Bypass -File $HOME\fat-agent-suite\scripts\install-fat-skills.ps1
```

## Cara Update Skill

Jika tim menggunakan **Opsi 2: Copy**, perubahan di repository tidak akan otomatis masuk ke Codex. Setelah ada update, skill perlu disalin ulang ke folder Codex.

### macOS / Linux

```bash
cd ~/fat-agent-suite
git pull
zsh ~/fat-agent-suite/scripts/install-fat-skills.sh
```

Atau dalam satu baris:

```bash
cd ~/fat-agent-suite && git pull && zsh ~/fat-agent-suite/scripts/install-fat-skills.sh
```

### Windows

```powershell
cd $HOME\fat-agent-suite
git pull
powershell -ExecutionPolicy Bypass -File $HOME\fat-agent-suite\scripts\install-fat-skills.ps1
```

Intinya:

- `git pull` untuk mengambil versi terbaru dari repo
- `install-fat-skills` untuk menyalin ulang skill terbaru ke folder Codex

## Cara Pakai Singkat

1. Pasang skill ke Codex.
2. Siapkan dokumen inti perusahaan.
3. Bangun context bersama memakai `fat-company-context`.
4. Gunakan `fat-coordinator` untuk tugas yang masih ambigu atau lintas fungsi.
5. Lanjutkan ke agent spesialis untuk review atau analisis yang lebih detail.

## Dokumen Awal yang Disarankan

Untuk hasil paling cepat, mulai dari dokumen berikut:

1. COA
2. Accounting policy
3. Tax policy
4. Closing checklist

Setelah itu gunakan `fat-company-context` untuk membangun file context di `fat-workspace/context/`.

## Contoh Dokumen Demo yang Sudah Tersedia

Repo ini sudah menyertakan file demo yang bisa langsung dipakai:

- `fat-workspace/imports/coa/demo-coa.csv`
- `fat-workspace/imports/checklists/demo-closing-checklist.csv`
- `fat-workspace/imports/policies/accounting/demo-accounting-policy.md`
- `fat-workspace/imports/policies/tax/demo-tax-policy.md`

## Dokumen Penting

- SOP tim: `docs/pilot/team-usage-sop.md`
- Checklist pilot: `docs/pilot/internal-pilot-checklist.md`
- Smoke test Codex UI: `docs/pilot/codex-ui-smoke-test.md`
- Panduan demo sample docs: `docs/pilot/demo-sample-docs.md`
- Panduan instalasi Codex: `docs/fat-suite/codex-install.md`

## Prinsip Keamanan

Suite ini dirancang aman secara default:

- tidak ada approval otomatis
- tidak ada posting otomatis
- tidak boleh membuat angka fiktif
- asumsi harus dinyatakan secara eksplisit
- isu penting harus dieskalasikan
- output kerja yang reusable ditulis ke `fat-workspace`

## Status Excel Add-in

Repo ini juga berisi MVP Excel Add-in dan backend bridge. Saat ini alur Codex-only sudah paling siap dipakai. Integrasi Excel tersedia sebagai jalur pengembangan tambahan.

Dokumen terkait:

- `docs/excel-addin-mvp-dev.md`
- `docs/fat-bridge-env-setup.md`

## Alur Demo yang Disarankan

1. Bangun context dari sample document atau dokumen perusahaan.
2. Tunjukkan review atau analisis dari `fat-accounting` atau `fat-tax`.
3. Gunakan `fat-coordinator` untuk menyusun blocker, next action, atau close status lintas fungsi.

## Tujuan Project

Tujuan FAT Agent Suite adalah membantu tim bekerja lebih cepat tanpa mengorbankan kontrol, review, dan ketertelusuran dokumen.
