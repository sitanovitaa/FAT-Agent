# IN 7889 - 27.02.2026 Journal Structure Review

Status: Review Needed
Confidence: Medium
Label: Draft

## Objective

Analyze the journal structure in `/Users/sitanovita/Downloads/Telegram Desktop/IN 7889 - 27.02.xlsx`, including balance, payment channel grouping, fee/commission visibility, account mapping, risks, next actions, and FAT confirmation questions.

## Files Reviewed

- `fat-workspace/context/chart-of-accounts.md`
- `fat-workspace/context/accounting-policy.md`

## Source Files Provided In Session

- `/Users/sitanovita/Downloads/Telegram Desktop/IN 7889 - 27.02.xlsx`

## Assessment / Recommendation

The journal is balanced and appears to be a settlement/clearing journal into `1-102002 BCA 7889 - CV`. It debits bank receipts and credits channel receivables or clearing accounts. The structure is reasonable if sales, discounts, platform fees, and VAT were already recognized in separate upstream journals or platform/POS postings. It is not sufficient by itself to validate gross sales, marketplace commission, platform deductions, or net settlement because the workbook only shows net bank receipt and receivable clearing lines.

## Balance Check

| Check | Result |
| --- | ---: |
| Data rows reviewed | 112 |
| Transaction numbers | 1 |
| Transaction date | 2026-02-27 |
| Total debit | IDR 1,236,225,394.50 |
| Total credit | IDR 1,236,225,394.50 |
| Difference | IDR 0.00 |
| Blank/missing required fields | None found in data rows |

Note: Excel `max_row` is 167, but rows after row 113 appear blank/formatted. Review used nonblank data rows only.

## Breakdown Per Channel

| Channel | Excel Rows | Current Debit Account(s) | Current Credit Account(s) | Debit | Credit | Initial Read |
| --- | --- | --- | --- | ---: | ---: | --- |
| OVO | 2-18 | `1-102002 BCA 7889 - CV` | `1-103008 Piutang Dagang - Ovo` | 1,456,800 | 1,456,800 | Bank receipt clearing against OVO receivable. |
| EDC BCA Store | 19-71 | `1-102002 BCA 7889 - CV` | `1-103002 Piutang Dagang - EDC BCA` | 21,101,788.50 | 21,101,788.50 | Bank settlement clearing against EDC BCA receivable by store. |
| GoFood | 72-88 | `1-102002 BCA 7889 - CV` | `1-103003 Piutang Dagang - Gofood` but account code has trailing space in workbook | 8,429,716 | 8,429,716 | Marketplace/aggregator net settlement clearing against GoFood receivable. |
| Shopee | 89-97 | `1-102002 BCA 7889 - CV` | `1-103009 Piutang Dagang - Shopee Pay` | 2,824,800 | 2,824,800 | Bank receipt clearing against Shopee/ShopeePay receivable. |
| Qpon | 98-105 | `1-102002 BCA 7889 - CV` | `1-103017 Piutang Dagang - Qpon` | 235,790 | 235,790 | Bank receipt clearing against Qpon receivable. |
| CS / Hotel | 106-111 | `1-102002 BCA 7889 - CV` | `2-104001 Uang Muka Penjualan` | 2,176,500 | 2,176,500 | Customer service/hotel receipts booked as sales advances or customer deposits. Needs support. |
| Pindah Buku / Internal Bank Transfer | 112-113 | `1-102002 BCA 7889 - CV` | `1-101083 Kas Transit` | 1,200,000,000 | 1,200,000,000 | Internal bank transfer into BCA 7889 from transit/other bank. |

## Indikasi Fee / Komisi / Net Settlement

No explicit commission, platform fee, MDR, discount, or platform deduction lines are visible in this workbook. The journal only shows:

- Debit `1-102002 BCA 7889 - CV` for received/settled cash.
- Credit channel receivable accounts such as OVO, EDC BCA, GoFood, Shopee, and Qpon.
- Credit `2-104001 Uang Muka Penjualan` for CS/Hotel receipts.
- Credit `1-101083 Kas Transit` for internal transfer.

This means the workbook likely represents net receipt/settlement clearing, not the full sales economics. If channel statements contain gross sales, commissions, merchant-funded promos, platform-funded promos, delivery subsidy, withholding, or settlement fees, those components are not broken out here.

Specific indications:

- EDC BCA has decimal settlement amounts such as `137,546.50`, `319,094.50`, and total `21,101,788.50`. Decimals can indicate MDR/fee calculations or partial settlement. Need EDC settlement report to confirm whether this is gross card sales or net after MDR.
- GoFood is credited to `Piutang Dagang - Gofood`, but the workbook account code is `1-103003 ` with a trailing space. COA contains `1-103003` without trailing space. This should be cleaned before import/posting.
- GoFood has several rows tagged by store, but rows 74, 75, 80, 81, 85, and 87 have no store tag. Store attribution is incomplete.
- OVO, Shopee, and Qpon rows have no store tags in this file, so store-level reconciliation is not possible from the workbook alone.

