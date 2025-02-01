import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-amber-900">
      <Navigation handleClick={() => setSidebarOpen((prev) => !prev)} />
      <div className={`relative flex flex-col flex-1 bg-stone-700`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className={`flex flex-col flex-1 transition-transform duration-300 ${sidebarOpen ? 'translate-x-25':'translate-x-0'}`}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
