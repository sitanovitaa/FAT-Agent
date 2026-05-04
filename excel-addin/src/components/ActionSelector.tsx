import type { FatAction } from '../types/fat'

interface ActionSelectorProps {
  value: FatAction
  onChange: (value: FatAction) => void
}

export function ActionSelector({ value, onChange }: ActionSelectorProps) {
  return (
    <label>
      Action
      <select value={value} onChange={(event) => onChange(event.target.value as FatAction)}>
        <option value="review_journal">Review Journal</option>
        <option value="check_tax">Check Tax</option>
        <option value="draft_commentary">Draft Commentary</option>
      </select>
    </label>
  )
}
