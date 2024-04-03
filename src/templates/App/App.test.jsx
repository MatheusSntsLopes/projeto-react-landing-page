import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';

describe('<Home/>', () => {
  it('should render', () => {
    renderTheme(<Home />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
