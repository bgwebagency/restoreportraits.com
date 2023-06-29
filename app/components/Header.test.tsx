import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  test('toggles the theme', () => {
    render(<Header />)
    const moonIcon = screen.getByLabelText('Moon')
    expect(moonIcon).toBeInTheDocument()
    userEvent.click(moonIcon)
    waitFor(() => expect(screen.getByLabelText('Sun')).toBeInTheDocument())
  })
})
