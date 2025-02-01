import menu from '../../assets/images/menu.svg';
import home from '../../assets/images/home.svg';
import { useState} from 'react';
import Sidebar from './Sidebar';

export default function Navigation() {
	const [open, setIsOpen] = useState(false);

	return (
		<div className="flex justify-between items-center p-3 bg-gray-700">
			<div className="relative">
				<button className='cursor-pointer' onClick={() => setIsOpen(!open)}><img src={menu} alt="" className="invert size-5" /></button>
			</div>
			<h1>Navigation Bar</h1>
			<div>

				<a href="/">
					<img src={home} alt="" className="invert size-5" />
				</a>
			</div>
			{open && <Sidebar />}
		</div>
	);
}
