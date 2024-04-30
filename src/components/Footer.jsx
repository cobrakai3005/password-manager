import React from "react";

export default function Footer() {
  return (
    <div className="bg-violet-300 flex flex-col justify-center items-center  fixed bottom-0 w-full">
      <div className="logo font-bold text-3xl py-2">
        <span className="text-slate-700">&lt;</span>
        <span className="text-white">Pass</span>
        <span className="text-slate-700">Op&gt;</span>
      </div>
      <div className="flex items-center text-lg">
        Create with{" "}
        {/* <img src="icons/th.jpg" alt="heart" className=" w-10 mx-2 py-3" /> by */}
        💖 by Himanshu
      </div>
    </div>
  );
}
