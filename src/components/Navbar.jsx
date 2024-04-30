import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-purple-300 text-white">
      <div className="my-container flex justify-between items-center px-4 h-14  py-5 ">
        <div className="logo font-bold text-3xl py-2">
          <span className="text-slate-700">&lt;</span>
          <span>Password</span>
          <span className="text-slate-700">manager&gt;</span>
        </div>
        <ul className="flex gap-4 ">
          <li className="hover:font-bold hover:text-slate-800">
            <a href="#">Home</a>
          </li>
          <li className="hover:font-bold hover:text-slate-800">
            <a href="#">About</a>
          </li>
          <li className="hover:font-bold hover:text-slate-800">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
