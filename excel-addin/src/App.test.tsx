import { render, screen } from '@testing-library/react'
import App from './App'

test('renders FAT Assistant heading', () => {
  render(<App />)
  expect(screen.getByText('FAT Assistant')).toBeInTheDocument()
  expect(screen.getByLabelText('Action')).toBeInTheDocument()
  expect(screen.getByLabelText('Period')).toBeInTheDocument()
  expect(screen.getByLabelText('Note')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Analyze Selection' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Analyze Active Sheet' })).toBeInTheDocument()
  expect(screen.getByText('Result')).toBeInTheDocument()
})
