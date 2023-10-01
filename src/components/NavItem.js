"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
function NavItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`${
          genre && genre === param
            ? "decoration-amber-600 underline underline-offset-8 decoration-4 rounded-lg"
            : ""
        } text-lg font-medium dark:hover:text-amber-500 hover:font-semibold `}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavItem;
