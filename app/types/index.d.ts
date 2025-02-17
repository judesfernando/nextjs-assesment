export interface Cocktail {
	idDrink: string;
	strDrink: string;
	strCategory: string;
	strDrinkThumb: string;
}
export interface StateContextType {
	favourites: Cocktail[],
	addItem: (item: Cocktail) => void,
	removeItem: (id: string) => void
}