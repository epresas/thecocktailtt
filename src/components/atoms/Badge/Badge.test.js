import Badge from './Badge';
import { render } from '@testing-library/react';

describe('Bagde component', () => { 

  test('should render correctly', () => {
    render(<Badge abv={2.0} />)
    const badge = document.querySelector('.badge')
    expect(badge).toBeInTheDocument()
  })

  test('should be yellow badge', () => {
    render(<Badge abv={2.0} />)
    const badge = document.querySelector('.badge')
    expect(badge).toHaveClass('badge--yellow')
  })

  test('should be orange badge', () => {
    render(<Badge abv={5.5} />)
    const badge = document.querySelector('.badge')
    expect(badge).toHaveClass('badge--orange')
  })

  test('should be red badge', () => {
    render(<Badge abv={11.0} />)
    const badge = document.querySelector('.badge')
    expect(badge).toHaveClass('badge--red')
  })
  
})
