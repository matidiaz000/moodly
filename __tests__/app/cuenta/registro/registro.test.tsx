import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './../../../../src/app/cuenta/registro/page'
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Registro Page', () => {

  it('renders', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

})