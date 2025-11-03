import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './../../../../src/app/cuenta/ingreso/page'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Ingreso Page', () => {

  /*
  it('renders', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    jest.spyOn(Cookies, 'set'); 
    render(<Page />)
    expect(Cookies.set).toHaveBeenCalledWith('token', 'cookieValue');
    //expect(mockPush).toHaveBeenCalledTimes(1);
    //expect(mockPush).toHaveBeenCalledWith('/details/456');
  })
  */

  it('renders', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    const email = screen.getByRole('textbox', { name: 'Correo electrónico' })
    const password = screen.getByTestId('password')
    expect(heading).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  })

})