## Marketplace / Aggregator Reading Guide

For aggregator channels such as GoFood, the accounting should distinguish these concepts:

1. Gross sales
   - Customer-facing sales value before platform deductions.
   - Usually supported by marketplace order report/POS sales report.
   - Typical accounting consideration: credit sales accounts, and debit marketplace receivable if not yet settled.

2. Platform commission / fee / MDR / deductions
   - Marketplace charges deducted from settlement.
   - Should be recognized as expense or contra revenue based on company policy and contract substance.
   - This file does not show a separate debit for commission/fee.

3. Net receipt
   - Cash actually received in bank after platform deductions.
   - This workbook shows net receipt into `BCA 7889 - CV` and credit to receivable/clearing.

Possible complete flow if gross sales and fees are recorded separately:

| Step | Example Treatment | Purpose |
| --- | --- | --- |
| Sales recognition | Dr `Piutang Dagang - Gofood`; Cr relevant `Penjualan ...`; Cr Output VAT if applicable | Records gross sale and receivable. |
| Fee recognition | Dr platform commission/fee expense or approved contra-revenue account; Cr `Piutang Dagang - Gofood` | Separates aggregator fee from cash receipt. |
| Bank settlement | Dr `BCA 7889 - CV`; Cr `Piutang Dagang - Gofood` | Clears net receipt to bank. |

If the business records sales net of platform fee, gross sales and expense may be understated. FAT should confirm the intended policy and reconcile to platform statements.

## Accounts Used and Accounts to Consider

| Area | Current Account Used | Current Mapping Assessment | Accounts / Treatment to Consider |
| --- | --- | --- | --- |
| Bank receipt | `1-102002 BCA 7889 - CV` | Reasonable for cash received into BCA 7889. | Keep if bank statement confirms receipt into this account. |
| OVO clearing | `1-103008 Piutang Dagang - Ovo` | Reasonable if this clears previously recognized OVO receivable. | Confirm against OVO settlement and AR aging. |
| EDC BCA clearing | `1-103002 Piutang Dagang - EDC BCA` | Reasonable if this clears EDC receivable. | Confirm whether MDR/EDC fee is already booked elsewhere. |
| GoFood clearing | `1-103003 Piutang Dagang - Gofood` | Reasonable in substance, but workbook code has trailing space. | Clean account code; reconcile to GoFood gross/net settlement report. |
| Shopee clearing | `1-103009 Piutang Dagang - Shopee Pay` | Potentially reasonable for ShopeePay settlement, but confirm if this is ShopeeFood or ShopeePay. | If ShopeeFood exists separately in reporting, confirm whether a separate receivable account is needed. |
| Qpon clearing | `1-103017 Piutang Dagang - Qpon` | Reasonable if Qpon receivable was recognized upstream. | Confirm Qpon settlement report and related sales source. |
| CS / Hotel receipts | `2-104001 Uang Muka Penjualan` | Possible if receipts are advances/deposits, not final sales. | If service/sale already delivered, consider revenue/AR clearing instead of advance. Need support. |
| Internal transfer | `1-101083 Kas Transit` | Reasonable if this is transfer from another bank/cash transit into BCA 7889. | Reconcile to source bank and bank statement; ensure no duplicate transfer entry. |
| Platform commission/fee | Not visible | Review Needed. | Consider approved platform fee/commission expense account, bank admin/non-bank fee account, or contra-revenue account depending on policy. Current COA has `6-211008 Biaya Admin Bank`, `6-211009 Biaya Non Bank Lainnya`, and discount sales accounts, but no clearly dedicated aggregator commission account in the reviewed context. |

## Findings

1. Journal balance passes.
   - Total debit equals total credit: IDR 1,236,225,394.50.

2. The journal is primarily a bank settlement clearing entry.
   - `1-102002 BCA 7889 - CV` is debited in 105 rows.
   - The largest component is an internal bank transfer of IDR 1,200,000,000, not marketplace/customer settlement.

3. Channel settlements are summarized by one credit line per receivable account.
   - OVO, EDC BCA, GoFood, Shopee, and Qpon each have multiple bank debit lines and one clearing credit line.

4. Fee/commission/potongan are not visible.
   - No expense, discount, commission, MDR, or platform fee account appears in this workbook.
   - Need source settlement reports to determine whether the amounts are gross or net.

