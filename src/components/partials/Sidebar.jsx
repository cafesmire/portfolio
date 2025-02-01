import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="absolute flex flex-col p-2 gap-2 text-center rounded-sm border-2 border-gray-200 bg-zinc-400">
      <h1 className="border-b-2">Welcome</h1>
      <ul>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
