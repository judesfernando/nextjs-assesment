import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import FeaturedCocktails from './FeaturedCocktails';
import { jest } from '@jest/globals';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () =>
			Promise.resolve({
				drinks: [
					{ idDrink: '123', strDrink: 'Mojito', strDrinkThumb: '/mojito.jpg', strCategory: "Drink" },
				],
			}),
	})
) as jest.Mock;

describe('FeaturedCocktails Component', () => {

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders component with a title and refresh button', async () => {
		await act(async () => {
			render(<FeaturedCocktails count={1} />);
		});
		expect(screen.getByText(/Featured Cocktails/i)).toBeInTheDocument();
		expect(screen.getByText(/refresh/i)).toBeInTheDocument();
	});

	test('refresh button triggers a new fetch', async () => {
		await act(async () => {
			render(<FeaturedCocktails count={1} />);
		});

		await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

		const refreshButton = screen.getByRole('button', { name: /refresh/i });

		await act(async () => {
			fireEvent.click(refreshButton);
		});

		await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
	});
});
