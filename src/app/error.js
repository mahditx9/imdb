"use client";
function error({ error, reset }) {
  return (
    <div className="w-[40%] mx-auto text-center text-black mt-10 py-8 px-12 bg-white rounded-full shadow-lg shadow-black">
      <p className="font-semibold text-xl">{error.message}</p>
      <button
        className="mt-5 hover:text-amber-600  font-normal border-[1px] border-amber-600 py-1 px-4 rounded-full "
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}

export default error;
