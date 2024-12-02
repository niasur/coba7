import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer'; 

describe('Footer Component', () => {
  it('renders the Footer with the correct text', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();

    expect(screen.getByText(`© ${currentYear} My Portfolio @niaasur. All rights reserved.`)).toBeInTheDocument();
  });

  it('has the correct class for styling', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toHaveClass('bg-gray-800');
    expect(container.firstChild).toHaveClass('text-white');
    expect(container.firstChild).toHaveClass('p-4');
    expect(container.firstChild).toHaveClass('text-center');
  });
});
