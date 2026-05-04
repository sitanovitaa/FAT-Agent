import type { OfficeSelectionAdapter, ParsedSelection } from './office.types'
import { readSelection } from './readSelection'

export async function readActiveSheet(adapter: OfficeSelectionAdapter): Promise<ParsedSelection> {
  return readSelection(adapter)
}
