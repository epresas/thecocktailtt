import { render } from '@testing-library/react';
import Rating from './Rating';

describe('Rating component', () => {
  
  test('should render correctly', () => {
    render(<Rating rating={3}/>);
    const ratingEl = document.querySelector('.rating-container');

    expect(ratingEl).toBeInTheDocument();
  })

  test('should the number of stars be equal to the props passed', () => {
    render(<Rating rating={5}/>);
    const stars = document.querySelectorAll('.icon--star');

    expect(stars).toHaveLength(5);
  })
  
})
