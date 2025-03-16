import { useRef, useEffect } from 'react';
import { menu, home } from '../../assets/icons';

export default function Navigation({ props }) {
	const menuRef = useRef(null)
	const {sidebarOpen, setSidebarOpen} = props;

	useEffect(() => {
    if(!sidebarOpen) return;
    const handleClickOutside = (e) => {
      if(menuRef.current && !menuRef.current.contains(e.target)) setSidebarOpen(false);
    }
    document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
  }, [sidebarOpen, setSidebarOpen, menuRef]);

	const handleClick = () => setSidebarOpen(prev => !prev)

	return (
		<nav ref={menuRef} className="relative flex justify-between items-center p-5 bg-gray-700">
			<button className="cursor-pointer shrink-0" onClick={handleClick}>
				<img  src={menu} alt="" className="invert size-10" />
			</button>
			<h1 className="absolute left-1/2 -translate-x-1/2">Navigation Bar</h1>
			<div>
				<div className="flex gap-">
					<a href="/" className="shrink-0">
						<img src={home} alt="" className="invert size-10" />
					</a>
				</div>
			</div>
		</nav>
	);
}
