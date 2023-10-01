"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    router.push(`/search/${searchQuery}`);
    setSearchQuery("");
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex max-w-6xl mx-auto justify-between items-center sm:px-5"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Keywords..."
        className="w-full h-14 rounded-sm outline-none placeholder-gray-500 bg-transparent flex-1"
      />
      <button
        disabled={!searchQuery}
        type="submit"
        className="text-amber-700 outline-none rounded-sm disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
