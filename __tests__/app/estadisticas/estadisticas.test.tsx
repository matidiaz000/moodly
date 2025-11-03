import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './../../../src/app/estadisticas/page'
 
describe('Estadisticas Page', () => {

  it('renders', () => {
    render(<Page />)
    const banner = screen.getByRole('banner')
    expect(banner).toBeInTheDocument()
  })

})