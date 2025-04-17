import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import '../styles/layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
