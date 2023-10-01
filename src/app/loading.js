import Image from "next/image";
import React from "react";

function loading() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Image width={200} height={200} src="/spinner.gif" alt="spinner" />
    </div>
  );
}

export default loading;
