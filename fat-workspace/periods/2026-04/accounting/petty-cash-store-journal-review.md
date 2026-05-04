# Petty Cash Store Journal Review - April 2026

Status: Review Needed
Confidence: Medium
Label: Draft

## Objective

Review the April 2026 petty cash store draft journal for balance, account mapping reasonableness, support sufficiency, risks, and next actions.

## Files Reviewed

- `fat-workspace/context/chart-of-accounts.md`
- `fat-workspace/context/accounting-policy.md`

## Source Files Provided In Session

- `/Users/sitanovita/Downloads/Telegram Desktop/Journal Entry Petty Cash Store_April 2026.xlsx`

## Assessment / Recommendation

The draft journal is mechanically balanced and all account codes used in the workbook exist in the COA. However, it should not be posted yet without review because several store/tag/account mappings are inconsistent and the workbook does not provide underlying petty cash support such as receipts, store recaps, cash counts, reimbursement approvals, or settlement evidence.

Summary:

| Check | Result | Notes |
| --- | --- | --- |
| Journal balance | Pass | 713 journal rows; total debit IDR 40,277,650 and total credit IDR 40,277,650. |
| Transaction-level balance | Pass | 68 transaction numbers reviewed; no imbalanced transaction groups. |
| Account code existence | Pass | 78 unique account codes used; all exist in the COA context. |
| Account mapping | Review Needed | Store cash mappings are mostly plausible, but several rows have store, tag, or cash account mismatch. |
| Support document sufficiency | Review Needed | Journal descriptions are present, but receipt-level and approval support are not included in the workbook. |
| Posting readiness | Review Needed | Clear mapping and support gaps should be resolved before posting. |

## Findings

1. Balance check passes.
   - Total debit: IDR 40,277,650.
   - Total credit: IDR 40,277,650.
   - Difference: IDR 0.
   - No transaction number is out of balance.

2. COA existence check passes.
   - All 78 unique account codes used in the journal exist in `chart-of-accounts.md`.
   - Petty cash accounts generally map to `Kas & Bank`, consistent with COA guidance for petty cash and store cash movements.

3. Store and cash account mismatches need review.
   - Rows 57, 59, 60, 62, 63: transaction uses `Petty Cash RJP`, but account `1-102050` is `Kas Kecil - Store RPJ`. This may be a naming typo, but should be normalized.
   - Row 74: transaction is `Petty Cash RBB`, but description/tag says `RPB`.
   - Rows 100-102: transaction is `Petty Cash PCB`, but description/tag/account indicate `RCB`; row 102 credits `1-102057 Kas Kecil - Store RCB`.
   - Rows 160-161: transaction is `Petty Cash RRC`, but cash account used is `1-102065 Kas Kecil - Store KKB`.
   - Rows 203-204: transaction is `Petty Cash UBB`, but cash account used is `1-102094 Kas Kecil - Store PIM`.
   - Rows 208-209: transaction is `Petty Cash TKC`, but description/tag/account indicate `PPS`; row 209 credits `1-102031 Kas Kecil - Store PPS`.

4. Some account mappings are plausible but need support-based confirmation.
   - `6-101008 Beban Pengiriman Transfer Stok` is used heavily for transfer, Gosend, Gojek, pickup, and stock movement costs. This is generally plausible for transfer stock logistics, but rows using generic delivery or bank pickup descriptions should be checked against the substance.
   - `6-201005 Beban Insentif Karyawan` is used for 88 rows totaling IDR 4,382,500. Mapping is plausible if these are approved staff incentives, but payroll/HR approval support is needed.
   - `6-203006 Beban Pemeliharaan Peralatan Toko` is used for HP/LCD/connector repairs totaling IDR 370,000. Mapping is plausible if the repairs relate to store equipment.
   - `6-101010 Beban Iuran Keamanan dan Kebersihan Toko` is used for sampah/kebersihan/RT items. Mapping is plausible for store security/cleaning dues.

