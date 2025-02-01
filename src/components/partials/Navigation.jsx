import { useState } from 'react';
import menu from '../../assets/images/menu.svg';
import home from '../../assets/images/home.svg';
import github from '../../assets/images/github.svg';
import Sidebar from './Sidebar';

export default function Navigation() {
	const [open, setIsOpen] = useState(false);

	return (
		<nav className="flex justify-between items-center p-3 bg-gray-700">
			<div className="relative">
				<button className="cursor-pointer" onClick={() => setIsOpen(!open)}>
					<img src={menu} alt="" className="invert size-5" />
				</button>
			</div>
			<h1>Navigation Bar</h1>
			<div>
				<div className='flex gap-3'>
					<a href="https://github.com/cafesmire" target='_blank'>
						<img src={github} alt="" className="invert size-5" />
					</a>
					<a href="/">
						<img src={home} alt="" className="invert size-5" />
					</a>
				</div>
			</div>
			{open && <Sidebar />}
		</nav>
	);
}
