import FeaturedCocktails from "./components/FeaturedCocktails/FeaturedCocktails";

export default function Home() {
  return (
    <main>
		<div className="container mx-auto px-4">
			<div className="max-w-1/2 mx-auto my-8">
				<h1 className="text-2xl mb-2">The history of cocktail culture and its evolution over time</h1>
				<p>The history of the cocktail industry is a long and fascinating one, tracing the evolution of this beloved beverage type from its humble origins to its current status as a vital part of modern culture. The origins of the cocktail can be traced back to the 18th century, when the first reference to the word &quot;cocktail&quot; appeared in print. At this time, the cocktail was a simple mixture of spirits, sugar, water, and bitters, served as a morning pick-me-up for patrons of bars and taverns. </p>
			</div>
				<FeaturedCocktails count={5} />
		</div>
    </main>
  );
}