5. Potential mapping risk: galon/water purchases.
   - 45 `Galon` rows totaling IDR 337,000 are mapped to `5-101005 Pembelian - Non BKS`.
   - One `Isi Galon dan Fotocopy` row is mapped to `6-101005 Beban Telepon, Air & Listrik Toko`.
   - Need confirm whether drinking water/galon is intended as COGS, store supplies, or utilities. Current mapping is inconsistent and may overstate HPP if galon is not inventory/COGS.

6. Potential mapping risk: CMB/ANS petty cash reimbursements to receivable account.
   - Rows 107 and 353 use `1-103001 Piutang Dagang - SoBis Program` for `Petty Cash - CMB/ANS - Pengembalian Uang Modal`.
   - This does not read like trade receivable substance from the description. It may be a clearing workaround because no matching petty cash store account was selected, but it needs review before posting.

7. Import-readiness risk from formulas.
   - Raw workbook contains formulas in 696 tag cells, 132 credit cells, and 66 description cells.
   - Cached values are present and were used for this review, but import systems may reject formulas or import formulas as text. Convert formulas to hardcoded values before upload/posting.

## Missing Evidence

- Store petty cash recap per store for April 2026.
- Receipts/invoices for each petty cash expense.
- Cash count or petty cash reconciliation per store.
- Approval for reimbursements, replenishments, and returns of modal.
- Support for transfers between stores or to/from `Kas Transit`.
- HR/payroll approval for incentive rows.
- Evidence for repairs, maintenance, and material one-off expenses.

## Risks

- Misstatement by store if transaction number, tag, and petty cash account refer to different outlets.
- Misclassification between HPP, store expense, utilities, and supplies, especially for galon/water purchases.
- Incorrect receivable balance if petty cash reimbursement is posted to `Piutang Dagang - SoBis Program`.
- Duplicate or unsupported expense if petty cash receipts are not tied to the journal lines.
- Import error or unexpected posting if formulas are not converted to values.
- Cutoff risk for rows describing March periods, for example reimbursements covering March dates, even though journal date is April 2026.

## Need Human Review

- Accounting Lead should resolve store/account mismatches before posting.
- Store finance owner should provide petty cash recaps and receipts.
- Accounting reviewer should confirm whether galon/water belongs to HPP, utilities, or store supplies.
- Accounting reviewer should confirm why CMB/ANS lines use `Piutang Dagang - SoBis Program`.
- Tax review is not obviously triggered from the draft descriptions, but invoices/receipts should still be checked for VAT/WHT indicators if any are material.

## Policy / COA References

- Accounting Policy, Account Mapping: classify every transaction using the approved COA; choose the account whose purpose best matches transaction substance; use `Review Needed` when support or treatment needs follow-up.
- Accounting Policy, Cutoff: recognize expenses and revenue in the period they relate to; use service period as the primary basis when dates differ.
- COA, Kas & Bank: petty cash and store cash movements should reconcile to cash evidence, settlement, or store reports.
- COA, Beban: operating expenses require period and support evidence.
- COA, Harga Pokok Penjualan: HPP should match inventory, purchases, and sales period.

## Next Actions

1. Convert all formula cells in the journal import sheet to hardcoded values.
2. Resolve the store/account mismatches listed in the findings section.
3. Attach or link store petty cash recaps, receipts, approval evidence, and cash reconciliation per store.
4. Confirm the correct mapping for galon/water purchases and update affected rows consistently.
5. Confirm the rationale for using `1-103001 Piutang Dagang - SoBis Program` on CMB/ANS petty cash reimbursement rows.
6. Review March-period reimbursement descriptions for cutoff and ensure April posting is appropriate.
7. Re-run balance and account-code validation after corrections.

## Suggested Output File

- `fat-workspace/periods/2026-04/accounting/petty-cash-store-journal-review.md`
