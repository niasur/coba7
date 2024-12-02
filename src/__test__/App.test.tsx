import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App'; // Path diperbaiki

// Mock components for pages and layout
jest.mock('../components/Navbar', () => () => <nav>Mock Navbar</nav>);
jest.mock('../components/Footer', () => () => <footer>Mock Footer</footer>);
jest.mock('../pages/Home', () => () => <div>Home Page</div>);
jest.mock('../pages/About', () => () => <div>About Page</div>);
jest.mock('../pages/Contact', () => () => <div>Contact Page</div>);

describe('App Component', () => {
  it('renders the Navbar and Footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Navbar')).toBeInTheDocument();
    expect(screen.getByText('Mock Footer')).toBeInTheDocument();
  });

  it('renders the Home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('renders the About page when navigating to /about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('About Page')).toBeInTheDocument();
  });

  it('renders the Contact page when navigating to /contact', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Contact Page')).toBeInTheDocument();
  });
});