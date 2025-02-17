import { render, screen, act } from '@testing-library/react';
import ItemCard from './ItemCard';

const mockData = { idDrink: '123', strDrink: 'Mojito', strDrinkThumb: '/mojito.jpg', strCategory: "Drink" };

describe("Item Card Component", ()=>{
	test('renders component with image, title and category, no add button', async () => {
		await act(async () => {
			render(<ItemCard data={mockData} />);
		});
        expect(screen.getByRole('heading',{level: 2}));
		expect(screen.getByText(/Mojito/i)).toBeInTheDocument();
		expect(screen.getByText(/Drink/i)).toBeInTheDocument();
        expect(screen.queryByRole('button',{name:/Add/})).not.toBeInTheDocument();
	});

    test('renders component with image, title and category, with add button', async () => {
		await act(async () => {
			render(<ItemCard data={mockData} showAddButton={true} />);
		});
        expect(screen.getByRole('heading',{level: 2}));
		expect(screen.getByText(/Mojito/i)).toBeInTheDocument();
		expect(screen.getByText(/Drink/i)).toBeInTheDocument();
        expect(screen.queryByRole('button',{name:/Add/})).toBeInTheDocument();
	});

})