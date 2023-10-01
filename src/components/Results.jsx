import Image from "next/image";
import Link from "next/link";
import { BiLike } from "react-icons/bi";
const Card = ({
  movie: {
    id,
    overview,
    original_title,
    release_date,
    vote_count,
    backdrop_path,
    poster_path,
  },
}) => {
  return (
    <div className="overflow-hidden w-[400px] h-[400px]  flex flex-wrap items-center justify-center  p-4 border-[1px]  rounded-2xl  shadow-sm hover:shadow-lg dark:border-gray-200 border-gray-500 shadow-[rgba(0,0,0,.5)]">
      <Link href={`movie/${id}`}>
        <div className="w-full ">
          <Image
            width={285}
            height={220}
            objectFit="contain"
            src={`https://image.tmdb.org/t/p/original/${
              backdrop_path || poster_path
            }`}
            placeholder="blur"
            blurDataURL="/spinner.gif"
            alt="poster"
          />
        </div>
        <div className="mt-5 ">
          <p className="overflow-hidden text-ellipsis">
            {overview.slice(0, 35).trim()}...
          </p>
          <h2 className="font-bold mt-2">{original_title}</h2>
          <div className="w-full flex justify-between items-center mt-5">
            <span>{release_date || "N/A"}</span>
            <div className="flex items-center hover:text-amber-500">
              <BiLike className="mr-1 text-lg" />
              <span>{vote_count || "N/A"}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

function Results({ results }) {
  console.log(results);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8">
        {results.map((item) => (
          <Card key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default Results;
