import { Outlet } from "react-router-dom";
import { useState } from "react";
import {Navigation, Sidebar, Footer} from './'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <Navigation handleClick={() => setSidebarOpen((prev) => !prev)} />
    <div className='relative flex-1 flex flex-col'>
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Outlet />
    </div>
    <Footer /> 
    </>
    
  );
}