5. GoFood account code has a data hygiene issue.
   - Workbook row 88 uses `1-103003 ` with a trailing space.
   - COA account is `1-103003 Piutang Dagang - Gofood`.

6. Store tags are incomplete for several channels.
   - OVO, Shopee, Qpon, CS/Hotel, and internal transfer have no store tags.
   - GoFood has several rows without store tags.
   - EDC BCA mostly has store tags, but row 31 has no tag.

7. CS/Hotel classification needs confirmation.
   - Rows 106-111 credit `2-104001 Uang Muka Penjualan`.
   - This is appropriate only if those receipts are advances/deposits. If the service/sale is already delivered, revenue or receivable clearing may be more appropriate.

## Missing Evidence

- Bank statement for BCA 7889 on 2026-02-27.
- OVO settlement report.
- EDC BCA settlement/MDR report per store.
- GoFood settlement report showing gross sales, commission, promo/discount, net settlement, and payout date.
- Shopee/ShopeePay or ShopeeFood settlement report.
- Qpon settlement report.
- CS/Hotel invoice, booking, customer billing, or advance/deposit support.
- Source bank evidence for IDR 1,200,000,000 pindah buku.
- Confirmation that sales and channel receivables were recognized before this clearing entry.

## Risks

- Gross sales and platform expenses may be understated if only net settlement is recorded and no separate gross sales/fee entry exists.
- Receivable balances may be incorrectly cleared if channel settlement reports do not tie to the credit totals.
- GoFood import may fail or map incorrectly because account code includes trailing whitespace.
- Store/channel reporting may be incomplete because tags are missing for OVO, Shopee, Qpon, and some GoFood/EDC rows.
- CS/Hotel receipts may be misclassified as `Uang Muka Penjualan` if the performance obligation was already satisfied.
- Internal transfer could be duplicated if the source bank side is posted separately without matching `Kas Transit` clearing.
- Decimal EDC settlement amounts may hide MDR/fee deductions that are not separately recorded.

## Need Human Review

- FAT Accounting should confirm whether this workbook is only a receipt clearing journal or also intended to record sales.
- FAT Accounting and Finance should tie each channel total to platform/bank settlement statements.
- FAT Reporting should confirm whether missing tags are acceptable or need store attribution before posting.
- FAT Tax should review marketplace/aggregator gross sales and VAT treatment if this journal is used as sales evidence.

## Next Actions

1. Clean account code `1-103003 ` to `1-103003` before import/posting.
2. Convert the seven credit formula cells to hardcoded values before upload.
3. Reconcile each channel total to external settlement reports:
   - OVO: IDR 1,456,800.
   - EDC BCA: IDR 21,101,788.50.
   - GoFood: IDR 8,429,716.
   - Shopee: IDR 2,824,800.
   - Qpon: IDR 235,790.
   - CS/Hotel: IDR 2,176,500.
   - Pindah Buku: IDR 1,200,000,000.
4. Confirm whether platform fees, commissions, MDR, discounts, and promo deductions are recorded in separate journals.
5. Add missing store tags where store-level reporting is required.
6. Confirm CS/Hotel receipts are truly advances/deposits before using `2-104001 Uang Muka Penjualan`.
7. Re-run balance and account validation after cleanup and mapping changes.

## Questions for FAT Team

1. Is `IN 7889 - 27.02.2026` intended only as a bank receipt/settlement clearing journal?
2. Where are gross sales, discounts, VAT, marketplace commissions, MDR, and platform fees recorded?
3. For GoFood, do settlement reports provide gross sales, merchant promo, platform commission, withholding, and net payout by store?
4. Should Shopee rows be treated as ShopeePay clearing, ShopeeFood clearing, or another Shopee channel?
5. Are OVO, Shopee, and Qpon required to carry store tags? If yes, which source report provides the store split?
6. Why are CS/Hotel receipts credited to `Uang Muka Penjualan`; are these deposits or already-earned sales?
7. What is the source account for the IDR 1,200,000,000 pindah buku, and has the opposite entry already been posted?
8. Which account should be used for aggregator/platform commission if not already defined in the COA?

## Policy / COA References

- Accounting Policy, Account Mapping: classify every transaction using the approved COA and transaction substance.
- Accounting Policy, Cutoff: use service period as the primary basis when dates differ.
- COA, Kas & Bank: bank, EDC, QRIS, marketplace settlement, and platform receipts should reconcile to bank/platform support.
- COA, Akun Piutang: platform/customer receivables require aging, settlement report, and counterparty support.
- COA, Pendapatan: sales, discounts, and main revenue require invoice, POS, marketplace, or sales report support.

## Suggested Output File

- `fat-workspace/periods/2026-02/accounting/in-7889-2026-02-27-journal-structure-review.md`
