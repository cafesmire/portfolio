import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside className={`absolute top-0 left-0 flex flex-col min-h-full w-1/6 text-center p-4 bg-zinc-500 transform-translate duration-300 ${
      sidebarOpen ? "translate-x-0 z-10" : "-translate-x-full"}`}
      style={{visibility: sidebarOpen ? 'visible':'hidden'}}
      >
      <h1 className="border-b-2">Welcome</h1>
      <ul className="basis-50 flex flex-col justify-around text-sm">
        <li>
          <Link to="/about" onClick={() => setSidebarOpen((prev) => !prev)}>
            <h1 className='text-[1.5rem]'>About Me</h1>
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setSidebarOpen((prev) => !prev)}>
            <h1 className='text-[1.5rem]'>Projects</h1>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setSidebarOpen((prev) => !prev)}>
            <h1 className='text-[1.5rem]'>Contact</h1>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
