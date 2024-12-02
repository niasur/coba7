import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer'; // Pastikan path ini sesuai dengan lokasi file Footer

describe('Footer Component', () => {
  it('renders the Footer with the correct text', () => {
    render(<Footer />);

    // Dapatkan tahun saat ini
    const currentYear = new Date().getFullYear();

    // Periksa apakah teks footer berisi copyright dengan tahun saat ini
    expect(screen.getByText(`© ${currentYear} My Portfolio @niaasur. All rights reserved.`)).toBeInTheDocument();
  });

  it('has the correct class for styling', () => {
    const { container } = render(<Footer />);

    // Periksa apakah elemen footer memiliki kelas CSS yang sesuai
    expect(container.firstChild).toHaveClass('bg-gray-800');
    expect(container.firstChild).toHaveClass('text-white');
    expect(container.firstChild).toHaveClass('p-4');
    expect(container.firstChild).toHaveClass('text-center');
  });
});