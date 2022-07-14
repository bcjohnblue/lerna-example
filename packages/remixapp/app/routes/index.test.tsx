import {render, screen} from '@testing-library/react';
import Index from './index';

test('renders header', () => {
    render(<Index />);
    const contentText = screen.getByText(/content/i);

    expect(contentText).toBeInTheDocument();
});
