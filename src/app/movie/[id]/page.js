import Image from "next/image";
const API_KEY = process.env.API_KEY;
const getMovie = async (movieID) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?language=en-US&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

async function page({ params }) {
  const { id } = params;

  //   const movies = getMovie(id);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`
  );
  const movies = await res.json();

  return (
    <div className="w-full">
      <h1>{id}</h1>
      <div className="p-4 md:top-8 flex flex-col md:flex-row items-center justify-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          width={285}
          height={220}
          objectFit="contain"
          src={`https://image.tmdb.org/t/p/original${
            movies.backdrop_path || movies.poster_path
          }`}
          placeholder="blur"
          blurDataURL="/spinner.gif"
          alt="poster"
          className="rounded-lg"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="">
          <h2 className="text-lg mb-3 font-bold pt-2">
            {movies.title || movies.name}
          </h2>
          <p>
            <span>Overview</span>
            {movies.overview}
          </p>
          <p className="mt-3 font-semibold">
            <span>Date Released : </span>
            {movies.release_date || movies.first_air_date}
          </p>
          <p className="mt-3 font-semibold">
            <span>Rating : </span>
            {movies.vote_count || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
