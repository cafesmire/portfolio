import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({sidebarOpen, setSidebarOpen}) {

	return (
		<aside>
			<div
				data-container="sidebar"
				className={`absolute top-0 left-0 h-full flex flex-col p-2 gap-2 text-center bg-zinc-400 transition-transform duration-300 ${
					sidebarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<h1 className="border-b-2">Welcome</h1>
				<ul className='basis-[30%] flex flex-col justify-evenly'>
					<li>
						<Link to="/about" onClick={() => setSidebarOpen(prev => !prev)}>About Me</Link>
					</li>
					<li>
						<Link to="/projects" onClick={() => setSidebarOpen(prev => !prev)} >Projects</Link>
					</li>
					<li>
						<Link to="/contact" onClick={() => setSidebarOpen(prev => !prev)} >Contact</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
}
