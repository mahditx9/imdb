import Results from "@/components/Results";

async function SearchPage({ params }) {
  const { searchQuery } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchQuery}&language=en-US&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Fetched Failed..");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div className="px-12 py-8">
      {results && results.length === 0 && (
        <h1 className="pt-6 text-center">No Results Found..</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}

export default SearchPage;
