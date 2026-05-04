interface PeriodInputProps {
  value: string
  onChange: (value: string) => void
}

export function PeriodInput({ value, onChange }: PeriodInputProps) {
  return (
    <label>
      Period
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="YYYY-MM" />
    </label>
  )
}
