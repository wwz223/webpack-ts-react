import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navStyle = {
    backgroundColor: '#ffffff',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#f0f0f0',
    color: '#1a73e8'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const contentStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <nav style={navStyle}>
        <div style={containerStyle}>
          <Link to="/" style={isActive('/') ? activeLinkStyle : linkStyle}>首页</Link>
          <Link to="/dashboard" style={isActive('/dashboard') ? activeLinkStyle : linkStyle}>仪表盘</Link>
          <Link to="/about" style={isActive('/about') ? activeLinkStyle : linkStyle}>关于我们</Link>
        </div>
      </nav>
      <main style={containerStyle}>
        <div style={contentStyle}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
