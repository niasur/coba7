import {createRoot} from 'react-dom/client';
import { StrictMode } from 'react';
import App from '../App';

jest.mock('react-dom/client', () => ({
    createRoot: jest.fn(() => ({
        render: jest.fn(),
    })),
}));

jest.mock('../App', () => ({
    __esModule: true,
    default: () => <div>Mocked App</div>,
}));

describe('Index/Entry File', () => {
    const mockRoot = document.createElement('div');

    beforeEach(() => {
       jest.clearAllMocks();

       mockRoot.id = 'root';
       document.body.appendChild(mockRoot);
    });

    afterEach(() => {
        document.body.removeChild(mockRoot);
    });

    it('renders Ap component inside StrictMode', () => {
        require('../main');

        expect(createRoot).toHaveBeenCalledWith(mockRoot);
        
        const mockRender = (createRoot as jest.Mock).mock.results[0].value.render;
        expect(mockRender).toHaveBeenCalledWith(
            <StrictMode>
                <App />
            </StrictMode>
        );
    })
});