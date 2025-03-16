import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside className='absolute top-0 left-0 flex flex-col min-h-full w-1/6 text-center p-4 bg-zinc-500 z-10'
      style={{
        transform: sidebarOpen ? 'translateX(0)': 'translateX(-100%)',
        visibility: sidebarOpen ? 'visible':'hidden',
        transition:'all ease-in-out 300ms'
      }}
      >
      <h1 className="border-b-2 text-[2.5rem]">Welcome</h1>
      <ul className="flex-1 flex flex-col justify-evenly">
        <li>
          <Link to="/about" onClick={() => setSidebarOpen((prev) => !prev)}>
            <h1>About Me</h1>
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setSidebarOpen((prev) => !prev)}>
            <h1>Projects</h1>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setSidebarOpen((prev) => !prev)}>
            <h1>Contact</h1>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
