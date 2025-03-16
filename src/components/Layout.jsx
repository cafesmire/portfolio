import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <Navigation handleClick={() => setSidebarOpen((prev) => !prev)} />
    <div className='relative flex-1'>
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Outlet />
    </div>
    <Footer /> 
    </>
    
  );
}
