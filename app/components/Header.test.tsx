import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('renders header title', () => {
    render(<Header />)
    const titleElement = screen.getByText('restoreportraits.com')
    expect(titleElement).toBeInTheDocument()
  })

  test('renders GitHub link', () => {
    render(<Header />)
    const githubLink = screen.getByLabelText('Github')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/bgwebagency/restoreportraits'
    )
  })

  test('toggles the theme', async () => {
    render(<Header />)
    const moonIcon = screen.getByLabelText('Moon')
    expect(moonIcon).toBeInTheDocument()
    fireEvent.click(moonIcon)
    waitFor(() => expect(screen.getByLabelText('Sun')).toBeInTheDocument())
  })
})
