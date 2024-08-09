import React from 'react';
import SideBar from './SideBar';
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
