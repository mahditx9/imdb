import NavItem from "./NavItem";

function Navbar() {
  return (
    <div className="flex justify-center gap-8 py-5 bg-amber-200 dark:bg-gray-700">
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
