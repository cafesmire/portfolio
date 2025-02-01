import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside>
      <div
        className={`absolute top-0 left-0 flex flex-col min-h-full w-25 text-center p-4 bg-zinc-500 transform-translate duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="border-b-2">Welcome</h1>
        <ul className="flex flex-col gap-6 text-sm">
          <li>
            <Link to="/about" onClick={() => setSidebarOpen((prev) => !prev)}>
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setSidebarOpen((prev) => !prev)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
