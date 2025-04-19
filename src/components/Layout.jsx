import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import '../styles/layout.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';


const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className={`layout ${!isSidebarVisible ? 'sidebar-hidden' : 'sidebar-visible'}`}>
      { isSidebarVisible ? <Sidebar toggleSidebar={toggleSidebar} /> : <RxHamburgerMenu className='burger-menu' onClick={toggleSidebar} aria-label="Toggle sidebar"/>}
      
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
