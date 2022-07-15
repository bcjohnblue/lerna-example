import {render, screen} from '@testing-library/react';
import Index from './index';
import { debug } from 'jest-preview';

test('renders header', () => {
    render(<Index />);
    const contentText = screen.getByText(/content/i);
    debug();
    expect(contentText).toBeInTheDocument();
});
